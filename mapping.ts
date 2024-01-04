import { ExecuteDecreasePosition, ExecuteIncreasePosition } from "./generated/OrderManager/OrderManager";
import {AddLiquidity, RemoveLiquidity} from "./generated/LLPManager/LLPManager"
import { Positions, LPEvent } from "./generated/schema";


export function handleIncreasePositionEvent(event: ExecuteIncreasePosition): void{
    let entity = new Positions(event.transaction.hash.concatI32(event.logIndex.toI32()));
    entity.account = event.params.account;
    entity.indexToken = event.params.indexToken;
    entity.amount = event.params.amountIn;
    entity.sizeDelta = event.params.sizeDelta;
    entity.acceptablePrice = event.params.acceptablePrice;
    entity.executionFee = event.params.executionFee;
    entity.isLong = event.params.isLong;
    entity.save();
}

export function handleDecreasePositionEvent(event: ExecuteDecreasePosition): void{
    let entity = new Positions(event.transaction.hash.concatI32(event.logIndex.toI32()));
    entity.account = event.params.account;
    entity.indexToken = event.params.indexToken;
    entity.sizeDelta = event.params.sizeDelta;
    entity.acceptablePrice = event.params.acceptablePrice;
    entity.executionFee = event.params.executionFee;
    entity.isLong = event.params.isLong;
    entity.save();
}

export function handleAddLiquidityEvent(event: AddLiquidity): void{
    let entity = new LPEvent(event.transaction.hash.concatI32(event.logIndex.toI32()));
    entity.account = event.params.account;
    entity.token = event.params.token;
    entity.amount = event.params.amount;
    entity.aumInUsdl = event.params.aumInusdl;
    entity.llpSupply = event.params.llpSupply;
    entity.usdlAmount = event.params.usdlAmount;
    entity.mintAmount = event.params.mintAmount;
    entity.save();
}

export function handleRemoveLiquidityEvent(event: RemoveLiquidity): void{
    let entity = new LPEvent(event.transaction.hash.concatI32(event.logIndex.toI32()));
    entity.account = event.params.account;
    entity.token = event.params.token;
    entity.llpAmount = event.params.llpAmount;
    entity.aumInUsdl = event.params.aumInusdl;
    entity.llpSupply = event.params.llpSupply;
    entity.usdlAmount = event.params.usdlAmount;
    entity.amountOut = event.params.amountOut;
    entity.save();
}
  
