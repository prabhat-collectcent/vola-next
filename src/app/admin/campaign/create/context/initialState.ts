import { CampaignState } from "./types"

export const initialCampaignState: CampaignState = {
    name: "",
    budget: 0,
    bid_value: 0,
    start_date: "",
    end_date: "",
    status: 'PAUSED',
    campaign_type: 'DISPLAY',


    event: '',
    platform: '',
    package_name: '',
    attribution_partner: '',

    geo_include: [],
    geo_exclude: [],
    proximities: [],

    parental_statuses: [],
    genders: [],
    age_ranges: [],
    income_ranges: [],

    devices: [],
    ip_exclusions: [],

    mobile_carriers: [],

    schedules: [],

    countries: []
}