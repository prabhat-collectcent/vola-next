import { useCampaign } from '@/app/admin/campaign/edit/[id]/context/CampaignContext';
import Text from '@/components/admin/form/fields/Text';
import { useState } from 'react';

const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

export default function IpInclusionBox() {
    const [ip, setIp] = useState("");
    const [error, setError] = useState("");

    const { state, dispatch } = useCampaign();

    const selectedIps = state.ip_inclusions || [];


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIp(e.target.value);
    }

    function addIp(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key !== "Enter") return;

        const raw = ip.trim();
        if (!raw) return;

        const ips = raw.split(",").map(i => i.trim()).filter(Boolean);

        const validIps: string[] = [];
        const invalidIps: string[] = [];
        const duplicateIps: string[] = [];

        ips.forEach((singleIp) => {
            if (!ipRegex.test(singleIp)) {
                invalidIps.push(singleIp);
            } else if (selectedIps.find(current => current.ip == singleIp) || validIps.includes(singleIp)) {
                duplicateIps.push(singleIp);
            } else {
                validIps.push(singleIp);
            }
        });

        if (invalidIps.length > 0) {
            setError(`Invalid IP(s): ${invalidIps.join(", ")}`);
            return;
        }

        if (duplicateIps.length > 0) {
            setError(`Duplicate IP(s): ${duplicateIps.join(", ")}`);
            return;
        }

        if (validIps.length > 500) {
            setError('Maximum 500 IPs can be added at once');
            return;
        };

        setError('');

        let updatedAddedIps = [...state.addedIpInclusions, ...validIps];

        dispatch({
            type: "SET_FIELD",
            payload: {
                ip_inclusions: [...selectedIps, ...validIps.map(ip => ({ ip: ip }))], addedIpInclusions: updatedAddedIps,
            },
        });

        setIp("");

    }

    function removeIp(ipCriteria: any) {
        console.log("remove ip called", selectedIps)
        let updateRemovedIps = [...state.removedIpInclusions, ipCriteria.id]
        dispatch({
            type: "SET_FIELD",
            payload: {
                removedIpInclusions: updateRemovedIps,
                ip_inclusions: selectedIps.filter((ip) => ipCriteria.ip != ip.ip)
            },
        });
    }

    return (
        <div className="mb-6">


            {/* Input */}
            <div className="relative">
                <Text
                    name="ip_exclusions"
                    label="IP Inclusions"
                    value={ip}
                    onChange={handleChange}
                    onKeyDown={addIp}
                    // error={error}
                    warning='Maximum 500 IPs can be added at once'
                    placeholder="Enter IPs (comma separated) and press Enter"
                />
            </div>

            <div className="flex items-center gap-1 mt-4">
                <label className="text-[13px] text-[#1E1E1E]">
                    Upload CSV
                </label>

                <button
                    type="button"
                    // onClick={downloadSampleCSV}
                    className="text-xs text-blue-600 hover:underline"
                >
                    (Download sample)
                </button>
            </div>

            <div className="mt-2">
                <Text
                    name="upload_ip_csv"
                    type="file"
                    accept=".csv"
                    // onChange={handleCSVUpload}
                    className="mt-2 block w-full text-sm text-gray-500"
                    error={error}
                />
            </div>


            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selectedIps.map((ipCriteria) => (
                    <div
                        key={ipCriteria.ip}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                        {ipCriteria.ip}

                        <button
                            type="button"
                            onClick={() => removeIp(ipCriteria)}
                            className="ml-2 text-gray-500 hover:text-red-500"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );

}