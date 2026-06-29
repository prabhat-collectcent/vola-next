'use client';

import React, { useState } from 'react';
import Select from '@/components/admin/form/fields/Select';
import RadioGroup from '@/components/admin/form/fields/RadioGroup';
import Checkbox from '@/components/admin/form/fields/Checkbox';
import Text from '@/components/admin/form/fields/Text';
import { useCampaign } from '../context/CampaignContext';
import LocationSearchBox from '@/components/admin/form/edit_campaign/LocationSearchBox';
import IpExclusionBox from '@/components/admin/form/edit_campaign/IPExclusionBox';
import CarrierBox from '@/components/admin/form/edit_campaign/CarrierBox';
import Devices from '@/components/admin/form/edit_campaign/Devices';
import Geotargeting from '@/components/campaign/components/edit/Geotargeting';
import Demography from '@/components/campaign/components/edit/Demography';
import Miscelleneous from '@/components/campaign/components/edit/Miscellaneous';
import CustomAudience from '@/components/admin/form/edit_campaign/CustomAudience';

interface Props {
  loading?: boolean;
  onNext: () => void;
  isActive: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
}

export default function Targeting({
  loading,
  onNext,
  isActive,
  isDisabled,
  onToggle,
}: Props) {

  const [errors, setErrors] = useState<Record<string, string>>({})
  const { state, dispatch } = useCampaign()

  const [activeTab, setActiveTab] = useState<'geo' | 'demography' | 'miscellaneous' | 'custom_audience'>(
    'geo'
  );

  /* GEO */
  const [country, setCountry] = useState('');
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
            { key: 'demography', label: 'Demography exclusions' },
            { key: 'miscellaneous', label: 'Miscellaneous' },
            { key : 'custom_audience', label:'Custom Audience'}
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(tab.key as 'geo' | 'demography' | 'miscellaneous')
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
          <Geotargeting />
        )}

        {/* DEVICE TAB */}
        {activeTab === 'demography' && (
          <Demography />
        )}

        {/* AD TYPE TAB */}
        {activeTab === 'miscellaneous' && (
          <Miscelleneous />
        )}

        {/* AD TYPE TAB */}
        {activeTab === 'custom_audience' && (
          <CustomAudience />
        )}

      </div>
    </div>
  );
}
