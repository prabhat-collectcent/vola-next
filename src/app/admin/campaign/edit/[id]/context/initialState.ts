import { CampaignState } from "./types"

export const initialCampaignState: CampaignState = {
    name: "",
    budget: 0,
    bid_value: 0,
    start_date: "",
    end_date: "",
    campaign_type:'',

    geo_include: [],
    geo_exclude: [],
    deleted_geo: [],
    proximities: [],

    parental_statuses: [],
    addedParentalStatuses:[],
    removedParentalStatus: [],

    genders: [],
    addedGenders:[],
    removedGenders: [],

    age_ranges: [],
    addedAgeRanges:[],
    removedAgeRanges: [],

    income_ranges: [],
    addedIncomeRanges:[],
    removedIncomeRanges: [],

    devices: [],
    addedDevices:[],
    removedDevices:[],

    ip_exclusions: [],
    addedIpExclusions:[],
    removedIpExclusions:[],
    

    mobile_carriers: [],
    addedCarriers:[],
    removedCarriers:[],

    schedules: []
}