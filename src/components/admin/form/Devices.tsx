import { useCampaign } from "@/app/admin/campaign/create/context/CampaignContext";
import Checkbox from "./fields/Checkbox";

export default function Devices() {
    console.log("Devices rendered")
    const { state, dispatch } = useCampaign();

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

    return (
        <div className="flex flex-col gap-2">

            <Checkbox label="Connected TV" name="CONNECTED_TV" checked={Boolean(state.devices.find((d) => d === 'CONNECTED_TV'))} onChange={toggleDevice} />
            <Checkbox label="Desktop" name="DESKTOP" checked={Boolean(state.devices.find((d) => d === 'DESKTOP'))} onChange={toggleDevice} />
            <Checkbox label="Mobile" name="MOBILE" checked={Boolean(state.devices.find((d) => d === 'MOBILE'))} onChange={toggleDevice} />
            <Checkbox label="Tablet" name="TABLET" checked={Boolean(state.devices.find((d) => d === 'TABLET'))} onChange={toggleDevice} />

        </div>

    )
}