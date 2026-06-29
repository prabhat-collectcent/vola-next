import { useCampaign } from "@/app/admin/campaign/create/context/CampaignContext";
import Checkbox from "./fields/Checkbox";
import { useEffect, useState } from "react";
import { getOSVersionListAction } from "@/actions/metadata.actions";
import { useToast } from "@/components/toast/ToastProvider";

export default function Devices() {
    console.log("Devices rendered");
    const { state, dispatch } = useCampaign();
    const [androidVersionType, setAndroidVersionType] = useState<"all" | "minimum" | "specific">("all");
    const [androidVersion, setAndroidVersion] = useState<any>(null);
    const isAndroidSelected = Boolean(state.devices.find((d) => d === 'MOBILE'));
    const [osVersions, setOsVersions] = useState<{ name: string; google_resource_name: string, osMajorVersion: number, osMinorVersion: number, operatorType: string }[]>([]);
    const [filteredOSVersions, setFilteredOSVersions] = useState<{ name: string; google_resource_name: string, osMajorVersion: number, osMinorVersion: number, operatorType: string }[]>([]);
    const { showToast } = useToast();


    useEffect(() => {
        async function fetchOSVersionList() {
            try {
                const result: any = await getOSVersionListAction();
                if (result.success) {
                    const filteredVersions = result.data.filter((os: any) => os.name === 'Android');
                    setOsVersions(filteredVersions);
                    setFilteredOSVersions(filteredVersions);
                } else {
                    showToast(result.message || 'Failed to fetch Os version list', 'error');
                }
            } catch (error) {
                showToast('Failed to fetch Os version list', 'error');
            }
        }
        fetchOSVersionList();
    }, [])

    console.log("Devices rendered with state: ", state);

    function toggleDevice(e: React.ChangeEvent<HTMLInputElement>) {
        const device = e.target.name;
        const found = state.devices.find((d) => d === device);
        let updatedDevices = [];
        if (found) {
            updatedDevices = state.devices.filter((d) => d !== device);
        } else {
            updatedDevices = [...state.devices, device];
        }
        dispatch({ type: 'SET_FIELD', payload: { devices: updatedDevices } });
    }

    function handleAndroidVersionTypeChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const value = e.target.value as 'all' | 'minimum' | 'specific';
        setAndroidVersionType(value);
        if (value == 'specific') {
            setFilteredOSVersions(osVersions.filter(os => os.operatorType == 'EQUALS_TO'));
        } else if (value == 'minimum') {
            setFilteredOSVersions(osVersions.filter(os => os.operatorType == 'GREATER_THAN_EQUALS_TO'));
        }
    }

    function handleAndroidVersionChange(
        e: React.ChangeEvent<HTMLSelectElement>
    ) {
        const value = e.target.value;
        console.log('android version', e.target.value);
        setAndroidVersion(value);

        dispatch({
            type: "SET_FIELD",
            payload: {
                // @ts-ignore
                operating_systems: [value]
            }
        });

    }


    return (
        <div className="flex flex-col gap-2">

            <Checkbox label="Connected TV" name="CONNECTED_TV" checked={Boolean(state.devices.find((d) => d === 'CONNECTED_TV'))} onChange={toggleDevice} />
            <Checkbox label="Desktop" name="DESKTOP" checked={Boolean(state.devices.find((d) => d === 'DESKTOP'))} onChange={toggleDevice} />
            <Checkbox label="Mobile" name="MOBILE" checked={Boolean(state.devices.find((d) => d === 'MOBILE'))} onChange={toggleDevice} />
            <Checkbox label="Tablet" name="TABLET" checked={Boolean(state.devices.find((d) => d === 'TABLET'))} onChange={toggleDevice} />

            {/* Android Section */}
            <div className="flex flex-col gap-3">
                {/* <Checkbox
                    label="Android"
                    name="ANDROID"
                    checked={isAndroidSelected}
                    onChange={toggleDevice}
                /> */}

                {isAndroidSelected && (
                    <div className="ml-6 flex flex-col gap-3 border-l border-gray-200 pl-4">
                        <div className="text-xs font-medium">
                            Android Version Targeting
                        </div>

                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name="androidVersionType"
                                value="all"
                                checked={androidVersionType === "all"}
                                onChange={handleAndroidVersionTypeChange}
                            />
                            <span>All Versions</span>
                        </label>

                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name="androidVersionType"
                                value="minimum"
                                checked={androidVersionType === "minimum"}
                                onChange={handleAndroidVersionTypeChange}
                            />
                            <span>Minimum Version</span>
                        </label>

                        <label className="flex items-center gap-2 text-sm cursor-pointer">
                            <input
                                type="radio"
                                name="androidVersionType"
                                value="specific"
                                checked={androidVersionType === "specific"}
                                onChange={handleAndroidVersionTypeChange}
                            />
                            <span>Specific Version</span>
                        </label>

                        {(androidVersionType === "minimum" ||
                            androidVersionType === "specific") && (
                                <select
                                    value={androidVersion || ""}
                                    onChange={handleAndroidVersionChange}
                                    className="h-10 w-[220px] rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-black"
                                >
                                    <option value="">Select Android Version</option>

                                    {filteredOSVersions.map((version) => (
                                        <option key={version.google_resource_name} value={version.google_resource_name}>
                                            {version.name} {version.osMajorVersion != -1 ? version.osMajorVersion + '.' : ''}{version.osMinorVersion != -1 ? version.osMinorVersion : ''}
                                        </option>
                                    ))}
                                </select>
                            )}
                    </div>
                )}
            </div>

        </div>

    )
}