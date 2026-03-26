export type CriterionType = "AD_SCHEDULE";

export type CriterionStatus = "ENABLED" | "PAUSED";

export type SyncStatus = "synced" | "pending" | "failed";

export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";

export type MinuteOfHour =
  | "ZERO"
  | "FIFTEEN"
  | "THIRTY"
  | "FORTY_FIVE";

export interface ScheduleCriterionData {
  day_of_week: DayOfWeek;
  start_hour: number;
  start_minute: MinuteOfHour;
  end_hour: number;
  end_minute: MinuteOfHour;
}

export interface ScheduleCampaignCriterion {
  id: number;
  campaign_id: number;
  google_id: string;
  google_resource_name: string;

  type: CriterionType;
  status: CriterionStatus;
  bid_modifier: number | null;

  criterion_data: ScheduleCriterionData;

  negative: boolean;

  sync_status: SyncStatus;
  last_synced_at: string; // ISO date string
  created_at: string;
  updated_at: string;
}

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


export interface Carrier {
  id: string;
  name: string;
  countryCode: string;
  resourceName: string;
}

export interface CampaignState {
  name: string
  budget: number
  bid_value: number
  start_date: string
  end_date: string

  geo_include: any[]
  geo_exclude: any[]
  deleted_geo: number[]

  proximities: Proximity[]

  parental_statuses: any[]
  addedParentalStatuses: any;
  removedParentalStatus: number[],

  genders: any[],
  addedGenders: any[],
  removedGenders: number[],

  age_ranges: any[],
  addedAgeRanges: [],
  removedAgeRanges: number[],

  income_ranges: any[],
  addedIncomeRanges: [],
  removedIncomeRanges: []

  //existing devices
  devices: any[],
  //newly added devices
  addedDevices: string[]
  removedDevices: number[]

  ip_exclusions: any[],
  addedIpExclusions: string[],
  removedIpExclusions: number[],

  mobile_carriers: Carrier[],
  addedCarriers: string[],
  removedCarriers: number[]

  schedules: ScheduleCampaignCriterion[]
}

export type CampaignAction =
  | { type: "SET_FIELD"; payload: Partial<CampaignState> }
  | { type: "RESET" }