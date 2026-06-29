'use client';

import { useCampaign } from '@/app/admin/campaign/edit/[id]/context/CampaignContext';
import { Users, Smartphone } from 'lucide-react';
import { useState } from 'react';

export default function CustomAudience() {
    const [error, setError] = useState<any>({});
    const { state, dispatch } = useCampaign();
    const [saving, setSaving] = useState(false);



    const [deviceFile, setDeviceFile] = useState<File | null>(null);

    async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {

        const file = e.target.files?.[0];
        if (!file) return;
        setDeviceFile(file);

        if (!file.name.endsWith(".csv")) {
            setError("Only CSV files are allowed.");
            return;
        }

        try {
            const text = await file.text();

            const rows = text
                .split("\n")
                .map((r) => r.trim())
                .filter(Boolean);

            if (rows.length === 0) {
                setError("CSV file is empty.");
                return;
            }

            // if (rows.length > 500) {
            //     setError("Maximum 500 advertisers allowed in CSV");
            //     return;
            // }

            const [header, ...dataRows] = rows;

            if (!header.toLowerCase().includes("Advertiser IDs".toLowerCase())) {
                setError("CSV must have 'Advertiser IDs' as header.");
                return;
            }

            console.log("data rows", dataRows);


            dispatch({
                type: "SET_FIELD",
                payload: {
                    custom_audiences: dataRows
                },
            });
        } catch (error) {
            console.log(error);
            setError("Failed to parse CSV file.");
            return;
        }
    }
    return (
        <div className="w-full">

            {/* Heading */}
            <div className="mb-6">
                <div className="text-[15px] font-medium text-[#1E1E1E] mb-1">
                    Custom Audience
                </div>

                <div className="text-xs text-neutral-500">
                    Target or exclude a custom audience in your campaign
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                {/* By DMP */}
                <div className="border border-neutral-200 rounded-2xl p-6 bg-white min-h-[260px] flex flex-col justify-between">

                    {/* Top */}
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                            <Users
                                size={26}
                                className="text-[#4144E6]"
                            />
                        </div>

                        <div className="text-sm font-medium text-[#1E1E1E] mb-2">
                            By DMP
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="flex justify-center mt-6">
                        <button
                            type="button"
                            className="h-[40px] px-6 rounded-xl bg-[#4144E6] text-white text-sm hover:bg-[#3538D4] transition-all"
                        >
                            Connect DMP
                        </button>
                    </div>
                </div>

                {/* By Device IDs */}
                <div className="border border-neutral-200 rounded-2xl p-6 bg-white min-h-[260px] flex flex-col justify-between">

                    {/* Top */}
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-4">
                            <Smartphone
                                size={26}
                                className="text-[#4144E6]"
                            />
                        </div>

                        <div className="text-sm font-medium text-[#1E1E1E] mb-2">
                            By Device IDs
                        </div>


                    </div>

                    {/* Bottom */}
                    <label className="border border-dashed border-[#4144E6] rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-[#F8F9FF] transition-all mt-6">

                        <div className="text-sm text-[#4144E6] font-medium mb-1">
                            Upload CSV File
                        </div>

                        <div className="text-xs text-neutral-500 text-center">
                            Supported format: .csv
                        </div>

                        <input
                            type="file"
                            accept=".csv"
                            className="hidden"
                            onChange={handleFileChange}

                        />
                    </label>

                    {deviceFile && (
                        <div className="mt-3 text-xs text-[#4144E6] font-medium text-center break-all">
                            {deviceFile.name}
                        </div>
                    )}

                </div>

            </div>


            {/* Footer Note */}
            <div className="mt-6 text-xs text-neutral-500 leading-5">
                In order to connect and receive audience lists from 3rd party
                sources, please go to{" "}
                <span className="text-[#4144E6] font-medium cursor-pointer">
                    Advanced Settings → 3rd Party Audience
                </span>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={() => { }}
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


    );
}