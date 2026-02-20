'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StepCampaignBasics from './steps/CampaignBasics';
import StepSchedule from './steps/Schedule';
import StepTargeting from './steps/Targeting';
import StepBudgetBid from './steps/BudgetBid';

export default function CampaignCreatePage() {
  const [activeStep, setActiveStep] = useState(1);

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
      </div>
    </div>
  );
}
