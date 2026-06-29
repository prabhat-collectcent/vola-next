'use client';

import React, { useState } from 'react';
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

    const [schedule, setSchedule] = useState<Record<string, any>>(
        DAYS.reduce((acc, day) => {
            acc[day] = {
                enabled: false,
                start_hour: "0",
                start_minute: "ZERO",
                end_hour: "0",
                end_minute: "ZERO",
            };
            return acc;
        }, {} as Record<string, any>)
    );

    const toggleDay = (day: string) => {
        setSchedule(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                enabled: !prev[day].enabled
            }
        }));
    };

    const updateTime = (day: string, field: string, value: string) => {
        setSchedule(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [field]: value
            }
        }));
    };


    console.log("day parting value", dayParting);


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

    function validate() {
        if (dayParting !== 'specific') return true;

        const activeDays = Object.values(schedule).filter((d: any) => d.enabled);

        if (activeDays.length === 0) {
            setErrors(prev => ({ ...prev, schedule: "Select at least one day" }));
            return false;
        }

        for (const d of activeDays) {
            if (Number(d.end_hour) <= Number(d.start_hour)) {
                setErrors(prev => ({ ...prev, schedule: "Invalid time range" }));
                return false;
            }
        }

        return true;
    }

    function handleNextStep() {
        // console.log("next step function called", weekDay, startHours, endHours, startMinutes, endMinutes)
        console.log("validate()", validate())
        if (!validate()) return;
        if (dayParting === 'specific') {
            const data = Object.entries(schedule)
                .filter(([_, v]: any) => v.enabled)
                .map(([day, v]: any) => ({
                    day_of_week: day,
                    start_hour: Number(v.start_hour),
                    end_hour: Number(v.end_hour),
                    start_minute: v.start_minute,
                    end_minute: v.end_minute,
                }));

            dispatch({
                type: "SET_FIELD",
                payload: {
                    // @ts-ignore
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
                        <div>
                            <div className="border border-[#E5E7EB] rounded-[14px] overflow-hidden">
                                {DAYS.map((day, index) => {
                                    const d = schedule[day];

                                    return (
                                        <div
                                            key={day}
                                            className={`
            flex items-center justify-between
            px-4 h-[70px]
            ${index !== DAYS.length - 1 ? "border-b border-[#E5E7EB]" : ""}
          `}
                                        >
                                            {/* LEFT: Checkbox + Day */}
                                            <div className="flex items-center gap-3 min-w-[140px]">
                                                <input
                                                    type="checkbox"
                                                    checked={d.enabled}
                                                    onChange={() => toggleDay(day)}
                                                    className="w-4 h-4 accent-[#4144E6]"
                                                />

                                                <span className="text-[13px] text-[#1E1E1E] capitalize">
                                                    {day.toLowerCase()}
                                                </span>
                                            </div>

                                            {/* RIGHT: Time section (WIDER) */}
                                            <div className="flex items-center gap-2 flex-1 justify-end">
                                                <div className="w-[140px]">
                                                    <Select
                                                        value={d.start_hour}
                                                        onChange={(val) => updateTime(day, "start_hour", val)}
                                                        disabled={!d.enabled}
                                                        options={[...Array(24)].map((_, h) => ({
                                                            label: `${String(h).padStart(2, "0")}:00`,
                                                            value: String(h),
                                                        }))}
                                                    />
                                                </div>

                                                <span className="text-xs text-[#6B7280]">to</span>

                                                <div className="w-[140px]">
                                                    <Select
                                                        value={d.end_hour}
                                                        onChange={(val) => updateTime(day, "end_hour", val)}
                                                        disabled={!d.enabled}
                                                        options={[...Array(24)].map((_, h) => ({
                                                            label: `${String(h).padStart(2, "0")}:00`,
                                                            value: String(h),
                                                        }))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}


                            </div>
                            {errors.schedule && <div className="text-[11px] text-red-400 mt-1">{errors.schedule}</div>}

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
