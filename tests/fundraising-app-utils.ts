import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { CampaignBidLog } from "../generated/FundraisingApp/FundraisingApp"

export function createCampaignBidLogEvent(
  campaignId: BigInt,
  sender: Address,
  amount: BigInt
): CampaignBidLog {
  let campaignBidLogEvent = changetype<CampaignBidLog>(newMockEvent())

  campaignBidLogEvent.parameters = new Array()

  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return campaignBidLogEvent
}
