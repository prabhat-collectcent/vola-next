'use client';

import { useCampaign } from "@/app/admin/campaign/create/context/CampaignContext";
import Checkbox from "./fields/Checkbox";

export default function Demography() {

    const { state, dispatch } = useCampaign();

    console.log("Demography component rendered", state);

    function toggleField(
        e: React.ChangeEvent<HTMLInputElement>,
        field: "parental_statuses" | "genders" | "age_ranges" | "income_ranges"
    ) {

        const value = e.target.name;

        const found = state[field].find((v: string) => v === value);

        let updated = [];

        if (found) {
            updated = state[field].filter((v: string) => v !== value);
        } else {
            updated = [...state[field], value];
        }

        dispatch({
            type: "SET_FIELD",
            payload: { [field]: updated }
        });
    }

    return (
        <div className="grid grid-cols-4 gap-8 mb-6">

            {/* Parental Status */}
            <div className="flex flex-col gap-2">
                <div className="text-[13px] mb-2 text-[#1E1E1E] font-medium">
                    Parental Status
                </div>

                <Checkbox
                    label="Not a Parent"
                    name="NOT_A_PARENT"
                    checked={Boolean(state.parental_statuses?.includes("NOT_A_PARENT"))}
                    onChange={(e) => toggleField(e, "parental_statuses")}
                />

                <Checkbox
                    label="Parent"
                    name="PARENT"
                    checked={Boolean(state.parental_statuses?.includes("PARENT"))}
                    onChange={(e) => toggleField(e, "parental_statuses")}
                />

                <Checkbox
                    label="Undetermined"
                    name="UNDETERMINED"
                    checked={Boolean(state.parental_statuses?.includes("UNDETERMINED"))}
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
                    checked={Boolean(state.genders?.includes("FEMALE"))}
                    onChange={(e) => toggleField(e, "genders")}
                />

                <Checkbox
                    label="Male"
                    name="MALE"
                    checked={Boolean(state.genders?.includes("MALE"))}
                    onChange={(e) => toggleField(e, "genders")}
                />

                 <Checkbox
                    label="Undetermined"
                    name="UNDETERMINED"
                    checked={Boolean(state.genders?.includes("UNDETERMINED"))}
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
                    checked={Boolean(state.age_ranges?.includes("AGE_RANGE_18_24"))}
                    onChange={(e) => toggleField(e, "age_ranges")}
                />

                <Checkbox
                    label="25 - 34"
                    name="AGE_RANGE_25_34"
                    checked={Boolean(state.age_ranges?.includes("AGE_RANGE_25_34"))}
                    onChange={(e) => toggleField(e, "age_ranges")}
                />

                <Checkbox
                    label="35 - 44"
                    name="AGE_RANGE_35_44"
                    checked={Boolean(state.age_ranges?.includes("AGE_RANGE_35_44"))}
                    onChange={(e) => toggleField(e, "age_ranges")}
                />

                <Checkbox
                    label="45 - 54"
                    name="AGE_RANGE_45_54"
                    checked={Boolean(state.age_ranges?.includes("AGE_RANGE_45_54"))}
                    onChange={(e) => toggleField(e, "age_ranges")}
                />

                <Checkbox
                    label="55 - 64"
                    name="AGE_RANGE_55_64"
                    checked={Boolean(state.age_ranges?.includes("AGE_RANGE_55_64"))}
                    onChange={(e) => toggleField(e, "age_ranges")}
                />

                 <Checkbox
                    label="65 and above"
                    name="AGE_RANGE_65_UP"
                    checked={Boolean(state.age_ranges?.includes("AGE_RANGE_65_UP"))}
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
                    checked={Boolean(state.income_ranges?.includes("INCOME_RANGE_0_50"))}
                    onChange={(e) => toggleField(e, "income_ranges")}
                />

                <Checkbox
                    label="50 - 60%"
                    name="INCOME_RANGE_50_60"
                    checked={Boolean(state.income_ranges?.includes("INCOME_RANGE_50_60"))}
                    onChange={(e) => toggleField(e, "income_ranges")}
                />

                <Checkbox
                    label="60 - 70%"
                    name="INCOME_RANGE_60_70"
                    checked={Boolean(state.income_ranges?.includes("INCOME_RANGE_60_70"))}
                    onChange={(e) => toggleField(e, "income_ranges")}
                />

                <Checkbox
                    label="70 - 80%"
                    name="INCOME_RANGE_70_80"
                    checked={Boolean(state.income_ranges?.includes("INCOME_RANGE_70_80"))}
                    onChange={(e) => toggleField(e, "income_ranges")}
                />

                <Checkbox
                    label="80 - 90%"
                    name="INCOME_RANGE_80_90"
                    checked={Boolean(state.income_ranges?.includes("INCOME_RANGE_80_90"))}
                    onChange={(e) => toggleField(e, "income_ranges")}
                />

                  <Checkbox
                    label="90 - 100%"
                    name="INCOME_RANGE_90_UP"
                    checked={Boolean(state.income_ranges?.includes("INCOME_RANGE_90_100"))}
                    onChange={(e) => toggleField(e, "income_ranges")}
                />
            </div>

        </div>
    );
}