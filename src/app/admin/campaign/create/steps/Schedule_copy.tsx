'use client';

import React, { useState } from 'react';
import DateField from '@/components/admin/form/fields/Date';
import CustomDateField from '@/components/admin/form/fields/CustomDate';
import Select from '@/components/admin/form/fields/Select';
import RadioGroup from '@/components/admin/form/fields/RadioGroup';
import { useCampaign } from '../context/CampaignContext';

const MINUTES = [
  { key: "ZERO", label: "00" },
  { key: "FIFTEEN", label: "15" },
  { key: "THIRTY", label: "30" },
  { key: "FORTY_FIVE", label: "45" },
];

const DAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY"
];

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

  const [dayParting, setDayParting] = useState('all');
  const [weekDay, setWeekDay] = useState('');
  const [startHours, setStartTime] = useState('');
  const [endHours, setEndTime] = useState('');
  const [startMinutes, setStartMinutes] = useState('');
  const [endMinutes, setEndMinutes] = useState('');

  console.log("day parting value", dayParting, weekDay, startHours, endHours);


  const [errors, setErrors] = useState<Record<string, string>>({});

  console.log("Schedule component rendered", state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const today = new Date().toISOString().split("T")[0];

    if (name === "start_date") {

      if (value < today) {
        setErrors((prev) => ({
          ...prev,
          start_date: "Start date cannot be in the past"
        }))
      }
      // remove previous error if it has changed to a valid value
      else {
        setErrors((prev) => ({
          ...prev,
          start_date: ""
        }))
      }

      if (state.end_date && state.end_date < value) {
        setErrors((prev) => ({ ...prev, end_date: "End date cannot be before start date" }));
      }
      // remove previous error if it has changed to a valid value 
      else {
        setErrors((prev) => ({ ...prev, end_date: "" }));

      }

      dispatch({
        type: "SET_FIELD",
        payload: {
          [name]: value
        }
      })

      return;
    }


    if (name === "end_date") {

      dispatch({
        type: "SET_FIELD",
        payload: {
          [name]: value
        }
      })


      if (value < today) {
        setErrors((prev) => ({
          ...prev,
          end_date: "End date cannot be in the past"
        }))
      }
      // remove previous error if it has changed to a valid value
      else {
        setErrors((prev) => ({
          ...prev,
          end_date: ""
        }))
      }

      if (state.start_date && value < state.start_date) {
        setErrors((prev) => ({
          ...prev,
          end_date: "End date cannot be before start date"
        }));
      }

      return;

    }
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  }

  const handleWeekDayChange = (val: string) => {
    setWeekDay(val);
    setErrors((prev) => ({
      ...prev,
      weekDay: ""
    }));
  }

  const handleStartHourChange = (val: string) => {
    setStartTime(val);
    setErrors((prev) => ({
      ...prev,
      startHours: ""
    }));
  }

  const handleStartMinutesChange = (val: string) => {
    setStartMinutes(val);
    setErrors((prev) => ({
      ...prev,
      startMinutes: ""
    }));
  }

  const handleEndHoursChange = (val: string) => {
    setEndTime(val);
    setErrors((prev) => ({
      ...prev,
      endHours: ""
    }));
  }

  const handleEndMinutesChange = (val: string) => {
    setEndMinutes(val);
    setErrors((prev) => ({
      ...prev,
      endMinutes: ""
    }));
  }

  function validate() {
    let isValidationPassed = true;
    if (dayParting === 'specific') {
      if (!weekDay) {
        setErrors((prev) => ({ ...prev, weekDay: "required for day parting" }));
        isValidationPassed = false;
      }

      if (!startHours) {
        setErrors((prev) => ({ ...prev, startHours: "required for day parting" }));
        isValidationPassed = false;
      }

      if (!endHours) {
        setErrors((prev) => ({ ...prev, endHours: "required for day parting" }));
        isValidationPassed = false;
      }

      if (!startMinutes) {
        setErrors((prev) => ({ ...prev, startMinutes: "required for day parting" }));
        isValidationPassed = false;

      }

      if (!endMinutes) {
        setErrors((prev) => ({ ...prev, endMinutes: "required for day parting" }));
        isValidationPassed = false;

      }

      if (startHours && endHours) {

        if (endHours < startHours || (endHours === startHours && endMinutes <= startMinutes)) {
          setErrors((prev) => ({ ...prev, endHours: "End time must be after start time" }));
          isValidationPassed = false;
        }
      }
      return isValidationPassed;
    }
    return isValidationPassed;
  }

  function handleNextStep() {
    console.log("next step function called", weekDay, startHours, endHours, startMinutes, endMinutes)
    console.log("validate()", validate())
    if (!validate()) return;
    if (dayParting === 'specific') {
      let data: any = [];
      if (weekDay === "all") {
        data = DAYS.map((day) => {
          return {
            day_of_week: day,
            start_hour: Number(startHours),
            end_hour: Number(endHours),
            start_minute: startMinutes,
            end_minute: endMinutes,
          }
        })
      } else if (weekDay === "weekdays") {
        data = DAYS.filter(day => day !== "SUNDAY" && day !== "SATURDAY").map((day) => {
          return {
            day_of_week: day,
            start_hour: Number(startHours),
            end_hour: Number(endHours),
            start_minute: startMinutes,
            end_minute: endMinutes,
          }
        })
      }
      else if (weekDay === "weekend") {
        data = DAYS.filter(day => day === "SUNDAY" || day === "SATURDAY").map((day) => {
          return {
            day_of_week: day,
            start_hour: Number(startHours),
            end_hour: Number(endHours),
            start_minute: startMinutes,
            end_minute: endMinutes,
          }
        })
      }

      dispatch({
        type: "SET_FIELD",
        payload: {
          schedules: data
        }
      });

    }
    onNext();
  }



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
            <CustomDateField
              label="Start Date"
              name="start_date"
              value={state.start_date}
              onChange={handleChange}
              error={errors.start_date}
            />

            <CustomDateField
              label="End Date"
              name="end_date"
              value={state.end_date}
              onChange={handleChange}
              error={errors.end_date}

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
                error={errors.weekDay}
                onChange={handleWeekDayChange}
                placeholder="All week"
                options={[
                  { label: 'All Week', value: 'all' },
                  { label: 'Weekdays', value: 'weekdays' },
                  { label: 'Weekend', value: 'weekend' },
                ]}
              />

              <Select
                label="Start Hour"
                name="startHour"
                value={startHours}
                error={errors.startHours}
                onChange={handleStartHourChange}
                placeholder="Start Hour"
                options={

                  [...Array(24)].map((_, h) => {
                    return {
                      label: `${String(h).padStart(2, "0")}`,
                      value: `${String(h).padStart(2, "0")}`
                    }
                  })}
              />

              <Select
                label="Start Minutes"
                name="startMinutes"
                value={startMinutes}
                onChange={handleStartMinutesChange}
                error={errors.startMinutes}
                placeholder="Start Minutes"
                options={MINUTES.map(m => {
                  return {
                    label: m.label,
                    value: m.key
                  }
                })}
              />

              <Select
                label="End Hours"
                name="endHours"
                value={endHours}
                onChange={handleEndHoursChange}
                placeholder="End Hours"
                error={errors.endHours}

                options={

                  [...Array(24)].map((_, h) => {
                    return {
                      label: `${String(h).padStart(2, "0")}`,
                      value: `${String(h).padStart(2, "0")}`
                    }
                  })
                }
              />

              <Select
                label="End Minutes"
                name="endMinutes"
                value={endMinutes}
                onChange={handleEndMinutesChange}
                placeholder="End Minutes"
                error={errors.endMinutes}
                options={MINUTES.map(m => {
                  return {
                    label: m.label,
                    value: m.key
                  }
                })}
              />
            </div>
          )}

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
