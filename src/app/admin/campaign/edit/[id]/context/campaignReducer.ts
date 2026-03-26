import { CampaignAction, CampaignState } from "./types"
import { initialCampaignState } from "./initialState"


export function campaignReducer(
  state: CampaignState,
  action: CampaignAction
): CampaignState {

  switch (action.type) {

    case "SET_FIELD":
      return {
        ...state,
        ...action.payload
      }

    case "RESET":
      return initialCampaignState

    default:
      return state
  }
}