'use client';

import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import { useEffect, useState } from "react";
import Text from '@/components/admin/form/fields/Text';
import { searchLocationAction } from "@/actions/metadata.actions";

type Props = {
    title: string;
    type: "include" | "exclude";
    countryCodes: string[];
};


export default function LocationSearchBox({ title, type, countryCodes }: Props) {
    const [query, setQuery] = useState("");

    const [errors, setError] = useState<any>({});



    const { state, dispatch } = useCampaign();
    const [foundLocations, setFoundLocations] = useState<any[]>([]);


    console.log("Rendered with state: ", state);
    console.log("found locations", foundLocations);


    const selected = type === "include" ? state.geo_include : state.geo_exclude;

    let filtered: any[] = [];

    useEffect(() => {
        async function fetchLocations() {
            if (query.length < 2) {
                setFoundLocations([]);
                return;
            }

            const res: any = await searchLocationAction(query, {
                country_codes: countryCodes,
            });
            console.log("response loc", res)

            setFoundLocations(res.data || []);
        }

        fetchLocations();
    }, [query, countryCodes]);

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);

        // console.log("query values", query, countryCodes)

        // // filtered = query.length < 2 ? [] : mockLocations.filter((loc) => loc.toLowerCase().includes(query.toLowerCase()));
        // const locationSearchResult = query.length < 2 ? {} : await searchLocationAction(value, { country_codes: countryCodes });
        // // @ts-ignore
        // setFoundLocations(locationSearchResult.geoTargetConstantSuggestions || []);

        // console.log('filtered value', locationSearchResult)
    }

    type Location = {
        canonicalName: string;
        geoTargetConstant: string;
        source: 'api' | 'file';
    }

    const addLocation = (loc: any) => {
        const foundLoc = selected.find((l) => l.geoTargetConstant === loc.resourceName);
        console.log('foundLoc', foundLoc, selected);
        if (!foundLoc) {

            dispatch({
                type: "SET_FIELD",
                payload: {
                    [type === "include" ? "geo_include" : "geo_exclude"]: [
                        ...selected,
                        {
                            source: 'api',
                            canonicalName: loc.canonicalName,
                            geoTargetConstant: loc.resourceName,
                        },
                    ],
                },
            });

            dispatch({
                type: "SET_FIELD",
                payload: {
                    [type === "include" ? "added_geo_include" : "added_geo_exclude"]: [
                        ...state[type === "include" ? "added_geo_include" : "added_geo_exclude"],
                        {
                            source: 'api',
                            canonicalName: loc.canonicalName,
                            geoTargetConstant: loc.resourceName,
                        },
                    ],
                },
            });
        }
        setQuery("");
        setFoundLocations([]);
    };

    const removeLocation = (loc: any) => {

        if (loc.id) {
            state.deleted_geo.push(loc.id);
        }
        console.log("location for remove", loc)
        dispatch({
            type: "SET_FIELD",
            payload: {
                [type === "include" ? "geo_include" : "geo_exclude"]: selected.filter((l: Location) => l.geoTargetConstant !== loc.geoTargetConstant),
            },
        });
    };

    const handleCSVUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setError({ ...errors, loc: '' });

        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.name.endsWith(".csv")) {
            setError({ ...errors, loc: "Only CSV files are allowed." });
            return;
        }

        try {
            const text = await file.text();

            const rows = text
                .split("\n")
                .map((r) => r.trim())
                .filter(Boolean);

            if (rows.length === 0) {
                setError({ ...errors, loc: "CSV file is empty." });
                return;
            }

            if (rows.length > 500) {
                setError({ ...errors, loc: "Maximum 500 locations allowed in CSV." });
                return;
            }

            const [header, ...dataRows] = rows;

            if (!header.toLowerCase().includes("location")) {
                setError({ ...errors, loc: "CSV must have 'Location' as header." });
                return;
            }
            const parsedLocations = dataRows.map((name) => ({
                canonicalName: name,
                source: "file",
            }));

            const unique = parsedLocations.filter((csvLoc) =>
                !selected.some((s) => s.canonicalName.toLowerCase() === csvLoc.canonicalName.toLowerCase())
            );

            if (unique.length === 0) {
                setError({ ...errors, loc: "All locations already exist." });
                return;
            }

            dispatch({
                type: "SET_FIELD",
                payload: {
                    [type === "include" ? "geo_include" : "geo_exclude"]: [
                        ...selected,
                        ...unique,
                    ],
                },
            });

            dispatch({
                type: "SET_FIELD",
                payload: {
                    [type === "include" ? "added_geo_include" : "added_geo_exclude"]: [
                        ...unique,
                    ],
                },
            });

        } catch (err) {
            setError("Failed to parse CSV file.");
        }
    };

    const downloadSampleCSV = () => {
        const sampleData = [
            'Location',
            "Delhi",
            "Mumbai",
            "Bangalore",
            "Chennai",
            "Kolkata",
        ];

        const csvContent = sampleData.join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "sample_locations.csv");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };

    console.log("found location updated", foundLocations);
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

                <div className="flex items-center gap-1 mb-2 mt-4">
                    <label className="text-[13px] text-[#1E1E1E]">
                        Chose file
                    </label>

                    <button
                        type="button"
                        onClick={downloadSampleCSV}
                        className="text-xs text-blue-600 hover:underline"
                    >
                        (Download CSV sample)
                    </button>
                </div>


                <div className="mt-4">
                    <Text
                        // label="Chose file"
                        name="Chose file"
                        type="file"
                        accept=".csv"
                        onChange={handleCSVUpload}
                        className="mt-2 block w-full text-sm text-gray-500"
                        error={errors.loc}
                    />
                </div>


                {/* Suggestions */}
                {foundLocations.length > 0 && (
                    <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
                        {foundLocations.map((loc) => (
                            <div
                                key={loc.resourceName}
                                onClick={() => addLocation(loc)}
                                className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                            >
                                {loc.canonicalName}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selected.map((loc: Location) => (
                    <div
                        key={loc.geoTargetConstant || loc.canonicalName}
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