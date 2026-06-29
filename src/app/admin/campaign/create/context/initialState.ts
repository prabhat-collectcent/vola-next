import { CampaignState } from "./types"

export const initialCampaignState: CampaignState = {
    name: "",
    budget: 0,
    bid_value: '',
    start_date: "",
    end_date: "",
    status: 'PAUSED',
    campaign_type: 'DISPLAY',
    campaign_goal: 'new_users',

    events: [],
    platform: [],
    package_name: '',
    attribution_partner: '',
    url: '',

    geo_include: [],
    geo_exclude: [],
    proximities: [],

    parental_statuses: [],
    genders: [],
    age_ranges: [],
    income_ranges: [],

    devices: [],
    operating_systems: [],
    ip_exclusions: [],
    ip_inclusions: [],

    mobile_carriers: [],
    schedules: [],

    countries: [],
    custom_audiences: []
}