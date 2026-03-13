'use client'

import { createContext, useContext, useReducer } from "react"
import { campaignReducer } from "./campaignReducer"
import { initialCampaignState } from "./initialState"
import { CampaignState, CampaignAction } from "./types"

type CampaignContextType = {
  state: CampaignState
  dispatch: React.Dispatch<CampaignAction>
}

const CampaignContext = createContext<CampaignContextType | null>(null)

export function CampaignProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(
    campaignReducer,
    initialCampaignState
  )
  

  return (
    <CampaignContext.Provider value={{ state, dispatch }}>
      {children}
    </CampaignContext.Provider>
  )
}

export function useCampaign() {
  const context = useContext(CampaignContext)

  if (!context) {
    throw new Error("useCampaign must be used inside CampaignProvider")
  }

  return context
}