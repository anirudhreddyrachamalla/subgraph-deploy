// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BetPlaced extends ethereum.Event {
  get params(): BetPlaced__Params {
    return new BetPlaced__Params(this);
  }
}

export class BetPlaced__Params {
  _event: BetPlaced;

  constructor(event: BetPlaced) {
    this._event = event;
  }

  get betId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get choice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class BetRefunded extends ethereum.Event {
  get params(): BetRefunded__Params {
    return new BetRefunded__Params(this);
  }
}

export class BetRefunded__Params {
  _event: BetRefunded;

  constructor(event: BetRefunded) {
    this._event = event;
  }

  get betId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class BetSettled extends ethereum.Event {
  get params(): BetSettled__Params {
    return new BetSettled__Params(this);
  }
}

export class BetSettled__Params {
  _event: BetSettled;

  constructor(event: BetSettled) {
    this._event = event;
  }

  get betId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get choice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get outcome(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get winAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[6].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Dice__betsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: Address;
  value7: boolean;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: Address,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    return map;
  }

  getChoice(): BigInt {
    return this.value0;
  }

  getOutcome(): BigInt {
    return this.value1;
  }

  getPlaceBlockNumber(): BigInt {
    return this.value2;
  }

  getAmount(): BigInt {
    return this.value3;
  }

  getWinAmount(): BigInt {
    return this.value4;
  }

  getPlayer(): Address {
    return this.value5;
  }

  getToken(): Address {
    return this.value6;
  }

  getIsSettled(): boolean {
    return this.value7;
  }
}

export class Dice__supportedTokenInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getMinBetAmount(): BigInt {
    return this.value0;
  }

  getMaxBetAmount(): BigInt {
    return this.value1;
  }

  getHouseEdgeBP(): BigInt {
    return this.value2;
  }
}

export class Dice extends ethereum.SmartContract {
  static bind(address: Address): Dice {
    return new Dice("Dice", address);
  }

  betMap(param0: Bytes, param1: BigInt): BigInt {
    let result = super.call("betMap", "betMap(bytes32,uint256):(uint256)", [
      ethereum.Value.fromFixedBytes(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBigInt();
  }

  try_betMap(param0: Bytes, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("betMap", "betMap(bytes32,uint256):(uint256)", [
      ethereum.Value.fromFixedBytes(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bets(param0: BigInt): Dice__betsResult {
    let result = super.call(
      "bets",
      "bets(uint256):(uint40,uint40,uint168,uint128,uint128,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Dice__betsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toBoolean()
    );
  }

  try_bets(param0: BigInt): ethereum.CallResult<Dice__betsResult> {
    let result = super.tryCall(
      "bets",
      "bets(uint256):(uint40,uint40,uint168,uint128,uint128,address,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Dice__betsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toBoolean()
      )
    );
  }

  betsLength(): BigInt {
    let result = super.call("betsLength", "betsLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_betsLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("betsLength", "betsLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkBalance(): BigInt {
    let result = super.call("checkBalance", "checkBalance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_checkBalance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("checkBalance", "checkBalance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gameIsLive(): boolean {
    let result = super.call("gameIsLive", "gameIsLive():(bool)", []);

    return result[0].toBoolean();
  }

  try_gameIsLive(): ethereum.CallResult<boolean> {
    let result = super.tryCall("gameIsLive", "gameIsLive():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getBetChoice(id: BigInt): BigInt {
    let result = super.call("getBetChoice", "getBetChoice(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_getBetChoice(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getBetChoice",
      "getBetChoice(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxCoinsBettable(): BigInt {
    let result = super.call(
      "maxCoinsBettable",
      "maxCoinsBettable():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxCoinsBettable(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxCoinsBettable",
      "maxCoinsBettable():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  RandomNumbergenrator(): BigInt {
    let result = super.call(
      "RandomNumbergenrator",
      "RandomNumbergenrator():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_RandomNumbergenrator(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "RandomNumbergenrator",
      "RandomNumbergenrator():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportedTokenInfo(param0: Address): Dice__supportedTokenInfoResult {
    let result = super.call(
      "supportedTokenInfo",
      "supportedTokenInfo(address):(uint128,uint128,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Dice__supportedTokenInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_supportedTokenInfo(
    param0: Address
  ): ethereum.CallResult<Dice__supportedTokenInfoResult> {
    let result = super.tryCall(
      "supportedTokenInfo",
      "supportedTokenInfo(address):(uint128,uint128,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Dice__supportedTokenInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  VRFManagerAddress(): Address {
    let result = super.call(
      "VRFManagerAddress",
      "VRFManagerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_VRFManagerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "VRFManagerAddress",
      "VRFManagerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class InitializeHouseCall extends ethereum.Call {
  get inputs(): InitializeHouseCall__Inputs {
    return new InitializeHouseCall__Inputs(this);
  }

  get outputs(): InitializeHouseCall__Outputs {
    return new InitializeHouseCall__Outputs(this);
  }
}

export class InitializeHouseCall__Inputs {
  _call: InitializeHouseCall;

  constructor(call: InitializeHouseCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeHouseCall__Outputs {
  _call: InitializeHouseCall;

  constructor(call: InitializeHouseCall) {
    this._call = call;
  }
}

export class InitializeVRFManagerCall extends ethereum.Call {
  get inputs(): InitializeVRFManagerCall__Inputs {
    return new InitializeVRFManagerCall__Inputs(this);
  }

  get outputs(): InitializeVRFManagerCall__Outputs {
    return new InitializeVRFManagerCall__Outputs(this);
  }
}

export class InitializeVRFManagerCall__Inputs {
  _call: InitializeVRFManagerCall;

  constructor(call: InitializeVRFManagerCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeVRFManagerCall__Outputs {
  _call: InitializeVRFManagerCall;

  constructor(call: InitializeVRFManagerCall) {
    this._call = call;
  }
}

export class PlaceBetProtocolCall extends ethereum.Call {
  get inputs(): PlaceBetProtocolCall__Inputs {
    return new PlaceBetProtocolCall__Inputs(this);
  }

  get outputs(): PlaceBetProtocolCall__Outputs {
    return new PlaceBetProtocolCall__Outputs(this);
  }
}

export class PlaceBetProtocolCall__Inputs {
  _call: PlaceBetProtocolCall;

  constructor(call: PlaceBetProtocolCall) {
    this._call = call;
  }

  get betChoice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PlaceBetProtocolCall__Outputs {
  _call: PlaceBetProtocolCall;

  constructor(call: PlaceBetProtocolCall) {
    this._call = call;
  }
}

export class RefundBetCall extends ethereum.Call {
  get inputs(): RefundBetCall__Inputs {
    return new RefundBetCall__Inputs(this);
  }

  get outputs(): RefundBetCall__Outputs {
    return new RefundBetCall__Outputs(this);
  }
}

export class RefundBetCall__Inputs {
  _call: RefundBetCall;

  constructor(call: RefundBetCall) {
    this._call = call;
  }

  get betId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RefundBetCall__Outputs {
  _call: RefundBetCall;

  constructor(call: RefundBetCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetHouseEdgeBPCall extends ethereum.Call {
  get inputs(): SetHouseEdgeBPCall__Inputs {
    return new SetHouseEdgeBPCall__Inputs(this);
  }

  get outputs(): SetHouseEdgeBPCall__Outputs {
    return new SetHouseEdgeBPCall__Outputs(this);
  }
}

export class SetHouseEdgeBPCall__Inputs {
  _call: SetHouseEdgeBPCall;

  constructor(call: SetHouseEdgeBPCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _houseEdgeBP(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetHouseEdgeBPCall__Outputs {
  _call: SetHouseEdgeBPCall;

  constructor(call: SetHouseEdgeBPCall) {
    this._call = call;
  }
}

export class SetMaxBetAmountCall extends ethereum.Call {
  get inputs(): SetMaxBetAmountCall__Inputs {
    return new SetMaxBetAmountCall__Inputs(this);
  }

  get outputs(): SetMaxBetAmountCall__Outputs {
    return new SetMaxBetAmountCall__Outputs(this);
  }
}

export class SetMaxBetAmountCall__Inputs {
  _call: SetMaxBetAmountCall;

  constructor(call: SetMaxBetAmountCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _maxBetAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetMaxBetAmountCall__Outputs {
  _call: SetMaxBetAmountCall;

  constructor(call: SetMaxBetAmountCall) {
    this._call = call;
  }
}

export class SetMaxCoinsBettableCall extends ethereum.Call {
  get inputs(): SetMaxCoinsBettableCall__Inputs {
    return new SetMaxCoinsBettableCall__Inputs(this);
  }

  get outputs(): SetMaxCoinsBettableCall__Outputs {
    return new SetMaxCoinsBettableCall__Outputs(this);
  }
}

export class SetMaxCoinsBettableCall__Inputs {
  _call: SetMaxCoinsBettableCall;

  constructor(call: SetMaxCoinsBettableCall) {
    this._call = call;
  }

  get _maxCoinsBettable(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxCoinsBettableCall__Outputs {
  _call: SetMaxCoinsBettableCall;

  constructor(call: SetMaxCoinsBettableCall) {
    this._call = call;
  }
}

export class SetMinBetAmountCall extends ethereum.Call {
  get inputs(): SetMinBetAmountCall__Inputs {
    return new SetMinBetAmountCall__Inputs(this);
  }

  get outputs(): SetMinBetAmountCall__Outputs {
    return new SetMinBetAmountCall__Outputs(this);
  }
}

export class SetMinBetAmountCall__Inputs {
  _call: SetMinBetAmountCall;

  constructor(call: SetMinBetAmountCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _minBetAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetMinBetAmountCall__Outputs {
  _call: SetMinBetAmountCall;

  constructor(call: SetMinBetAmountCall) {
    this._call = call;
  }
}

export class ToggleGameIsLiveCall extends ethereum.Call {
  get inputs(): ToggleGameIsLiveCall__Inputs {
    return new ToggleGameIsLiveCall__Inputs(this);
  }

  get outputs(): ToggleGameIsLiveCall__Outputs {
    return new ToggleGameIsLiveCall__Outputs(this);
  }
}

export class ToggleGameIsLiveCall__Inputs {
  _call: ToggleGameIsLiveCall;

  constructor(call: ToggleGameIsLiveCall) {
    this._call = call;
  }
}

export class ToggleGameIsLiveCall__Outputs {
  _call: ToggleGameIsLiveCall;

  constructor(call: ToggleGameIsLiveCall) {
    this._call = call;
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }
}

export class TransferERC20Call extends ethereum.Call {
  get inputs(): TransferERC20Call__Inputs {
    return new TransferERC20Call__Inputs(this);
  }

  get outputs(): TransferERC20Call__Outputs {
    return new TransferERC20Call__Outputs(this);
  }
}

export class TransferERC20Call__Inputs {
  _call: TransferERC20Call;

  constructor(call: TransferERC20Call) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get tokenAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class TransferERC20Call__Outputs {
  _call: TransferERC20Call;

  constructor(call: TransferERC20Call) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class WithdrawCustomTokenFundsCall extends ethereum.Call {
  get inputs(): WithdrawCustomTokenFundsCall__Inputs {
    return new WithdrawCustomTokenFundsCall__Inputs(this);
  }

  get outputs(): WithdrawCustomTokenFundsCall__Outputs {
    return new WithdrawCustomTokenFundsCall__Outputs(this);
  }
}

export class WithdrawCustomTokenFundsCall__Inputs {
  _call: WithdrawCustomTokenFundsCall;

  constructor(call: WithdrawCustomTokenFundsCall) {
    this._call = call;
  }

  get beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get token(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawCustomTokenFundsCall__Outputs {
  _call: WithdrawCustomTokenFundsCall;

  constructor(call: WithdrawCustomTokenFundsCall) {
    this._call = call;
  }
}

export class WithdrawFundsCall extends ethereum.Call {
  get inputs(): WithdrawFundsCall__Inputs {
    return new WithdrawFundsCall__Inputs(this);
  }

  get outputs(): WithdrawFundsCall__Outputs {
    return new WithdrawFundsCall__Outputs(this);
  }
}

export class WithdrawFundsCall__Inputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }

  get beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get withdrawAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawFundsCall__Outputs {
  _call: WithdrawFundsCall;

  constructor(call: WithdrawFundsCall) {
    this._call = call;
  }
}
