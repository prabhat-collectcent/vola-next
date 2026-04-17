'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Text from '@/components/admin/form/fields/Text';
import Select from '@/components/admin/form/fields/Select';
import { useCampaign } from '../context/CampaignContext';
import { CampaignBasicSchema } from '@/lib/validations/camapaign.validation';

interface Props {
  onNext: () => void;
  isActive: boolean;
  isDisabled?: boolean;
  onToggle: () => void;

}

export const eventOptions = [
  { label: 'af_home_page', value: 'af_home_page' },
  { label: 'af_food_du_purchase_v2', value: 'af_food_du_purchase_v2' },
  { label: 'af_first_order', value: 'af_first_order' },
  { label: 'instamart_first_order', value: 'instamart_first_order' },
  { label: 'instamart_du_purchase', value: 'instamart_du_purchase' },
  { label: 'af_app_launch', value: 'af_app_launch' },
  { label: 'instamart_purchase', value: 'instamart_purchase' },
  { label: 'instamart_homepage_view', value: 'instamart_homepage_view' },
];

export default function CampaignBasics({
  onNext,
  isActive,
  isDisabled,
  onToggle,
}: Props) {
  const [objective, setObjective] = useState<"DISPLAY" | "PERFORMANCE">(
    'DISPLAY'
  );


  const [campaignUrl, setCampaignUrl] = useState('');

  const [event, setEvent] = useState('');
  const [packageUrl, setPackageUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [attribution, setAttribution] = useState<string>('');

  const [adType, setAdType] = useState<'display' | 'video' | 'ctv' | ''>('');


  const [errors, setErrors] = useState<Record<string, string>>({})

  const { state, dispatch } = useCampaign();


  type ChangeEventType =
    | React.ChangeEvent<HTMLInputElement>
    | { name: string; value: any };

  const handleChange = (e: ChangeEventType) => {
    let name: string;
    let value: any;

    if ("target" in e) {
      // Native input
      name = e.target.name;
      value = e.target.value;
    } else {
      // Custom component (Select etc.)
      name = e.name;
      value = e.value;
    }

    dispatch({
      type: "SET_FIELD",
      payload: {
        [name]: value,
      },
    });

  };

  const handleObjectiveChange = (objective: "PERFORMANCE" | "DISPLAY") => {
    // @ts-ignore
    setObjective(objective)


    dispatch({
      type: "SET_FIELD",
      payload: {
        // @ts-ignore
        campaign_type: objective
      }
    })
  }

  function handleNextStep() {


    const result = CampaignBasicSchema.safeParse({ name: state.name });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const key = String(err.path[0]);
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      return;

    }
    onNext();
  }




  if (isDisabled) {
    return (
      <div
        onClick={onToggle}
        className="px-12 py-5 bg-white rounded-2xl outline outline-1 outline-neutral-100 cursor-pointer opacity-60"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-2xl outline outline-neutral-300 flex items-center justify-center">
            1
          </div>
          <div className="text-lg">Campaign Basics</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-12 py-5 bg-white rounded-2xl outline outline-1 outline-neutral-100 flex flex-col">
      {/* Header */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-6 h-6 rounded-2xl outline outline-[0.86px] outline-[#4144E6] flex items-center justify-center text-[#4144E6]">
          1
        </div>
        <div className="text-lg">Campaign Basics</div>
      </div>

      {/* Animated Body */}
      <div
        className={`transition-all duration-300 ease-in-out ${isActive
          ? 'opacity-100 translate-y-0 mt-6'
          : 'opacity-0 -translate-y-2 hidden'
          }`}
      >
        <div className="flex flex-col gap-6 pt-6 pb-2">
          {/* Objectives */}
          <div className="flex flex-col gap-3">
            <div className="text-xs">Campaign Objectives*</div>

            <div className="flex gap-3">
              {[
                {
                  key: 'DISPLAY',
                  label: 'Branding',
                  desc: 'Maximize reach and build brand awareness at scale.',
                  icon: '/branding-icon.svg',
                },
                {
                  key: 'PERFORMANCE',
                  label: 'App Performance',
                  desc: 'Optimize delivery to drive actions and measurable results.',
                  icon: '/performance-icon.svg',
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() =>
                    // @ts-ignore
                    handleObjectiveChange(item.key)
                  }
                  className={`flex-1 h-32 px-3 py-2.5 rounded-xl cursor-pointer flex flex-col gap-2 ${objective === item.key
                    ? 'outline outline-1 outline-[#4144E6]'
                    : 'outline outline-1 outline-neutral-700/20'
                    }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />

                  <div
                    className={`text-base ${objective === item.key ? 'font-semibold' : ''
                      }`}
                  >
                    {item.label}
                  </div>

                  <div className="text-neutral-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Fields */}
          <div className="flex flex-col">
            {objective === 'DISPLAY' ? (
              <>
                <Text
                  label="Campaign Name*"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  placeholder="Enter Campaign Name"
                  className="mb-[24px]"
                  error={errors.name}

                />
                {/* 
                <Text
                  label="Campaign URL*"
                  name="campaignUrl"
                  value={campaignUrl}
                  // @ts-ignore
                  onChange={(val: string) => setCampaignUrl(val)}
                  placeholder="Enter Campaign URL"
                  className="mb-[24px]"
                /> */}

                {/* Ad Type */}
                <div className="flex gap-4">
                  {[
                    { key: 'display', label: 'Display', img: '/cdisplay.svg' },
                    { key: 'video', label: 'Video', img: '/cvideo.svg' },
                    { key: 'ctv', label: 'CTV', img: '/cctv.svg' },
                  ].map((item) => (
                    <div
                      key={item.key}
                      onClick={() =>
                        setAdType(item.key as 'display' | 'video' | 'ctv')
                      }
                      className={`flex-1 p-3 rounded-xl cursor-pointer flex flex-col items-center ${adType === item.key
                        ? 'outline outline-[0.75px] outline-[#4144E6]'
                        : 'outline outline-[0.75px] outline-zinc-500/20'
                        }`}
                    >
                      <div className="w-12 h-12 relative">
                        <Image
                          src={item.img}
                          alt={item.label}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="text-zinc-700 text-base">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Text
                  label="Campaign Name*"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  placeholder="Enter Campaign Name"
                  className="mb-[24px]"
                  error={errors.name}

                />

                <Select
                  label="Platform*"
                  name="platform"
                  value={state.platform}
                  onChange={(value) =>
                    handleChange({ name: "platform", value })
                  }
                  placeholder="Select Platform"
                  className="mb-[24px]"
                  options={[
                    { label: 'Android', value: 'android' },
                    { label: 'iOS', value: 'ios' },
                    { label: 'Web', value: 'web' },
                  ]}
                />

                <Text
                  label="App Package Name / App Store URL*"
                  name="package_name"
                  value={state.package_name}
                  onChange={handleChange}
                  placeholder="Enter package name/app store URL"
                  className="mb-[24px]"
                />

                <Select
                  label="Event*"
                  name="event"
                  value={state.event}
                  onChange={(value) =>
                    handleChange({ name: "event", value })
                  } placeholder="Select Event"
                  className="mb-[24px]"
                  options={eventOptions}
                />


                {/* Attribution */}
                <div className="flex flex-col">
                  <div className="text-xs mb-2">Attribution Partner*</div>

                  <div className="h-16 flex gap-2">
                    {[
                      { key: 'appsflyer', src: '/appsflyer.svg' },
                      { key: 'branch', src: '/branch.svg' },
                      { key: 'singular', src: '/singular.svg' },
                      { key: 'adjust', src: '/adjust.svg' },
                    ].map((item) => (
                      <div
                        key={item.key}
                        onClick={() => setAttribution(item.key)}
                        // as of now only appsflyer is supported, so only that is selectable
                        className={`w-28 rounded-xl flex items-center justify-center cursor-pointer ${item.key === 'appsflyer'
                          ? 'outline outline-1 outline-[#4144E6]'
                          : 'outline outline-1 outline-zinc-100'
                          }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.key}
                          width={90}
                          height={30}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="text-neutral-400 text-xs mt-2">
                    If you are not using an attribution partner, contact
                    support@vola.ad
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Next */}
          <div className="flex justify-end">
            <button
              onClick={handleNextStep}
              className="px-4 py-2 bg-indigo-800 rounded-full text-white text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
