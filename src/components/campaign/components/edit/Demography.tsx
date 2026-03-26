'use client';

import { updateDemographyTargetingAction } from "@/actions/campaign.actions";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import Checkbox from "@/components/admin/form/fields/Checkbox";
import { useToast } from "@/components/toast/ToastProvider";
import { updateCampaignDemographyPayload, updateCampaignDemographyTargeting } from "@/services/campaign.service";
import { useParams } from "next/navigation";

export default function Demography() {

    const { state, dispatch } = useCampaign();
    const { showToast } = useToast();
    const { id } = useParams();




    console.log("Demography component rendered", state);

    function toggleField(
        e: React.ChangeEvent<HTMLInputElement>,
        field: "parental_statuses" | "genders" | "age_ranges" | "income_ranges"
    ) {

        const value = e.target.name;
        let demographyType: 'status' | 'gender' | 'ageRange' | 'incomeRange';
        let removedDemographyType: 'removedParentalStatus' | 'removedGenders' | 'removedAgeRanges' | 'removedIncomeRanges';
        let addedDemographyType: 'addedParentalStatuses' | 'addedGenders' | 'addedAgeRanges' | 'addedIncomeRanges';
        if (field == 'parental_statuses') {
            demographyType = 'status';
            removedDemographyType = 'removedParentalStatus';
            addedDemographyType = 'addedParentalStatuses';

        }
        else if (field == 'genders') {
            demographyType = 'gender';
            removedDemographyType = 'removedGenders';
            addedDemographyType = 'addedGenders';
        }
        else if (field == 'age_ranges') {
            demographyType = 'ageRange';
            removedDemographyType = 'removedAgeRanges';
            addedDemographyType = 'addedAgeRanges';
        }
        else if (field == 'income_ranges') {
            demographyType = 'incomeRange';
            removedDemographyType = 'removedIncomeRanges';
            addedDemographyType = 'addedIncomeRanges';
        } else {
            throw new Error('Invalid demography type')
        }

        const found = state[field].find((v: any) => v[demographyType] === value);

        let updated = [];
        let removeUpdateState = state[removedDemographyType];
        let addedUpdateState = state[addedDemographyType];

        if (found) {
            if (found.id) {
                console.log('removedDemographyType', removedDemographyType)
                removeUpdateState = [...state[removedDemographyType], found.id];
            }
            updated = state[field].filter((v: any) => v[demographyType] !== value);
            addedUpdateState = state[addedDemographyType].filter((d: string) => d != value);
        } else {
            updated = [...state[field], { [demographyType]: value }];
            addedUpdateState = [...state[addedDemographyType], value]

        }

        dispatch({
            type: "SET_FIELD",
            payload: { [field]: updated, [removedDemographyType]: removeUpdateState, [addedDemographyType]: addedUpdateState }
        });
    }

    async function handleDemographySave() {
        console.log("handle demography called", state);

        try {

            let payload: updateCampaignDemographyPayload = {
                addedParentalStatus: state.addedParentalStatuses,
                removedParentalStatus: state.removedParentalStatus,
                addedGenders: state.addedGenders,
                removedGenders: state.removedGenders,
                addedAgeRanges: state.addedAgeRanges,
                removedAgeRanges: state.removedAgeRanges,
                addedIncomeRanges: state.addedIncomeRanges,
                removedIncomeRanges: state.removedIncomeRanges
            };


            console.log("demo payload", payload);
            const apiResponse: any = await updateDemographyTargetingAction(id as unknown as number, payload);

            console.log("update demography targeting api res", apiResponse)

            if ((apiResponse as any)?.success) {
                showToast('Campaign demography targeting updated successfully', 'success');
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
        <div className="flex flex-col gap-6">

            <div className="grid grid-cols-4 gap-8 mb-6">

                {/* Parental Status */}
                <div className="flex flex-col gap-2">
                    <div className="text-[13px] mb-2 text-[#1E1E1E] font-medium">
                        Parental Status
                    </div>

                    <Checkbox
                        label="Not a Parent"
                        name="NOT_A_PARENT"
                        checked={Boolean(state.parental_statuses?.find(s => s.status == "NOT_A_PARENT"))}
                        onChange={(e) => toggleField(e, "parental_statuses")}
                    />

                    <Checkbox
                        label="Parent"
                        name="PARENT"
                        checked={Boolean(state.parental_statuses?.find(s => s.status == "PARENT"))}
                        onChange={(e) => toggleField(e, "parental_statuses")}
                    />

                    <Checkbox
                        label="Undetermined"
                        name="UNDETERMINED"
                        checked={Boolean(state.parental_statuses?.find(s => s.status == "UNDETERMINED"))}
                        onChange={(e) => toggleField(e, "parental_statuses")}
                    />



                </div>


                {/* Gender */}
                <div className="flex flex-col gap-2">
                    <div className="text-[13px] mb-2 text-[#1E1E1E] font-medium">
                        Gender
                    </div>

                    <Checkbox
                        label="Female"
                        name="FEMALE"
                        checked={Boolean(state.genders?.find(gender => gender.gender == "FEMALE"))}
                        onChange={(e) => toggleField(e, "genders")}
                    />

                    <Checkbox
                        label="Male"
                        name="MALE"
                        checked={Boolean(state.genders?.find(gender => gender.gender == "MALE"))}
                        onChange={(e) => toggleField(e, "genders")}
                    />

                    <Checkbox
                        label="Undetermined"
                        name="UNDETERMINED"
                        checked={Boolean(state.genders?.find(gender => gender.gender == "UNDETERMINED"))}
                        onChange={(e) => toggleField(e, "genders")}
                    />


                </div>


                {/* Age Range */}
                <div className="flex flex-col gap-2">
                    <div className="text-[13px] mb-2 text-[#1E1E1E] font-medium">
                        Age Range
                    </div>

                    <Checkbox
                        label="18 - 24"
                        name="AGE_RANGE_18_24"
                        checked={Boolean(state.age_ranges?.find(ageRange => ageRange.ageRange == "AGE_RANGE_18_24"))}
                        onChange={(e) => toggleField(e, "age_ranges")}
                    />

                    <Checkbox
                        label="25 - 34"
                        name="AGE_RANGE_25_34"
                        checked={Boolean(state.age_ranges?.find(ageRange => ageRange.ageRange == "AGE_RANGE_25_34"))}
                        onChange={(e) => toggleField(e, "age_ranges")}
                    />

                    <Checkbox
                        label="35 - 44"
                        name="AGE_RANGE_35_44"
                        checked={Boolean(state.age_ranges?.find(ageRange => ageRange.ageRange == "AGE_RANGE_35_44"))}
                        onChange={(e) => toggleField(e, "age_ranges")}
                    />

                    <Checkbox
                        label="45 - 54"
                        name="AGE_RANGE_45_54"
                        checked={Boolean(state.age_ranges?.find(ageRange => ageRange.ageRange == "AGE_RANGE_45_54"))}
                        onChange={(e) => toggleField(e, "age_ranges")}
                    />

                    <Checkbox
                        label="55 - 64"
                        name="AGE_RANGE_55_64"
                        checked={Boolean(state.age_ranges?.find(ageRange => ageRange.ageRange == "AGE_RANGE_55_64"))}
                        onChange={(e) => toggleField(e, "age_ranges")}
                    />

                    <Checkbox
                        label="65 and above"
                        name="AGE_RANGE_65_UP"
                        checked={Boolean(state.age_ranges?.find(ageRange => ageRange.ageRange == "AGE_RANGE_65_UP"))}
                        onChange={(e) => toggleField(e, "age_ranges")}
                    />

                </div>


                {/* Income Range */}
                <div className="flex flex-col gap-2">
                    <div className="text-[13px] mb-2 text-[#1E1E1E] font-medium">
                        Income Range
                    </div>

                    <Checkbox
                        label="0 - 50%"
                        name="INCOME_RANGE_0_50"
                        checked={Boolean(state.income_ranges?.find(incomeRange => incomeRange.incomeRange == "INCOME_RANGE_0_50"))}
                        onChange={(e) => toggleField(e, "income_ranges")}
                    />

                    <Checkbox
                        label="50 - 60%"
                        name="INCOME_RANGE_50_60"
                        checked={Boolean(state.income_ranges?.find(incomeRange => incomeRange.incomeRange == "INCOME_RANGE_50_60"))}
                        onChange={(e) => toggleField(e, "income_ranges")}
                    />

                    <Checkbox
                        label="60 - 70%"
                        name="INCOME_RANGE_60_70"
                        checked={Boolean(state.income_ranges?.find(incomeRange => incomeRange.incomeRange == "INCOME_RANGE_60_70"))}
                        onChange={(e) => toggleField(e, "income_ranges")}
                    />

                    <Checkbox
                        label="70 - 80%"
                        name="INCOME_RANGE_70_80"
                        checked={Boolean(state.income_ranges?.find(incomeRange => incomeRange.incomeRange == "INCOME_RANGE_70_80"))}
                        onChange={(e) => toggleField(e, "income_ranges")}
                    />

                    <Checkbox
                        label="80 - 90%"
                        name="INCOME_RANGE_80_90"
                        checked={Boolean(state.income_ranges?.find(incomeRange => incomeRange.incomeRange == "INCOME_RANGE_80_90"))}
                        onChange={(e) => toggleField(e, "income_ranges")}
                    />

                    <Checkbox
                        label="90 - 100%"
                        name="INCOME_RANGE_90_UP"
                        checked={Boolean(state.income_ranges?.find(incomeRange => incomeRange.incomeRange == "INCOME_RANGE_90_UP"))}
                        onChange={(e) => toggleField(e, "income_ranges")}
                    />
                </div>

            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleDemographySave}
                    className="px-4 py-2 bg-indigo-800 rounded-full text-white text-sm"
                >
                    Save
                </button>
            </div>
        </div>


    );
}