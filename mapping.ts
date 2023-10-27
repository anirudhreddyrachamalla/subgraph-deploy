// import {OwnershipTransferred as OwnershipTransferredEvent, BetPlaced as BetPlacedEvent} from "./generated/Dice/Dice";
// import { Ownership, Bet } from "./generated/schema";

// export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void{
//     let entity = new Ownership(event.transaction.hash.concatI32(event.logIndex.toI32()));
//     entity.prevOwner = event.params.previousOwner;
//     entity.newOwner = event.params.newOwner;
//     entity.save();
// }

// export function handleBetPlaced(event: BetPlacedEvent ): void {
//     let entity = new Bet(event.params.betId.toHex());
//     entity.amount = event.params.amount;
//     entity.token = event.params.token;
//     entity.choice = event.params.choice;
//     entity.player = event.params.player;
//     entity.save();
// }