import { updateMiscellaneousTargetingAction } from "@/actions/campaign.actions";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import CarrierBox from "@/components/admin/form/edit_campaign/CarrierBox";
import Devices from "@/components/admin/form/edit_campaign/Devices";
import IpExclusionBox from "@/components/admin/form/edit_campaign/IPExclusionBox";
import { useToast } from "@/components/toast/ToastProvider";
import { updateMiscellaneousPayload } from "@/services/campaign.service";
import { useParams } from "next/navigation";

export default function Miscelleneous() {

    const { state, dispatch } = useCampaign();
    const { showToast } = useToast();
    const { id } = useParams();


   async function handleMiscellaneousSave() {

        console.log("handle miscallenaous called", state);

        try {

            let payload: updateMiscellaneousPayload = {
                addedDevices: state.addedDevices,
                removedDevices: state.removedDevices,
                addedIpExclusions: state.addedIpExclusions,
                removedIpExclusions: state.removedIpExclusions,
                addedCarriers: state.addedCarriers,
                removedCarriers: state.removedCarriers
            };


            console.log("demo payload", payload);
            const apiResponse: any = await updateMiscellaneousTargetingAction(id as unknown as number, payload);

            console.log("update miscellaneous targeting api res", apiResponse)

            if ((apiResponse as any)?.success) {
                showToast('Campaign miscellaneous targeting updated successfully', 'success');
            } else {
                showToast(apiResponse?.message || 'Something went wrong', 'error');
                return;
            }

        } catch (error) {
            showToast((error as Error)?.message || 'Something went wrong', 'error');
            return;
        }


    }

    return (
        <div className="space-y-6">
            <Devices />
            <IpExclusionBox />
            <CarrierBox />

            <div className="flex justify-end">
                <button
                    onClick={handleMiscellaneousSave}
                    className="px-4 py-2 bg-indigo-800 rounded-full text-white text-sm"
                >
                    Save
                </button>
            </div>
        </div>
    )
}

