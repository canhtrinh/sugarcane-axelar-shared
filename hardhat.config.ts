import * as dotenv from "dotenv";

import { task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-contract-sizer";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config = {
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    overrides: {
      "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol": {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
      blockGasLimit: 12e6,
      allowUnlimitedContractSize: true,
    },
    // Ethreum Sepolia - Chain Id: 11155111
    testnetChainEthereum: {
      chainId: 11155111,
      url: process.env.TESTNET_RPC_ETHEREUM,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY,
        process.env.TEST_USER_PRIVATE_KEY_1,
      ],
    },
    // Polygon Mumbai - Chain Id: 80001
    testnetChainPolygon: {
      chainId: 80001,
      url: process.env.TESTNET_RPC_POLYGON,
      accounts: [
        process.env.TESTNET_DEPLOYER_PRIVATE_KEY,
        process.env.TEST_USER_PRIVATE_KEY_1,
      ],
    },
  },
  defaultNetwork: "hardhat",
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    gasPrice: 70,
    showTimeSpent: true,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
