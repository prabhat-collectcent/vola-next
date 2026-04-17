'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StepCampaignBasics from './steps/CampaignBasics';
import StepSchedule from './steps/Schedule';
import StepTargeting from './steps/Targeting';
import StepBudgetBid from './steps/BudgetBid';
import { useCampaign } from './context/CampaignContext';
import { getCampaignByIdAction } from '@/actions/campaign.actions';

export default function CampaignEditPage({ queryParams }: { queryParams: { value: any } }) {

  const [loading, setLoading] = useState(true);

  const [activeStep, setActiveStep] = useState(1);

  const { state, dispatch } = useCampaign();

  const parsedParams = JSON.parse(queryParams.value);

  useEffect(() => {
    async function fetchCampaign() {

      try {

        const fetchedCampaign: any = await getCampaignByIdAction(parsedParams.id);
        console.log("fetched campaign", fetchedCampaign);

        dispatch({
          type: "SET_FIELD",
          payload: {
            name: fetchedCampaign.data.name,
            budget: fetchedCampaign.data.budget.amount_micros / 1000000,
            bid_value: fetchedCampaign.data.ad_group.cpm_bid_micros / 1000000,
            start_date: fetchedCampaign.data.start_date,
            end_date: fetchedCampaign.data.end_date,
            campaign_type: fetchedCampaign.data.campaign_type,
            event: fetchedCampaign.data.event,
            platform: fetchedCampaign.data.platform,
            package_name: fetchedCampaign.data.package_name,
            attribution_partner: fetchedCampaign.data.attribution_partner,
            schedules: fetchedCampaign.data.criterias.filter((c: any) => c.type === 'AD_SCHEDULE'),
            geo_exclude: fetchedCampaign.criteria_by_type.LOCATION?.length > 0 ? fetchedCampaign.criteria_by_type.LOCATION
              .filter((loc: any) => loc.negative == true)
              .map((loc: any) => {
                return {
                  id: loc.id,
                  canonicalName: loc.mapped_value ?? loc.criterion_data.canonicalName,
                  geoTargetConstant: loc.criterion_data.geo_target_constant,
                }
              }) : [],
            geo_include: fetchedCampaign.criteria_by_type.LOCATION?.length > 0 ? fetchedCampaign.criteria_by_type.LOCATION
              .filter((loc: any) => loc.negative == false)
              .map((loc: any) => {
                return {
                  id: loc.id,
                  canonicalName: loc.mapped_value ?? loc.criterion_data.canonicalName,
                  geoTargetConstant: loc.criterion_data.geo_target_constant,
                }
              }) : [],
            parental_statuses: (fetchedCampaign.criteria_by_type?.PARENTAL_STATUS ?? []).map((status: any) => ({
              id: status.id,
              status: status.criterion_data.type,
            })),

            genders: (fetchedCampaign.criteria_by_type?.GENDER ?? []).map((gender: any) => ({
              id: gender.id,
              gender: gender.criterion_data.type,
            })),

            age_ranges: (fetchedCampaign.criteria_by_type?.AGE_RANGE ?? []).map((ageRange: any) => ({
              id: ageRange.id,
              ageRange: ageRange.criterion_data.type,
            })),

            income_ranges: (fetchedCampaign.criteria_by_type?.INCOME_RANGE ?? []).map((incomeRange: any) => ({
              id: incomeRange.id,
              incomeRange: incomeRange.criterion_data.type,
            })),

            devices: (fetchedCampaign.criteria_by_type?.DEVICE ?? []).map((device: any) => ({
              id: device.id,
              device: device.criterion_data.type,
            })),
            ip_exclusions: (fetchedCampaign.criteria_by_type?.IP_BLOCK ?? []).map((ipCriteria: any) => ({
              id: ipCriteria.id,
              ip: ipCriteria.criterion_data.ip_address,
            })),
            mobile_carriers: (fetchedCampaign.criteria_by_type?.CARRIER ?? []).map((carrier: any) => ({
              id: carrier.id,
              name: carrier.mapped_value,
              resourceName: carrier.criterion_data.carrier_constant,
              constantId: carrier.mapped_id,
              countryCode: 'IN'
            }))


          }
        })

      } catch (error) {

      } finally {
        setLoading(false);
      }

    }

    fetchCampaign();
  }, []);



  const [campaignUrl, setCampaignUrl] = useState('');
  const [adType, setAdType] = useState<'display' | 'video' | 'ctv'>('');

  return (
    <div className="flex flex-col bg-[#F8F8FA] min-h-screen">
      {/* Header */}

      <div className="flex justify-between items-center px-6 py-6 bg-white border-b border-[#E5E5EA]">
        <div className="text-[13px] flex items-center gap-1">
          <Link
            href="/admin/campaign"
            className="text-[#868686] hover:underline"
          >
            My Campaigns
          </Link>

          <span className="text-[#868686]">/</span>

          <span className="text-[#000000]">Edit</span>
        </div>
      </div>

      <div className="max-w-[764px] mx-auto w-full p-6">
        <StepCampaignBasics
          loading={loading}
          isActive={activeStep === 1}
          isDisabled={false}
          onToggle={() => setActiveStep(1)}
          onNext={() => setActiveStep(2)}
        />

        <StepSchedule
          onNext={() => setActiveStep(3)}
          isActive={activeStep === 2}
          isDisabled={false}
          onToggle={() => setActiveStep(2)}
        />

        <StepTargeting
          onNext={() => setActiveStep(4)}
          isActive={activeStep === 3}
          isDisabled={false}
          onToggle={() => setActiveStep(3)}
        />

        {/* <StepBudgetBid
          isActive={activeStep === 4}
          isDisabled={false}
          onToggle={() => setActiveStep(4)}
        /> */}
      </div>
    </div>
  );
}
