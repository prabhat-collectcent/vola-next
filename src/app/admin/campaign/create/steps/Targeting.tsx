'use client';

import React, { useState } from 'react';
import Select from '@/components/admin/form/fields/Select';
import RadioGroup from '@/components/admin/form/fields/RadioGroup';
import Checkbox from '@/components/admin/form/fields/Checkbox';
import Text from '@/components/admin/form/fields/Text';
import { useCampaign } from '../context/CampaignContext';
import LocationSearchBox from '@/components/admin/form/LocationSearchBox';
import IpExclusionBox from '@/components/admin/form/IPExclusionBox';
import CarrierBox from '@/components/admin/form/CarrierBox';

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

  const [errors, setErrors] = useState<Record<string, string>>({})
  const { state, dispatch } = useCampaign()

  const [activeTab, setActiveTab] = useState<'geo' | 'device' | 'adtype'>(
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
            { key: 'device', label: 'Device Targeting' },
            { key: 'adtype', label: 'Ad Type' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() =>
                setActiveTab(tab.key as 'geo' | 'device' | 'adtype')
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
            <LocationSearchBox title="Include locations" type="include" />
            <LocationSearchBox title="Exclude locations" type="exclude" />
            <IpExclusionBox/>
            <CarrierBox/>

    
          </div>
        )}

        {/* DEVICE TAB */}
        {activeTab === 'device' && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Checkbox
                label="Mobile + Tablet"
                checked={deviceAll}
                onChange={setDeviceAll}
              />
              <Checkbox
                label="Mobile"
                checked={deviceMobile}
                onChange={setDeviceMobile}
              />
            </div>

            <RadioGroup
              label=""
              value={deviceMode}
              onChange={setDeviceMode}
              options={[
                { label: 'Include', value: 'include' },
                { label: 'Exclude', value: 'exclude' },
              ]}
            />

            <Select
              label=""
              name="deviceType"
              value=""
              onChange={() => { }}
              placeholder="All"
              options={[
                { label: 'All', value: 'all' },
                { label: 'Android', value: 'android' },
                { label: 'iOS', value: 'ios' },
              ]}
            />

            <RadioGroup
              label="OS version"
              value={osMode}
              onChange={setOsMode}
              options={[
                { label: 'All OS version', value: 'all' },
                { label: 'OS version range', value: 'range' },
              ]}
            />

            {osMode === 'range' && (
              <div className="flex gap-3">
                <Select
                  label="Min. OS"
                  name="minOs"
                  value={minOs}
                  onChange={(val: string) => setMinOs(val)}
                  placeholder="Min OS"
                  options={[
                    { label: '10', value: '10' },
                    { label: '11', value: '11' },
                  ]}
                />
                <Select
                  label="Max. OS"
                  name="maxOs"
                  value={maxOs}
                  onChange={(val: string) => setMaxOs(val)}
                  placeholder="Max OS"
                  options={[
                    { label: '14', value: '14' },
                    { label: '15', value: '15' },
                  ]}
                />
              </div>
            )}
          </div>
        )}

        {/* AD TYPE TAB */}
        {activeTab === 'adtype' && (
          <div className="flex flex-col gap-4">
            <Checkbox label="All" checked={adAll} onChange={setAdAll} />
            <Checkbox label="Banner" checked={banner} onChange={setBanner} />
            <Checkbox
              label="Interstitial"
              checked={interstitial}
              onChange={setInterstitial}
            />
            <Checkbox label="Video" checked={video} onChange={setVideo} />
          </div>
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
