import { useCampaign } from '@/app/admin/campaign/create/context/CampaignContext';
import Text from '@/components/admin/form/fields/Text';
import { useState } from 'react';

const ipRegex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;

export default function IpExclusionBox() {
    const [ip, setIp] = useState("");
    const [error, setError] = useState("");

    const { state, dispatch } = useCampaign();

    const selectedIps = state.ip_exclusions || [];


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIp(e.target.value);
    }

    function addIp(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key !== "Enter") return;
        if (!ip.trim()) return;
        if (selectedIps.includes(ip)) return;
        if (!ipRegex.test(ip)) {
            setError("Please enter a valid IP address");
            return;
        };
        setError("");

        dispatch({
            type: "SET_FIELD",
            payload: {
                ip_exclusions: [...selectedIps, ip],
            },
        });

        setIp("");

    }

    function removeIp(ip: string) {
        dispatch({
            type: "SET_FIELD",
            payload: {
                ip_exclusions: selectedIps.filter((i: string) => i !== ip),
            },
        });
    }

    return (
        <div className="mb-6">


            {/* Input */}
            <div className="relative">
                <Text
                    name="ip_exclusions"
                    label="IP Exclusions"
                    value={ip}
                    onChange={handleChange}
                    onKeyDown={addIp}
                    error={error}
                    placeholder="Enter ip address and press enter to add"
                />
            </div>

            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selectedIps.map((ip) => (
                    <div
                        key={ip}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                        {ip}

                        <button
                            type="button"
                            onClick={() => removeIp(ip)}
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