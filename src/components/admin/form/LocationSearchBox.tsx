'use client';

import { useCampaign } from "@/app/admin/campaign/create/context/CampaignContext";
import { useState } from "react";
import Text from '@/components/admin/form/fields/Text';
import { searchLocationAction } from "@/actions/metadata.actions";

type Props = {
    title: string;
    type: "include" | "exclude";
};

export default function LocationSearchBox({ title, type }: Props) {
    const [query, setQuery] = useState("");

    const { state, dispatch } = useCampaign();
    const [foundLocations, setFoundLocations] = useState<any[]>([]);


    console.log("Rendered with state: ", state);
    console.log("found locations", foundLocations);


    const selected = type === "include" ? state.geo_include : state.geo_exclude;

    const mockLocations = [
        "Delhi, IN",
        "Mumbai, IN",
        "Bangalore, IN",
        "New York, US",
        "London, UK",
        "California, US",
    ];

    let filtered: any[] = [];
    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);

        console.log("query value", query)

        // filtered = query.length < 2 ? [] : mockLocations.filter((loc) => loc.toLowerCase().includes(query.toLowerCase()));
        const locationSearchResult = query.length < 2 ? {} : await searchLocationAction({ query: value });
        // @ts-ignore
        setFoundLocations(locationSearchResult.geoTargetConstantSuggestions || []);

        console.log('filtered value', filtered)
    }

    type Location = {
        canonicalName: string;
        geoTargetConstant: string;
    }

    const addLocation = (loc: any) => {
        const foundLoc = selected.find((l) => l.geoTargetConstant === loc.geoTargetConstant.resourceName);
        console.log(foundLoc)
        if (!foundLoc) {

            dispatch({
                type: "SET_FIELD",
                payload: {
                    [type === "include" ? "geo_include" : "geo_exclude"]: [
                        ...selected,
                        {
                            canonicalName: loc.geoTargetConstant.canonicalName,
                            geoTargetConstant: loc.geoTargetConstant.resourceName,
                        },
                    ],
                },
            });
        }
        setQuery("");
        setFoundLocations([]);
    };

    const removeLocation = (loc: any) => {
        console.log("location for remove", loc)
        dispatch({
            type: "SET_FIELD",
            payload: {
                [type === "include" ? "geo_include" : "geo_exclude"]: selected.filter((l: Location) => l.geoTargetConstant !== loc.geoTargetConstant),
            },
        });
    };

    return (
        <div className="mb-6">


            {/* Input */}
            <div className="relative">
                <Text
                    name="locationSearch"
                    label={title}
                    value={query}
                    onChange={handleChange}
                    placeholder={
                        type === "include"
                            ? "Search location to include"
                            : "Search location to exclude"
                    }
                />

                {/* Suggestions */}
                {foundLocations.length > 0 && (
                    <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
                        {foundLocations.map((loc) => (
                            <div
                                key={loc.geoTargetConstant.resourceName}
                                onClick={() => addLocation(loc)}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                            >
                                {loc.geoTargetConstant.canonicalName}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selected.map((loc: Location) => (
                    <div
                        key={loc.geoTargetConstant}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                        {loc.canonicalName}

                        <button
                            type="button"
                            onClick={() => removeLocation(loc)}
                            className="ml-2 text-gray-500 hover:text-red-500"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}