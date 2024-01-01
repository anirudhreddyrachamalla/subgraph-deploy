
import { AddLiquidity, RemoveLiquidity } from "./generated/LLPManager/LLPManager";
import { AddLP, RemoveLP } from "./generated/schema";

export function handleAddLiquidityEvent(event: AddLiquidity): void{
    let entity = new AddLP(event.transaction.hash.concatI32(event.logIndex.toI32()));
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
    let entity = new RemoveLP(event.transaction.hash.concatI32(event.logIndex.toI32()));
    entity.account = event.params.account;
    entity.token = event.params.token;
    entity.llpAmount = event.params.llpAmount;
    entity.aumInUsdl = event.params.aumInusdl;
    entity.llpSupply = event.params.llpSupply;
    entity.usdlAmount = event.params.usdlAmount;
    entity.amountOut = event.params.amountOut;
    entity.save();
}