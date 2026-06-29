'use client';

import React, { useEffect, useState } from 'react';
import Select from '@/components/admin/form/fields/Select';
import RadioGroup from '@/components/admin/form/fields/RadioGroup';
import Checkbox from '@/components/admin/form/fields/Checkbox';
import Text from '@/components/admin/form/fields/Text';
import { useCampaign } from '../context/CampaignContext';
import LocationSearchBox from '@/components/admin/form/LocationSearchBox';
import IpExclusionBox from '@/components/admin/form/IPExclusionBox';
import CarrierBox from '@/components/admin/form/CarrierBox';
import Devices from '@/components/admin/form/Devices';
import Demography from '@/components/admin/form/Demography';
import CustomAudience from '@/components/admin/form/CustomAudience';
import { getCountryListAction } from '@/actions/metadata.actions';
import { useToast } from '@/components/toast/ToastProvider';
import CountrySearchBox from '@/components/admin/form/CountrySearchBox';
import IpInclusionBox from '@/components/admin/form/IPInclusionBox';

interface Props {
  onNext: () => void;
  isActive: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
}

export default function Targeting({
  onNext,
  isActive,
  isDisabled,
  onToggle,
}: Props) {

  const { showToast } = useToast();

  const [errors, setErrors] = useState<Record<string, string>>({})
  const { state, dispatch } = useCampaign();
  const [countryList, setCountryList] = useState<{ label: string; value: string }[]>([]);

  const [activeTab, setActiveTab] = useState<'geo' | 'device' | 'adtype' | 'custom_audience'>('geo');

  useEffect(() => {

    async function fetchCountryList() {
      try {
        const result: any = await getCountryListAction();
        if (result.success) {
          const countries = Object.keys(result.data).map((key) => {
            return { label: result.data[key], value: key };
          });
          setCountryList(countries);
        } else {
          showToast(result.message || 'Failed to fetch country list', 'error');
        }

      } catch (error) {
        showToast('Failed to fetch country list', 'error');
      }

    }
    fetchCountryList();
  }, [])
  /* GEO */
  // const [state, setState] = useState('');
  const [geoMode, setGeoMode] = useState('include');
  const [ipMode, setIpMode] = useState('include');
  const [internet, setInternet] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [wifi, setWifi] = useState(false);

  /* DEVICE */
  const [deviceMode, setDeviceMode] = useState('include');
  const [deviceAll, setDeviceAll] = useState(true);
  const [deviceMobile, setDeviceMobile] = useState(false);
  const [osMode, setOsMode] = useState('all');
  const [minOs, setMinOs] = useState('');
  const [maxOs, setMaxOs] = useState('');

  /* AD TYPE */
  const [adAll, setAdAll] = useState(true);
  const [banner, setBanner] = useState(false);
  const [interstitial, setInterstitial] = useState(false);
  const [video, setVideo] = useState(false);

  if (isDisabled) {
    return (
      <div
        onClick={onToggle}
        className="w-full px-12 py-5 bg-white rounded-2xl outline outline-1 outline-neutral-100 cursor-pointer opacity-60"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-2xl outline outline-neutral-300 flex items-center justify-center">
            3
          </div>
          <div className="text-lg">Targeting</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-12 py-5 bg-white rounded-2xl border border-neutral-100 flex flex-col">
      {/* Header */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-6 h-6 rounded-2xl outline outline-[#4144E6] flex items-center justify-center text-[#4144E6]">
          3
        </div>
        <div className="text-lg">Targeting</div>
      </div>

      {/* Body */}
      <div
        className={`transition-all duration-300 ease-in-out ${isActive
          ? 'opacity-100 translate-y-0 mt-6'
          : 'opacity-0 -translate-y-2 hidden'
          }`}
      >
        {/* Tabs */}
        <div className="flex justify-between gap-10 border-b border-neutral-200 mb-6">
          {[
            { key: 'geo', label: 'Geo Targeting' },
            { key: 'device', label: 'Device Targeting' },
            { key: 'adtype', label: 'Demography' },
            { key: 'custom_audience', label: 'Custom Audience' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(tab.key as 'geo' | 'device' | 'adtype' | 'custom_audience')
              }
              className={`pb-3 text-sm ${activeTab === tab.key
                ? 'text-[#4144E6] border-b-2 border-[#4144E6]'
                : 'text-neutral-600'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* GEO TAB */}
        {activeTab === 'geo' && (
          <div className="flex flex-col">
            <div className='mb-8'>
              {/* <Select
                label="Select Country"
                name="country"
                value={state.country}
                error={errors.country}
                onChange={handleCountryChange}
                placeholder="Select Country"
                options={countryList}
              /> */}

            </div>

            <CountrySearchBox />
            <LocationSearchBox title="Include locations" type="include" countryCodes={state.countries?.map(o => o.countryCode) ?? []} />
            <LocationSearchBox title="Exclude locations" type="exclude" countryCodes={state.countries?.map(o => o.countryCode) ?? []} />
            <CarrierBox />
            <IpExclusionBox />
            <IpInclusionBox />


          </div>
        )}

        {/* DEVICE TAB */}
        {activeTab === 'device' && (
          <Devices />
        )}

        {/* AD TYPE TAB */}
        {activeTab === 'adtype' && (
          <Demography />
        )}

        {/* AD TYPE TAB */}
        {activeTab === 'custom_audience' && (
          <CustomAudience />
        )}




        {/* Next */}
        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="px-4 py-2 bg-indigo-800 rounded-full text-white text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
