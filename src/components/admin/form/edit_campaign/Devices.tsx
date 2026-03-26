import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import Checkbox from "../fields/Checkbox";

export default function Devices() {
    console.log("Devices rendered")
    const { state, dispatch } = useCampaign();

    console.log("Devices rendered with state: ", state);

    function toggleDevice(e: React.ChangeEvent<HTMLInputElement>) {
        const device = e.target.name;
        const found = state.devices.find((d) => d.device === device);
        let updatedDevices = [];
        let removeUpdateState = state['removedDevices'];
        let addedUpdateState = state['addedDevices'];


        if (found) {
            if (found.id) removeUpdateState = [...state['removedDevices'], found.id];
            updatedDevices = state.devices.filter((d) => d.device !== device);
            addedUpdateState = state['addedDevices'].filter((d: string) => d != device);

        } else {
            updatedDevices = [...state.devices, { device: device }];
            addedUpdateState = [...state['addedDevices'], device];

        }
        dispatch({ type: 'SET_FIELD', payload: { devices: updatedDevices, 'removedDevices': removeUpdateState } });
    }

    return (
        <div className="flex flex-col gap-2">

            <Checkbox label="Connected TV" name="CONNECTED_TV" checked={Boolean(state.devices.find((d) => d.device === 'CONNECTED_TV'))} onChange={toggleDevice} />
            <Checkbox label="Desktop" name="DESKTOP" checked={Boolean(state.devices.find((d) => d.device === 'DESKTOP'))} onChange={toggleDevice} />
            <Checkbox label="Mobile" name="MOBILE" checked={Boolean(state.devices.find((d) => d.device === 'MOBILE'))} onChange={toggleDevice} />
            <Checkbox label="Tablet" name="TABLET" checked={Boolean(state.devices.find((d) => d.device === 'TABLET'))} onChange={toggleDevice} />

        </div>

    )
}