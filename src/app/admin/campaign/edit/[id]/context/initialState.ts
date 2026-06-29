import { CampaignState } from "./types"

export const initialCampaignState: CampaignState = {
    name: "",
    budget: 0,
    bid_value: 0,
    start_date: "",
    end_date: "",
    campaign_type: '',

    events: [],
    added_events: [],
    deleted_events: [],
    app_store_url: "",
    tracking_url: "",
    
    geo_include: [],
    added_geo_include: [],

    added_geo_exclude: [],
    geo_exclude: [],
    
    deleted_geo: [],
    proximities: [],

    parental_statuses: [],
    addedParentalStatuses: [],
    removedParentalStatus: [],

    genders: [],
    addedGenders: [],
    removedGenders: [],

    age_ranges: [],
    addedAgeRanges: [],
    removedAgeRanges: [],

    income_ranges: [],
    addedIncomeRanges: [],
    removedIncomeRanges: [],

    devices: [],
    addedDevices: [],
    removedDevices: [],

    ip_exclusions: [],
    addedIpExclusions: [],
    removedIpExclusions: [],

    ip_inclusions: [],
    addedIpInclusions: [],
    removedIpInclusions: [],

    mobile_carriers: [],
    addedCarriers: [],
    removedCarriers: [],

    schedules: []
}