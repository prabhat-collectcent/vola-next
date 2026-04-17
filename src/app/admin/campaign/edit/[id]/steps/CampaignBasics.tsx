'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Text from '@/components/admin/form/fields/Text';
import Select from '@/components/admin/form/fields/Select';
import { useCampaign } from '../context/CampaignContext';
import { CampaignBasicSchema } from '@/lib/validations/edit-campaign.validation';
import { updateCampaignBasicAction } from '@/actions/campaign.actions';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/toast/ToastProvider';
import { eventOptions } from '../../../create/steps/CampaignBasics';

interface Props {
  loading?: boolean;
  onNext: () => void;
  isActive: boolean;
  isDisabled?: boolean;
  onToggle: () => void;

}

export default function CampaignBasics({
  loading,
  onNext,
  isActive,
  isDisabled,
  onToggle,
}: Props) {


  const [saving, setSaving] = useState(false);

  const { showToast } = useToast();

  const { id } = useParams();
  const [objective, setObjective] = useState<'DISPLAY' | 'PERFORMANCE'>(
    'DISPLAY'
  );

  const [campaignName, setCampaignName] = useState('');
  const [campaignUrl, setCampaignUrl] = useState('');
  const [packageUrl, setPackageUrl] = useState('');
  const [platform, setPlatform] = useState('');
  const [adType, setAdType] = useState<'display' | 'video' | 'ctv'>('');
  const [attribution, setAttribution] = useState<string>('');

  const [errors, setErrors] = useState<Record<string, string>>({})

  const { state, dispatch } = useCampaign()

  type ChangeEventType =
    | React.ChangeEvent<HTMLInputElement>
    | { name: string; value: any };


  const handleChange = (e: ChangeEventType) => {

    let name: string;
    let value: any;

    if ("target" in e) {
      // Native input
      name = e.target.name;
      value = (e.target.type === 'number' && e.target.value) ? parseFloat(e.target.value) : e.target.value;
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
  }

  async function handleSave() {

    const result = CampaignBasicSchema.safeParse({ name: state.name, budget: state.budget, bid_value: state.bid_value });
    console.log("validation result", result)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const key = String(err.path[0]);
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      return;

    }

    setSaving(true);


    try {
      const apiResponse: any = await updateCampaignBasicAction(id as unknown as number, {
        name: state.name,
        budget: state.budget,
        cpm_bid_value: state.bid_value,
      })

      console.log("update api res", apiResponse)

      if ((apiResponse as any)?.success) {
        showToast('Camapaign basic details updated successfully', 'success');
      } else {
        showToast(apiResponse?.message || 'Something went wrong', 'error');
        return;
      }

    } catch (error) {
      showToast((error as Error)?.message || 'Something went wrong', 'error');
      return;

    } finally {
      setSaving(false);
    }

    onNext();
  }


  if (loading) {
    return (
      <div className="w-full px-12 py-5 bg-white rounded-2xl outline outline-1 outline-neutral-100">

        {/* Header Skeleton */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-gray-200 animate-pulse" />
          <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Body Skeleton */}
        <div className="mt-6 flex flex-col gap-6 animate-pulse">

          {/* Objective cards */}
          <div className="flex gap-3">
            <div className="flex-1 h-32 bg-gray-200 rounded-xl" />
            <div className="flex-1 h-32 bg-gray-200 rounded-xl" />
          </div>

          {/* Input fields */}
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-10 bg-gray-200 rounded" />

            <div className="flex gap-3">
              <div className="w-1/3 h-10 bg-gray-200 rounded" />
              <div className="flex-1 h-10 bg-gray-200 rounded" />
            </div>
          </div>

          {/* Ad type cards */}
          <div className="flex gap-4">
            <div className="flex-1 h-24 bg-gray-200 rounded-xl" />
            <div className="flex-1 h-24 bg-gray-200 rounded-xl" />
            <div className="flex-1 h-24 bg-gray-200 rounded-xl" />
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <div className="h-9 w-24 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    );
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
                  //in case of editing campaign, objective cannot be changed, so not setting onClick handler and just showing selected objective
                  // onClick={() =>
                  //   handleChangeObjective(item.key as 'DISPLAY' | 'PERFORMANCE')
                  // }
                  className={`flex-1 h-32 px-3 py-2.5 rounded-xl cursor-pointer flex flex-col gap-2 ${state.campaign_type === item.key
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
            {/* treating display campaigns as branding */}
            {state.campaign_type === 'DISPLAY' ? (
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

                <Text
                  type='number'
                  label="Daily Budget"
                  name="budget"
                  value={state.budget}
                  onChange={handleChange}
                  placeholder="Daily Budget"
                  className="mb-[24px]"
                  error={errors.budget}
                  step="any"
                />

                <div className="flex gap-3">
                  <Select
                    label="Bid"
                    name="bid_value"
                    value="cpm"
                    // onChange={handleChange}
                    placeholder="CPM"
                    className="mb-[24px]"
                    options={[
                      { label: 'CPM', value: 'cpm' }
                    ]}
                  />

                  <Text
                    type='number'
                    label="Amount"
                    name="bid_value"
                    value={state.bid_value}
                    onChange={handleChange}
                    className="mb-[24px]"
                    placeholder="Amount"
                    error={errors.bid_value}
                    step="any"


                  />
                </div>



                {/* <Text
                  label="Campaign URL*"
                  name="campaignUrl"
                  value={campaignUrl}
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
                />

                <Select
                  label="Platform*"
                  name="platform"
                  value={state.platform}
                  onChange={(value) =>
                    handleChange({ name: "platform", value })}
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


                <Text
                  type='number'
                  label="Daily Budget"
                  name="budget"
                  value={state.budget}
                  onChange={handleChange}
                  placeholder="Daily Budget"
                  className="mb-[24px]"
                  error={errors.budget}
                  step="any"
                />

                <div className="flex gap-3">
                  <Select
                    label="Bid"
                    name="bid_value"
                    value="cpm"
                    // onChange={handleChange}
                    placeholder="CPM"
                    className="mb-[24px]"
                    options={[
                      { label: 'CPM', value: 'cpm' }
                    ]}
                  />

                  <Text
                    type='number'
                    label="Amount"
                    name="bid_value"
                    value={state.bid_value}
                    onChange={handleChange}
                    className="mb-[24px]"
                    placeholder="Amount"
                    error={errors.bid_value}
                    step="any"


                  />
                </div>

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
              onClick={handleSave}
              disabled={saving}
              className={`px-4 py-2 rounded-full text-white text-sm flex items-center justify-center gap-2
    ${saving ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-800'}
  `}
            >
              {saving ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Saving...
                </>
              ) : (
                'Save'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
