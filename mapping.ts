import { ExecuteDecreasePosition, ExecuteIncreasePosition } from "./generated/OrderManager/OrderManager";
import { IncreasePosition, DecreasePosition } from "./generated/schema";


export function handleIncreasePositionEvent(event: ExecuteIncreasePosition): void{
    let entity = new IncreasePosition(event.transaction.hash.concatI32(event.logIndex.toI32()));
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
    let entity = new DecreasePosition(event.transaction.hash.concatI32(event.logIndex.toI32()));
    entity.account = event.params.account;
    entity.indexToken = event.params.indexToken;
    entity.sizeDelta = event.params.sizeDelta;
    entity.acceptablePrice = event.params.acceptablePrice;
    entity.executionFee = event.params.executionFee;
    entity.isLong = event.params.isLong;
    entity.save();
}


