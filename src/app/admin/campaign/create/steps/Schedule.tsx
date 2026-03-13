'use client';

import React, { useState } from 'react';
import DateField from '@/components/admin/form/fields/Date';
import Select from '@/components/admin/form/fields/Select';
import RadioGroup from '@/components/admin/form/fields/RadioGroup';
import { useCampaign } from '../context/CampaignContext';

interface Props {
  onNext: () => void;
  isActive: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
}

export default function Schedule({
  onNext,
  isActive,
  isDisabled,
  onToggle,
}: Props) {

  const { state, dispatch } = useCampaign()


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type: "SET_FIELD",
      payload: {
        [e.target.name]: e.target.value
      }
    })
  }

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dayParting, setDayParting] = useState('all');
  const [weekDay, setWeekDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  if (isDisabled) {
    return (
      <div
        onClick={onToggle}
        className="w-full px-12 py-5 bg-white rounded-2xl outline outline-1 outline-neutral-100 cursor-pointer opacity-60"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-2xl outline outline-neutral-300 flex items-center justify-center">
            2
          </div>
          <div className="text-lg">Schedule</div>
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
          2
        </div>
        <div className="text-lg">Schedule</div>
      </div>

      {/* Animated Body */}
      <div
        className={`transition-all duration-300 ease-in-out ${isActive
          ? 'opacity-100 translate-y-0 mt-6'
          : 'opacity-0 -translate-y-2 hidden'
          }`}
      >
        <div className="flex flex-col gap-6 pb-2">
          <div className="flex gap-3">
            <DateField
              label="Start Date"
              name="startDate"
              value={state.start_date}
              onChange={(e) => console.log("Event start date occured",e)}
            />

            <DateField
              label="End Date"
              name="endDate"
              value={state.end_date}
              onChange={(e) => console.log("Event end date occured",e)}
            />
          </div>

          <RadioGroup
            label="Day Parting"
            value={dayParting}
            onChange={setDayParting}
            options={[
              { label: 'No day parting (24x7)', value: 'all' },
              {
                label: 'Run campaign on specific days or times',
                value: 'specific',
              },
            ]}
          />

          {dayParting === 'specific' && (
            <div className="flex gap-3">
              <Select
                label="Week Days"
                name="weekDays"
                value={weekDay}
                onChange={(val: string) => setWeekDay(val)}
                placeholder="All week"
                options={[
                  { label: 'All Week', value: 'all' },
                  { label: 'Weekdays', value: 'weekdays' },
                  { label: 'Weekend', value: 'weekend' },
                ]}
              />

              <Select
                label="Start Time"
                name="startTime"
                value={startTime}
                onChange={(val: string) => setStartTime(val)}
                placeholder="Start Time"
                options={[
                  { label: '08:00 AM', value: '08:00' },
                  { label: '09:00 AM', value: '09:00' },
                  { label: '11:00 AM', value: '11:00' },
                ]}
              />

              <Select
                label="End Time"
                name="endTime"
                value={endTime}
                onChange={(val: string) => setEndTime(val)}
                placeholder="End Time"
                options={[
                  { label: '05:00 PM', value: '17:00' },
                  { label: '06:00 PM', value: '18:00' },
                  { label: '12:00 PM', value: '12:00' },
                ]}
              />
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
    </div>
  );
}
