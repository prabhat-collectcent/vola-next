export interface Proximity {
    address: {
        street_address: string;
        city_name: string;
        province_code: string;
        postal_code: string;
        country_code: string;
    };
    radius: number;
    radius_units: string;
}

export interface Schedule {
    day_of_week: string;
    start_hour: string;
    start_minute: string;
    end_hour: string;
    end_minute: string;
}

export interface Carrier {
    id: string;
    name: string;
    countryCode: string;
    resourceName: string;
    db_id ?: number;
}

export interface CampaignState {
    name: string
    budget: number
    bid_value: number | string;
    start_date: string
    end_date: string,
    status: 'ENABLED' | 'PAUSED',
    campaign_type: 'DISPLAY' | 'PERFORMANCE_MAX'
    campaign_goal?: 'new_users' | 'existing_users'

    events?: string[],
    platform?: string[],
    package_name?: string,
    app_store_url?: string,
    attribution_partner?: string,
    url?: string,

    geo_include: any[]
    geo_exclude: any[]

    proximities: Proximity[]

    mobile_carriers: Carrier[]

    parental_statuses: string[]
    genders: string[]
    age_ranges: string[]
    income_ranges: string[]

    devices: string[]
    operating_systems: string[]
    ip_exclusions: string[]
    ip_inclusions: string[]
    custom_audiences: string[]

    schedules: Schedule[]

    countries?: { countryCode: string, name: string }[];
}

export type CampaignAction =
    | { type: "SET_FIELD"; payload: Partial<CampaignState> }
    | { type: "RESET" }