import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface SugarcaneMailboxOutboundV1Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS"
      | "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS"
      | "AS_DAPP_MAILBOX_INBOUND_ADDRESS"
      | "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS"
      | "AS_EXT_ASSET_STORE_FACTORY_ADDRESS"
      | "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS"
      | "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS"
      | "AS_EXT_BRIDGE_GATEWAY_ADDRESS"
      | "AS_EXT_SWAP_ROUTER_ADDRESS"
      | "AS_PAY_STATION_ADDRESS"
      | "AS_ROLE_REGISTRY_ADDRESS"
      | "AS_SYSTEM_STATUS_ADDRESS"
      | "RR_DAPP_ADMIN_ROLE"
      | "RR_DAPP_PAUSER_ROLE"
      | "RR_STAGE_INITIATOR_ROLE"
      | "accountRegistry"
      | "addAxelarChainDetails"
      | "addMailboxChainDetails"
      | "addressStore"
      | "axelarChainName"
      | "axelarGasService"
      | "axelarGateway"
      | "bridgeSimple"
      | "initializedAxelarChainIds"
      | "initializedAxelarChainNameHashes"
      | "initializedMailboxChainDetails"
      | "isAxelarChainDetailsActive"
      | "isAxelarChainDetailsInitialized"
      | "isMailboxChainDetailsActive"
      | "isMailboxChainDetailsInitialized"
      | "mailboxTargetInboundAddress"
      | "outboundNonce"
      | "pausedDapp"
      | "payStation"
      | "roleRegistry"
      | "swapRouter"
      | "systemStatus"
      | "transferAddressStore"
      | "updateAxelarChainActiveStatus"
      | "updateAxelarChainName"
      | "updateMailboxChainActiveStatus"
      | "updateMailboxTargetInboundAddress"
      | "version"
      | "versionDapp"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedAxelarChainDetails"
      | "AddedMailboxChainDetails"
      | "AddressStoreChanged"
      | "ExecutedBridge"
      | "UpdatedAxelarChainDetails"
      | "UpdatedMailboxChainDetails"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_DAPP_MAILBOX_INBOUND_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_BRIDGE_GATEWAY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_EXT_SWAP_ROUTER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_PAY_STATION_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_ROLE_REGISTRY_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "AS_SYSTEM_STATUS_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_DAPP_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_DAPP_PAUSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RR_STAGE_INITIATOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "accountRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAxelarChainDetails",
    values: [BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "addMailboxChainDetails",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "addressStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "axelarChainName",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "axelarGasService",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "axelarGateway",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeSimple",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initializedAxelarChainIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializedAxelarChainNameHashes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializedMailboxChainDetails",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAxelarChainDetailsActive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAxelarChainDetailsInitialized",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isMailboxChainDetailsActive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isMailboxChainDetailsInitialized",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mailboxTargetInboundAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "outboundNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pausedDapp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payStation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "roleRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "systemStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferAddressStore",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAxelarChainActiveStatus",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAxelarChainName",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMailboxChainActiveStatus",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMailboxTargetInboundAddress",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "versionDapp",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_DAPP_MAILBOX_INBOUND_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_BRIDGE_GATEWAY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_EXT_SWAP_ROUTER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_PAY_STATION_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_ROLE_REGISTRY_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "AS_SYSTEM_STATUS_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_DAPP_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_DAPP_PAUSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RR_STAGE_INITIATOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accountRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAxelarChainDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addMailboxChainDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "axelarChainName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "axelarGasService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "axelarGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bridgeSimple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializedAxelarChainIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializedAxelarChainNameHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializedMailboxChainDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAxelarChainDetailsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAxelarChainDetailsInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMailboxChainDetailsActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isMailboxChainDetailsInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mailboxTargetInboundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "outboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pausedDapp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payStation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roleRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapRouter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "systemStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAddressStore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAxelarChainActiveStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAxelarChainName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMailboxChainActiveStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMailboxTargetInboundAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "versionDapp",
    data: BytesLike
  ): Result;
}

export namespace AddedAxelarChainDetailsEvent {
  export type InputTuple = [
    operator: AddressLike,
    chainId: BigNumberish,
    chainName: string,
    isActive: boolean,
  ];
  export type OutputTuple = [
    operator: string,
    chainId: bigint,
    chainName: string,
    isActive: boolean,
  ];
  export interface OutputObject {
    operator: string;
    chainId: bigint;
    chainName: string;
    isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddedMailboxChainDetailsEvent {
  export type InputTuple = [
    operator: AddressLike,
    chainId: BigNumberish,
    targetInboundAddress: AddressLike,
    isActive: boolean,
  ];
  export type OutputTuple = [
    operator: string,
    chainId: bigint,
    targetInboundAddress: string,
    isActive: boolean,
  ];
  export interface OutputObject {
    operator: string;
    chainId: bigint;
    targetInboundAddress: string;
    isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddressStoreChangedEvent {
  export type InputTuple = [
    operator: AddressLike,
    oldAddressStore: AddressLike,
    newAddressStore: AddressLike,
  ];
  export type OutputTuple = [
    operator: string,
    oldAddressStore: string,
    newAddressStore: string,
  ];
  export interface OutputObject {
    operator: string;
    oldAddressStore: string;
    newAddressStore: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExecutedBridgeEvent {
  export type InputTuple = [
    messageId: BytesLike,
    sugarcaneId: BigNumberish,
    bridgeCost: BigNumberish,
    destinationChainId: BigNumberish,
    bridgeTokenBalance: BigNumberish,
    destinationTokenAddress: AddressLike,
    destinationReceiverAddress: AddressLike,
    senderAddress: AddressLike,
    sourceAssetStorageAddress: AddressLike,
    sourceTokenAddress: AddressLike,
  ];
  export type OutputTuple = [
    messageId: string,
    sugarcaneId: bigint,
    bridgeCost: bigint,
    destinationChainId: bigint,
    bridgeTokenBalance: bigint,
    destinationTokenAddress: string,
    destinationReceiverAddress: string,
    senderAddress: string,
    sourceAssetStorageAddress: string,
    sourceTokenAddress: string,
  ];
  export interface OutputObject {
    messageId: string;
    sugarcaneId: bigint;
    bridgeCost: bigint;
    destinationChainId: bigint;
    bridgeTokenBalance: bigint;
    destinationTokenAddress: string;
    destinationReceiverAddress: string;
    senderAddress: string;
    sourceAssetStorageAddress: string;
    sourceTokenAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedAxelarChainDetailsEvent {
  export type InputTuple = [
    operator: AddressLike,
    chainId: BigNumberish,
    chainName: string,
    isActive: boolean,
  ];
  export type OutputTuple = [
    operator: string,
    chainId: bigint,
    chainName: string,
    isActive: boolean,
  ];
  export interface OutputObject {
    operator: string;
    chainId: bigint;
    chainName: string;
    isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedMailboxChainDetailsEvent {
  export type InputTuple = [
    operator: AddressLike,
    chainId: BigNumberish,
    targetInboundAddress: AddressLike,
    isActive: boolean,
  ];
  export type OutputTuple = [
    operator: string,
    chainId: bigint,
    targetInboundAddress: string,
    isActive: boolean,
  ];
  export interface OutputObject {
    operator: string;
    chainId: bigint;
    targetInboundAddress: string;
    isActive: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SugarcaneMailboxOutboundV1 extends BaseContract {
  connect(runner?: ContractRunner | null): SugarcaneMailboxOutboundV1;
  waitForDeployment(): Promise<this>;

  interface: SugarcaneMailboxOutboundV1Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  AS_DAPP_ACCOUNT_REGISTRY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_DAPP_MAILBOX_INBOUND_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_DAPP_MAILBOX_OUTBOUND_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_ASSET_STORE_FACTORY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_ASSET_STORE_SINGLETON_ADDRESS: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_BRIDGE_GATEWAY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_EXT_SWAP_ROUTER_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_PAY_STATION_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_ROLE_REGISTRY_ADDRESS: TypedContractMethod<[], [string], "view">;

  AS_SYSTEM_STATUS_ADDRESS: TypedContractMethod<[], [string], "view">;

  RR_DAPP_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  RR_DAPP_PAUSER_ROLE: TypedContractMethod<[], [string], "view">;

  RR_STAGE_INITIATOR_ROLE: TypedContractMethod<[], [string], "view">;

  accountRegistry: TypedContractMethod<[], [string], "view">;

  addAxelarChainDetails: TypedContractMethod<
    [chainId: BigNumberish, chainName: string, isActive: boolean],
    [void],
    "nonpayable"
  >;

  addMailboxChainDetails: TypedContractMethod<
    [
      chainId: BigNumberish,
      targetInboundAddress: AddressLike,
      isActive: boolean,
    ],
    [void],
    "nonpayable"
  >;

  addressStore: TypedContractMethod<[], [string], "view">;

  axelarChainName: TypedContractMethod<
    [chainId: BigNumberish],
    [string],
    "view"
  >;

  axelarGasService: TypedContractMethod<[], [string], "view">;

  axelarGateway: TypedContractMethod<[], [string], "view">;

  bridgeSimple: TypedContractMethod<
    [
      sugarcaneId: BigNumberish,
      bridgeCost: BigNumberish,
      inputTokenAmount: BigNumberish,
      destinationChainId: BigNumberish,
      sourceSwapDataPayload: BytesLike,
      sourceAssetStorageAddress: AddressLike,
      sourceTokenAddress: AddressLike,
      destinationReceiverAddress: AddressLike,
      destinationTokenAddress: AddressLike,
    ],
    [void],
    "nonpayable"
  >;

  initializedAxelarChainIds: TypedContractMethod<[], [bigint[]], "view">;

  initializedAxelarChainNameHashes: TypedContractMethod<[], [string[]], "view">;

  initializedMailboxChainDetails: TypedContractMethod<[], [bigint[]], "view">;

  isAxelarChainDetailsActive: TypedContractMethod<
    [chainId: BigNumberish],
    [boolean],
    "view"
  >;

  isAxelarChainDetailsInitialized: TypedContractMethod<
    [chainId: BigNumberish],
    [boolean],
    "view"
  >;

  isMailboxChainDetailsActive: TypedContractMethod<
    [chainId: BigNumberish],
    [boolean],
    "view"
  >;

  isMailboxChainDetailsInitialized: TypedContractMethod<
    [chainId: BigNumberish],
    [boolean],
    "view"
  >;

  mailboxTargetInboundAddress: TypedContractMethod<
    [chainId: BigNumberish],
    [string],
    "view"
  >;

  outboundNonce: TypedContractMethod<[], [bigint], "view">;

  pausedDapp: TypedContractMethod<[], [boolean], "view">;

  payStation: TypedContractMethod<[], [string], "view">;

  roleRegistry: TypedContractMethod<[], [string], "view">;

  swapRouter: TypedContractMethod<[], [string], "view">;

  systemStatus: TypedContractMethod<[], [string], "view">;

  transferAddressStore: TypedContractMethod<
    [newAddressStore: AddressLike],
    [void],
    "nonpayable"
  >;

  updateAxelarChainActiveStatus: TypedContractMethod<
    [chainId: BigNumberish, isActive: boolean],
    [void],
    "nonpayable"
  >;

  updateAxelarChainName: TypedContractMethod<
    [chainId: BigNumberish, chainName: string],
    [void],
    "nonpayable"
  >;

  updateMailboxChainActiveStatus: TypedContractMethod<
    [chainId: BigNumberish, isActive: boolean],
    [void],
    "nonpayable"
  >;

  updateMailboxTargetInboundAddress: TypedContractMethod<
    [chainId: BigNumberish, targetInboundAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  version: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  versionDapp: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "AS_DAPP_ACCOUNT_REGISTRATION_SIGNER_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_DAPP_ACCOUNT_REGISTRY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_DAPP_MAILBOX_INBOUND_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_DAPP_MAILBOX_OUTBOUND_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_ASSET_STORE_FACTORY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_ASSET_STORE_SINGLETON_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_BRIDGE_GAS_SERVICE_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_BRIDGE_GATEWAY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_EXT_SWAP_ROUTER_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_PAY_STATION_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_ROLE_REGISTRY_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "AS_SYSTEM_STATUS_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_DAPP_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_DAPP_PAUSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "RR_STAGE_INITIATOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "accountRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addAxelarChainDetails"
  ): TypedContractMethod<
    [chainId: BigNumberish, chainName: string, isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addMailboxChainDetails"
  ): TypedContractMethod<
    [
      chainId: BigNumberish,
      targetInboundAddress: AddressLike,
      isActive: boolean,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addressStore"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "axelarChainName"
  ): TypedContractMethod<[chainId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "axelarGasService"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "axelarGateway"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bridgeSimple"
  ): TypedContractMethod<
    [
      sugarcaneId: BigNumberish,
      bridgeCost: BigNumberish,
      inputTokenAmount: BigNumberish,
      destinationChainId: BigNumberish,
      sourceSwapDataPayload: BytesLike,
      sourceAssetStorageAddress: AddressLike,
      sourceTokenAddress: AddressLike,
      destinationReceiverAddress: AddressLike,
      destinationTokenAddress: AddressLike,
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initializedAxelarChainIds"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "initializedAxelarChainNameHashes"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "initializedMailboxChainDetails"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "isAxelarChainDetailsActive"
  ): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isAxelarChainDetailsInitialized"
  ): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isMailboxChainDetailsActive"
  ): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isMailboxChainDetailsInitialized"
  ): TypedContractMethod<[chainId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "mailboxTargetInboundAddress"
  ): TypedContractMethod<[chainId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "outboundNonce"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pausedDapp"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "payStation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "roleRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "swapRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "systemStatus"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferAddressStore"
  ): TypedContractMethod<[newAddressStore: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateAxelarChainActiveStatus"
  ): TypedContractMethod<
    [chainId: BigNumberish, isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateAxelarChainName"
  ): TypedContractMethod<
    [chainId: BigNumberish, chainName: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateMailboxChainActiveStatus"
  ): TypedContractMethod<
    [chainId: BigNumberish, isActive: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateMailboxTargetInboundAddress"
  ): TypedContractMethod<
    [chainId: BigNumberish, targetInboundAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "versionDapp"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  getEvent(
    key: "AddedAxelarChainDetails"
  ): TypedContractEvent<
    AddedAxelarChainDetailsEvent.InputTuple,
    AddedAxelarChainDetailsEvent.OutputTuple,
    AddedAxelarChainDetailsEvent.OutputObject
  >;
  getEvent(
    key: "AddedMailboxChainDetails"
  ): TypedContractEvent<
    AddedMailboxChainDetailsEvent.InputTuple,
    AddedMailboxChainDetailsEvent.OutputTuple,
    AddedMailboxChainDetailsEvent.OutputObject
  >;
  getEvent(
    key: "AddressStoreChanged"
  ): TypedContractEvent<
    AddressStoreChangedEvent.InputTuple,
    AddressStoreChangedEvent.OutputTuple,
    AddressStoreChangedEvent.OutputObject
  >;
  getEvent(
    key: "ExecutedBridge"
  ): TypedContractEvent<
    ExecutedBridgeEvent.InputTuple,
    ExecutedBridgeEvent.OutputTuple,
    ExecutedBridgeEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedAxelarChainDetails"
  ): TypedContractEvent<
    UpdatedAxelarChainDetailsEvent.InputTuple,
    UpdatedAxelarChainDetailsEvent.OutputTuple,
    UpdatedAxelarChainDetailsEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedMailboxChainDetails"
  ): TypedContractEvent<
    UpdatedMailboxChainDetailsEvent.InputTuple,
    UpdatedMailboxChainDetailsEvent.OutputTuple,
    UpdatedMailboxChainDetailsEvent.OutputObject
  >;

  filters: {
    "AddedAxelarChainDetails(address,uint256,string,bool)": TypedContractEvent<
      AddedAxelarChainDetailsEvent.InputTuple,
      AddedAxelarChainDetailsEvent.OutputTuple,
      AddedAxelarChainDetailsEvent.OutputObject
    >;
    AddedAxelarChainDetails: TypedContractEvent<
      AddedAxelarChainDetailsEvent.InputTuple,
      AddedAxelarChainDetailsEvent.OutputTuple,
      AddedAxelarChainDetailsEvent.OutputObject
    >;

    "AddedMailboxChainDetails(address,uint256,address,bool)": TypedContractEvent<
      AddedMailboxChainDetailsEvent.InputTuple,
      AddedMailboxChainDetailsEvent.OutputTuple,
      AddedMailboxChainDetailsEvent.OutputObject
    >;
    AddedMailboxChainDetails: TypedContractEvent<
      AddedMailboxChainDetailsEvent.InputTuple,
      AddedMailboxChainDetailsEvent.OutputTuple,
      AddedMailboxChainDetailsEvent.OutputObject
    >;

    "AddressStoreChanged(address,address,address)": TypedContractEvent<
      AddressStoreChangedEvent.InputTuple,
      AddressStoreChangedEvent.OutputTuple,
      AddressStoreChangedEvent.OutputObject
    >;
    AddressStoreChanged: TypedContractEvent<
      AddressStoreChangedEvent.InputTuple,
      AddressStoreChangedEvent.OutputTuple,
      AddressStoreChangedEvent.OutputObject
    >;

    "ExecutedBridge(bytes32,uint256,uint256,uint256,uint256,address,address,address,address,address)": TypedContractEvent<
      ExecutedBridgeEvent.InputTuple,
      ExecutedBridgeEvent.OutputTuple,
      ExecutedBridgeEvent.OutputObject
    >;
    ExecutedBridge: TypedContractEvent<
      ExecutedBridgeEvent.InputTuple,
      ExecutedBridgeEvent.OutputTuple,
      ExecutedBridgeEvent.OutputObject
    >;

    "UpdatedAxelarChainDetails(address,uint256,string,bool)": TypedContractEvent<
      UpdatedAxelarChainDetailsEvent.InputTuple,
      UpdatedAxelarChainDetailsEvent.OutputTuple,
      UpdatedAxelarChainDetailsEvent.OutputObject
    >;
    UpdatedAxelarChainDetails: TypedContractEvent<
      UpdatedAxelarChainDetailsEvent.InputTuple,
      UpdatedAxelarChainDetailsEvent.OutputTuple,
      UpdatedAxelarChainDetailsEvent.OutputObject
    >;

    "UpdatedMailboxChainDetails(address,uint256,address,bool)": TypedContractEvent<
      UpdatedMailboxChainDetailsEvent.InputTuple,
      UpdatedMailboxChainDetailsEvent.OutputTuple,
      UpdatedMailboxChainDetailsEvent.OutputObject
    >;
    UpdatedMailboxChainDetails: TypedContractEvent<
      UpdatedMailboxChainDetailsEvent.InputTuple,
      UpdatedMailboxChainDetailsEvent.OutputTuple,
      UpdatedMailboxChainDetailsEvent.OutputObject
    >;
  };
}
