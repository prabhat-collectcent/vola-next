'use client';

import { getCampaignReportAction } from "@/actions/campaign.actions";
import { useEffect, useState } from "react";

type Report = {
    impressions: number;
    clicks: number;
    installs: number;
    app_id: string;
    id: number
};

export default function Reports() {
    const [data, setData] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    console.log("data", data[0])

    useEffect(() => {
        async function fetchReports() {
            try {
                const data: any = await getCampaignReportAction();

                setData([{ ...data.db, app_id: data.appId }]);
            } catch (err) {
                console.error("Error fetching reports", err);
            } finally {
                setLoading(false);
            }
        }

        fetchReports();
    }, []);

    return (
        <div className="max-w-[900px] mx-auto w-full p-6">

            {/* Header */}
            <h2 className="text-lg font-medium mb-6">Reports</h2>

            {/* Card */}
            <div className="bg-white border border-neutral-100 rounded-2xl p-6">

                {loading ? (
                    <div className="text-sm text-gray-500">Loading reports...</div>
                ) : data.length === 0 ? (
                    <div className="text-sm text-gray-500">No data available</div>
                ) : (

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[800px]">

                            {/* Header */}
                            <thead>
                                <tr className="border-b border-[#E5E5EA] text-[11px] text-[#242424]">
                                    <th className="py-[12px] px-[16px] font-medium">App ID</th>
                                    <th className="py-[12px] px-[16px] font-medium">Impressions</th>
                                    <th className="py-[12px] px-[16px] font-medium">Clicks</th>
                                    <th className="py-[12px] px-[16px] font-medium">Installs</th>
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {data.map((row) => (
                                    <tr
                                        key={row.id}
                                        className="border-b border-[#E5E5EA] text-[11px] text-[#242424] hover:bg-[#F8F8FA] transition"
                                    >
                                        <td className="py-[12px] px-[16px]">{row.app_id}</td>
                                        <td className="py-[12px] px-[16px]">{row.impressions}</td>
                                        <td className="py-[12px] px-[16px]">{row.clicks}</td>
                                        <td className="py-[12px] px-[16px]">{row.installs}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                )}
            </div>
        </div>
    );
}