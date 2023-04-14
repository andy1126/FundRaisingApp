import { CampaignBidLog as CampaignBidLogEvent } from "../generated/FundraisingApp/FundraisingApp"
import { CampaignBidLog } from "../generated/schema"

export function handleCampaignBidLog(event: CampaignBidLogEvent): void {
  let entity = new CampaignBidLog(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.campaignId = event.params.campaignId
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
