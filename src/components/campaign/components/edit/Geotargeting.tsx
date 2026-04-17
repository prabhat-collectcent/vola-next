import { updateGeoCampaignTargetingAction } from "@/actions/campaign.actions";
import { getCountryListAction } from "@/actions/metadata.actions";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import CarrierBox from "@/components/admin/form/edit_campaign/CarrierBox";
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
            }
    
          } catch (error) {
            showToast('Failed to fetch country list', 'error');
          }
    
        }
        fetchCountryList();
      }, [])


    function handleCountryChange(value: string) {
        dispatch({ type: 'SET_FIELD', payload: { country: value } });
    }


    async function handleGeoTargetingSave() {

        setSaving(true);
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
            }

        } catch (error) {
            showToast((error as Error)?.message || 'Something went wrong', 'error');
        } finally {
            setSaving(false);
        }

    }

    return (
        <div className="flex flex-col">

            <div className='mb-8'>
                <Select
                    label="Select Country"
                    name="country"
                    value={state.country}
                    onChange={handleCountryChange}
                    placeholder="Select Country"
                    options={countryList}
                />

            </div>

            <LocationSearchBox title="Include locations" type="include" countryCode={state.country ?? ''} />
            <LocationSearchBox title="Exclude locations" type="exclude" countryCode={state.country ?? ''} />

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