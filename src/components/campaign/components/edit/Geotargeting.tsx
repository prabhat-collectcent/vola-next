import { updateGeoCampaignTargetingAction } from "@/actions/campaign.actions";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import CarrierBox from "@/components/admin/form/edit_campaign/CarrierBox";
import IpExclusionBox from "@/components/admin/form/edit_campaign/IPExclusionBox";
import LocationSearchBox from "@/components/admin/form/edit_campaign/LocationSearchBox";
import { useToast } from "@/components/toast/ToastProvider";
import { updateCampaignGeoTargetingPayload } from "@/services/campaign.service";
import { useParams } from "next/navigation";

export default function Geotargeting() {

    const { state, dispatch } = useCampaign()
    const { showToast } = useToast();
    const { id } = useParams();



    async function handleGeoTargetingSave() {
        
        try {

            let payload: updateCampaignGeoTargetingPayload = {
                geo_include: state.geo_include.map(loc => loc.geoTargetConstant),
                geo_exclude: state.geo_exclude.map(loc => loc.geoTargetConstant),
                deleted_geo: state.deleted_geo
            };

            // console.log("update campaign schedule payload", payload);
            const apiResponse: any = await updateGeoCampaignTargetingAction(id as unknown as number, payload);

            console.log("update location targeting api res", apiResponse)

            if ((apiResponse as any)?.success) {
                showToast('Campaign location targeting updated successfully', 'success');
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
        <div className="flex flex-col">
            <LocationSearchBox title="Include locations" type="include" />
            <LocationSearchBox title="Exclude locations" type="exclude" />
            <div className="flex justify-end">
                <button
                    onClick={handleGeoTargetingSave}
                    className="px-4 py-2 bg-indigo-800 rounded-full text-white text-sm"
                >
                    Save
                </button>
            </div>

        </div>
    )
}