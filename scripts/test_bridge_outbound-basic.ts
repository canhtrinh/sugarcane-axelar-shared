import {
  AxelarQueryAPI,
  AxelarQueryAPIConfig,
  AxelarQueryAPIFeeResponse,
  Environment,
  EvmChain,
  GasToken,
} from "@axelar-network/axelarjs-sdk";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import BigNumber from "bignumber.js";
import { Contract, ContractRunner, solidityPackedKeccak256 } from "ethers";
import { ethers, hardhatArguments } from "hardhat";

import SugarcaneMailboxOutboundV1Abi from "./imports/SugarcaneMailboxOutboundV1.abi";
import { SugarcaneMailboxOutboundV1 } from "./imports/SugarcaneMailboxOutboundV1";

import IERC20Abi from "./imports/IERC20.abi";
import { IERC20 } from "./imports/IERC20";

// // // // // // // // // // // // // // // // // // // //
// HELPER FUNCTIONS
// // // // // // // // // // // // // // // // // // // //

const addDecimals = (baseNumber: number, decimals: number) => {
  return BigNumber(10).pow(decimals).times(baseNumber).toString();
};

const convertToEth = (wei: string) => {
  return ethers.formatEther(wei);
};

const displayCost = (title: string, amount: bigint | string | BigNumber) =>
  console.log(
    `   - ${title}:`,
    convertToEth(amount.toString()),
    "(",
    amount,
    ")"
  );

const connect = <T>(
  address: string,
  abi: any[],
  runner?: ContractRunner | null
) => {
  return new Contract(address, abi, runner) as unknown as T;
};

// // // // // // // // // // // // // // // // // // // //
// MAIN
// // // // // // // // // // // // // // // // // // // //
async function main() {
  let deployer: SignerWithAddress;
  let addrs: SignerWithAddress[] = await ethers.getSigners();

  [deployer] = addrs;

  const isMumbaiToSepoliaRoute =
    hardhatArguments.network === "testnetChainPolygon";

  // // // // // // // // // // // // // // // // // // // //
  // SETTING DETAILS
  // // // // // // // // // // // // // // // // // // // //

  const chainDetails_Sepolia = {
    name: "ethereum-sepolia",
    chainId: 11155111,
    outbound: "0xAe9a44737c01FD342D4A976bBbEf4991eFCCcf20",
    aUSDC: "0x254d06f33bdc5b8ee05b2ea472107e300226659a",
    gasToken: GasToken.ETH,
  };
  const chainDetails_Mumbai = {
    name: "Polygon",
    chainId: 80001,
    outbound: "0x5430ae90Ed80ba573b9CF12C705EF06C2a3DDeB9",
    aUSDC: "0x2c852e740B62308c46DD29B982FBb650D063Bd07",
    gasToken: GasToken.MATIC,
  };

  const inputTokenAmount = 1.2;
  const inputTokenAmountWithDecimals = addDecimals(inputTokenAmount, 6);

  const sourceChainSender = deployer.address;
  const destinationChainReceiver = deployer.address;

  const sourceChainDetails = isMumbaiToSepoliaRoute
    ? chainDetails_Mumbai
    : chainDetails_Sepolia;

  const destinationChainDetails = isMumbaiToSepoliaRoute
    ? chainDetails_Sepolia
    : chainDetails_Mumbai;

  // // // // // // // // // // // // // // // // // // // //
  // CONTRACTS
  // // // // // // // // // // // // // // // // // // // //

  const sourceChain = sourceChainDetails.name;
  const sourceTokenAddress = sourceChainDetails.aUSDC;
  const sourceGasToken = sourceChainDetails.gasToken;
  const outboundMailboxContractAddress = sourceChainDetails.outbound;

  const destinationChain = destinationChainDetails.name;
  const destinationChainId = destinationChainDetails.chainId;
  const destinationTokenAddress = destinationChainDetails.aUSDC;

  const sourceTokenContract = connect<IERC20>(
    sourceTokenAddress,
    IERC20Abi,
    deployer
  );

  const outboundMailboxContract = connect<SugarcaneMailboxOutboundV1>(
    outboundMailboxContractAddress,
    SugarcaneMailboxOutboundV1Abi,
    deployer
  );

  const balanceBefore = await ethers.provider.getBalance(deployer);
  const tokenBalanceBefore = await sourceTokenContract.balanceOf(
    deployer.address
  );

  // // // // // // // // // // // // // // // // // // // //
  // CALCULATE BRIDGE COST
  // // // // // // // // // // // // // // // // // // // //

  const queryConfig: AxelarQueryAPIConfig = {
    environment: Environment.TESTNET,
  };
  const api = new AxelarQueryAPI(queryConfig);

  const axelarFeeBreakdown = (await api.estimateGasFee(
    // sourceChainId: EvmChain | string,
    sourceChain,
    // destinationChainId: EvmChain | string,
    destinationChain,

    // sourceChainTokenSymbol: GasToken | string,
    // "ETH",
    sourceGasToken,
    // gasLimit: number = DEFAULT_ESTIMATED_GAS, = 700k
    500000,
    // gasMultiplier = 1.1,
    1.1,
    // minGasPrice = "0",
    "0",
    // gmpParams?: GMPParams
    {
      // showDetailedFees: boolean;
      showDetailedFees: true,
      // // transferAmount: number; // In terms of symbol, not unit denom, e.g. use 1 for 1 axlUSDC, not 1000000
      // transferAmount: inputTokenAmount,
      // // sourceContractAddress: string;
      // sourceContractAddress: deployedAddresses(chainDetails.chain.name).dapp
      //   .MAILBOX_OUTBOUND,
      // // destinationContractAddress: string;
      // destinationContractAddress: deployedAddresses(
      //   destinationChainDetails.chain.name
      // ).dapp.MAILBOX_INBOUND,
      // // tokenSymbol: string;
      // tokenSymbol: chainDetails.axelar.bridgeTokenSymbol,
    } as any
  )) as AxelarQueryAPIFeeResponse;
  const bridgeCost = BigNumber(axelarFeeBreakdown.baseFee)
    .plus(axelarFeeBreakdown.executionFeeWithMultiplier)
    .plus(axelarFeeBreakdown.expressFee)
    .toString();

  console.log("\n-=-=-=- axelarFeeBreakdown");
  console.log(axelarFeeBreakdown);
  console.log("\n-=-=-=- bridgeCost");
  displayCost("bridgeCost", bridgeCost);

  // // // // // // // // // // // // // // // // // // // //
  // APPROVE THE BRIDGE
  // // // // // // // // // // // // // // // // // // // //

  // First approve the outbound mailbox to move the tokens
  const ethApproveTx = await sourceTokenContract.approve(
    outboundMailboxContractAddress,
    inputTokenAmountWithDecimals
  );
  await ethApproveTx.wait();

  console.log("\n-=-=-=- ethApproveTx");
  console.log(ethApproveTx);

  // // // // // // // // // // // // // // // // // // // //
  // HANDLE THE ACTION
  // // // // // // // // // // // // // // // // // // // //
  const bridgePayload = {
    // bytes32 sugarcaneId,
    sugarcaneId: solidityPackedKeccak256(["string"], ["0x123456789"]),
    // uint256 bridgeCost,
    bridgeCost: bridgeCost,
    // uint256 inputTokenAmount,
    inputTokenAmount: inputTokenAmountWithDecimals,
    // uint256 destinationChainId,
    destinationChainId: destinationChainId,

    // bytes memory sourceSwapDataPayload,
    sourceSwapDataPayload: "0x",

    // address sourceAssetStorageAddress,
    sourceAssetStorageAddress: sourceChainSender,
    // address sourceTokenAddress,
    sourceTokenAddress: sourceTokenAddress,
    // address destinationReceiverAddress,
    destinationReceiverAddress: destinationChainReceiver,
    // address destinationTokenAddress
    destinationTokenAddress: destinationTokenAddress,
  };
  console.log("\n-=-=-=- bridgePayload");
  console.log(bridgePayload);

  const bridgeTx = await outboundMailboxContract.bridgeSimple(
    // bytes32 sugarcaneId,
    bridgePayload.sugarcaneId,
    // uint256 bridgeCost,
    bridgePayload.bridgeCost,
    // uint256 inputTokenAmount,
    bridgePayload.inputTokenAmount,
    // uint256 destinationChainId,
    bridgePayload.destinationChainId,
    // bytes memory sourceSwapDataPayload,
    bridgePayload.sourceSwapDataPayload,
    // address sourceAssetStorageAddress,
    bridgePayload.sourceAssetStorageAddress,
    // address sourceTokenAddress,
    bridgePayload.sourceTokenAddress,
    // address destinationReceiverAddress,
    bridgePayload.destinationReceiverAddress,
    // address destinationTokenAddress
    bridgePayload.destinationTokenAddress
  );

  await bridgeTx.wait();

  console.log("\n-=-=-=- bridgeTx");
  console.log(bridgeTx);

  // // // // // // // // // // // // // // // // // // // //
  // WRAP UP
  // // // // // // // // // // // // // // // // // // // //

  const tokenBalanceAfter = await sourceTokenContract.balanceOf(
    deployer.address
  );
  const balanceAfter = await ethers.provider.getBalance(deployer);

  console.log(`\n*** *** *** [ TOKEN BALANCE ] *** *** ***`);
  console.log("   - Before:", tokenBalanceBefore);
  console.log("   - After:", tokenBalanceAfter);
  console.log("   - Difference:", tokenBalanceBefore - tokenBalanceAfter);

  console.log(`\n*** *** *** [ BALANCE ] *** *** ***`);
  displayCost("Before", balanceBefore);
  displayCost("After", balanceAfter);
  displayCost("Difference", balanceBefore - balanceAfter);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
