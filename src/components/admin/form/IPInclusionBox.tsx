import { useCampaign } from '@/app/admin/campaign/create/context/CampaignContext';
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

        ips.forEach((singleIp) => {
            if (!ipRegex.test(singleIp)) {
                invalidIps.push(singleIp);
            } else if (!selectedIps.includes(singleIp) && !validIps.includes(singleIp)) {
                validIps.push(singleIp);
            }
        });

        if (selectedIps.length + validIps.length > 500) {
            setError('Maximum 500 IPs can be added at once');
        }

        if (invalidIps.length > 0) {
            setError(`Invalid IP(s): ${invalidIps.join(", ")}`);
        } else {
            setError("");
        }

        if (validIps.length > 0) {
            dispatch({
                type: "SET_FIELD",
                payload: {
                    ip_inclusions: [...selectedIps, ...validIps],
                },
            });
        }

        setIp("");
    }

    function removeIp(ip: string) {
        dispatch({
            type: "SET_FIELD",
            payload: {
                ip_inclusions: selectedIps.filter((i: string) => i !== ip),
            },
        });
    }

    const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('handle csv upload executed...')
        setError("");

        const file = e.target.files?.[0];
        if (!file) return;

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

            if (rows.length > 500) {
                setError("Maximum 500 IPs allowed in CSV.");
                return;
            }

            // optional: header check
            const [header, ...dataRows] = rows;

            if (!header.toLowerCase().includes("ip")) {
                setError("CSV must have 'IP' as header.");
                return;
            }

            const validIps: string[] = [];
            const invalidIps: string[] = [];

            dataRows.forEach((ip) => {
                const trimmed = ip.trim();

                if (!ipRegex.test(trimmed)) {
                    invalidIps.push(trimmed);
                } else if (
                    !selectedIps.includes(trimmed) &&
                    !validIps.includes(trimmed)
                ) {
                    validIps.push(trimmed);
                }
            });

            if (invalidIps.length > 0) {
                setError(`Invalid IP(s): ${invalidIps.join(", ")}`);
                return;
            }

            if (validIps.length === 0) {
                setError("All IPs already exist.");
                return;
            }

            dispatch({
                type: "SET_FIELD",
                payload: {
                    ip_inclusions: [...selectedIps, ...validIps],
                },
            });

        } catch (err) {
            setError("Failed to parse CSV file.");
        } finally {
            e.target.value = '';
        }
    };

    const downloadSampleCSV = () => {
        const sampleData = [
            "IP",
            "192.168.1.1",
            "10.0.0.1",
            "172.16.0.1",
        ];

        const blob = new Blob([sampleData.join("\n")], {
            type: "text/csv;charset=utf-8;",
        });

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "sample_ips.csv");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };

    return (
        <div className="mb-6">

            <div className="relative">
                <Text
                    name="ip_inclusions"
                    label="IP Inclusions"
                    value={ip}
                    onChange={handleChange}
                    onKeyDown={addIp}
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
                    onClick={downloadSampleCSV}
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
                    onChange={handleCSVUpload}
                    className="mt-2 block w-full text-sm text-gray-500"
                    error={error}
                />
            </div>




            {/* Chips */}
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