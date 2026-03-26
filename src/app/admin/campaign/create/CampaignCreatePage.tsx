'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StepCampaignBasics from './steps/CampaignBasics';
import StepSchedule from './steps/Schedule';
import StepTargeting from './steps/Targeting';
import StepBudgetBid from './steps/BudgetBid';
import { useCampaign } from './context/CampaignContext';
import { createCampaignAction } from '@/actions/campaign.actions';
import { useToast } from '@/components/toast/ToastProvider';
import { useRouter } from 'next/navigation';

export default function CampaignCreatePage() {

  const router = useRouter();
  const { state, dispatch } = useCampaign();
  const { showToast } = useToast();


  async function submitCampaign() {
    console.log("final state before submission", state)
    state.geo_include = state.geo_include.map((loc) => loc.geoTargetConstant);
    state.geo_exclude = state.geo_exclude.map((loc) => loc.geoTargetConstant);
    // @ts-ignore
    state.mobile_carriers = state.mobile_carriers.map((carrier) => carrier.resourceName);


    try {

      const apiResponse: any = await createCampaignAction(state);
      console.log("response object")
      console.log(apiResponse);


      if (apiResponse?.success) {
        const adGroup = "customers/5324834713/adGroups/196059188120" //apiResponse.mutateOperationResponses.find((mutateRes: any) => mutateRes['adGroupResult']);
        const encodedURI = encodeURIComponent(adGroup) //.adGroupResult.resourceName
        showToast('Campaign created successfully', 'success');
        router.push(`/admin/campaign/create/creatives?adGroup=${encodedURI}`)
      } else {
        // @ts-ignore
        showToast(apiResponse?.message || 'Something went wrong', 'error');
      }

    } catch (error) {
      showToast((error as Error)?.message || 'Something went wrong', 'error');
    }

  }

  const [activeStep, setActiveStep] = useState(1);

  const [campaignUrl, setCampaignUrl] = useState('');
  const [adType, setAdType] = useState<'display' | 'video' | 'ctv' | ''>('');

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

          <span className="text-[#000000]">Create</span>
        </div>
      </div>

      <div className="max-w-[764px] mx-auto w-full p-6">
        <StepCampaignBasics
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

        <StepBudgetBid
          isActive={activeStep === 4}
          isDisabled={false}
          onToggle={() => setActiveStep(4)}
        />

        <button
          onClick={submitCampaign}
          className="self-end mt-6 px-6 py-2 bg-[#4144E6] text-white rounded-lg"
        >
          Create Campaign
        </button>
      </div>
    </div>
  );
}
