import { updateMiscellaneousTargetingAction } from "@/actions/campaign.actions";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import CarrierBox from "@/components/admin/form/edit_campaign/CarrierBox";
import Devices from "@/components/admin/form/edit_campaign/Devices";
import IpExclusionBox from "@/components/admin/form/edit_campaign/IPExclusionBox";
import IpInclusionBox from "@/components/admin/form/edit_campaign/IPInclusionBox";
import { useToast } from "@/components/toast/ToastProvider";
import { updateMiscellaneousPayload } from "@/services/campaign.service";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Miscelleneous() {

    const router = useRouter();

    const { state, dispatch } = useCampaign();
    const { showToast } = useToast();
    const { id } = useParams();

    const [saving, setSaving] = useState(false);



    async function handleMiscellaneousSave() {

        setSaving(true);

        try {

            let payload: updateMiscellaneousPayload = {
                addedDevices: state.addedDevices,
                removedDevices: state.removedDevices,
                addedIpExclusions: state.addedIpExclusions,
                addedIpInclusions: state.addedIpInclusions,
                removedIpExclusions: state.removedIpExclusions,
                removedIpInclusions: state.removedIpInclusions,
                addedCarriers: state.addedCarriers,
                removedCarriers: state.removedCarriers
            };

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
        } finally {
            setSaving(false);
        }


    }

    return (
        <div className="space-y-6">
            <Devices />
            <IpExclusionBox />
            <IpInclusionBox/>
            <CarrierBox />

            <div className="flex justify-end gap-3">
                <button
                    onClick={() => router.push(`/admin/campaign/edit/${id}/creatives?id=${id}&type=${state.campaign_type}`)}
                    className="px-4 py-2 rounded-full text-white text-sm flex items-center justify-center gap-3 bg-indigo-800"
                >
                    Edit Creatives
                </button>

                <button
                    onClick={handleMiscellaneousSave}
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
    )
}

