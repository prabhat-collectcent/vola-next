import { updateGeoCampaignTargetingAction } from "@/actions/campaign.actions";
import { getCountryListAction } from "@/actions/metadata.actions";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import CarrierBox from "@/components/admin/form/edit_campaign/CarrierBox";
import CountrySearchBox from "@/components/admin/form/edit_campaign/CountrySearchBox";
import IpExclusionBox from "@/components/admin/form/edit_campaign/IPExclusionBox";
import LocationSearchBox from "@/components/admin/form/edit_campaign/LocationSearchBox";
import Select from '@/components/admin/form/fields/Select';
import { useToast } from "@/components/toast/ToastProvider";
import { updateCampaignGeoTargetingPayload } from "@/services/campaign.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Geotargeting() {

    const { state, dispatch } = useCampaign()
    const { showToast } = useToast();
    const { id } = useParams();

    const [saving, setSaving] = useState(false);
    const [countryList, setCountryList] = useState<{ label: string; value: string }[]>([]);


    useEffect(() => {

        async function fetchCountryList() {
            try {
                const result: any = await getCountryListAction();
                if (result.success) {
                    const countries = Object.keys(result.data).map((key) => {
                        return { label: result.data[key], value: key };
                    });
                    setCountryList(countries);
                } else {
                    showToast(result.message || 'Failed to fetch country list', 'error');
                }
            } catch (error) {
                showToast('Failed to fetch country list', 'error');
            }

        }
        fetchCountryList();
    }, [])

    async function handleGeoTargetingSave() {

        setSaving(true);
        try {

            let payload: updateCampaignGeoTargetingPayload = {
                geo_include: state.added_geo_include.map(loc => { return { source: loc.source, canonicalName: loc.canonicalName, geoId: loc.geoTargetConstant }; }),
                geo_exclude: state.added_geo_exclude.map(loc => { return { source: loc.source, canonicalName: loc.canonicalName, geoId: loc.geoTargetConstant }; }),
                deleted_geo: state.deleted_geo
            };

            console.log("update campaign location payload", payload);   
            const apiResponse: any = await updateGeoCampaignTargetingAction(id as unknown as number, payload);

            console.log("update location targeting api res", apiResponse)   

            if ((apiResponse as any)?.success) {    
                showToast('Campaign location targeting updated successfully', 'success');
            } else {
                showToast(apiResponse?.message || 'Something went wrong', 'error');
            }

        } catch (error) {
                        console.log("update location targeting api res", error)   

            showToast((error as Error)?.message || 'Something went wrong', 'error');
        } finally {
            setSaving(false);
        }

    }

    return (
        <div className="flex flex-col">

            <CountrySearchBox />
            <LocationSearchBox title="Include locations" type="include" countryCodes={state.countries?.map(o => o.countryCode) ?? []} />
            <LocationSearchBox title="Exclude locations" type="exclude" countryCodes={state.countries?.map(o => o.countryCode) ?? []} />

            <div className="flex justify-end">

                <button
                    onClick={handleGeoTargetingSave}
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