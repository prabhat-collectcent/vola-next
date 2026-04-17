'use client';

import { useCampaign } from "@/app/admin/campaign/create/context/CampaignContext";
import { useEffect, useState, useRef } from "react";
import Text from '@/components/admin/form/fields/Text';
import { getCountryListAction } from "@/actions/metadata.actions";
import { useToast } from "@/components/toast/ToastProvider";

type Country = {
    name: string;
    countryCode: string;
}

export default function CountrySearchBox() {

    const { showToast } = useToast();
    const [query, setQuery] = useState("");

    const [isCountryClicked, setIsCountryClicked] = useState(false);

    const { state, dispatch } = useCampaign();
    const [countryList, setCountryList] = useState<Country[]>([]);

    const normalizedQuery = query.trim().toLowerCase();

    const filteredCountries = !normalizedQuery
        ? countryList
        : countryList
            .filter((loc) =>
                loc.name.toLowerCase().includes(normalizedQuery)
            )
            .sort((a, b) => {
                const aStarts = a.name.toLowerCase().startsWith(normalizedQuery);
                const bStarts = b.name.toLowerCase().startsWith(normalizedQuery);
                return Number(bStarts) - Number(aStarts);
            });



    const selected: any = state.countries || [];

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsCountryClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    useEffect(() => {
        async function fetchCountryList() {
            try {
                const result: any = await getCountryListAction();
                if (result.success) {
                    const mappedCountries = Object.entries(result.data).map(([countryCode, name]) => ({ countryCode, name: name as string }))
                    setCountryList(mappedCountries);
                }

            } catch (error) {
                showToast('Failed to fetch country list', 'error');
            }

        }
        fetchCountryList();
    }, [])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);

    }


    const addLocation = (loc: Country) => {
        const foundCountry = selected?.find((l: any) => l.name === loc.name);
        if (!foundCountry) {
            dispatch({
                type: "SET_FIELD",
                payload: {
                    'countries': [
                        ...selected,
                        {
                            name: loc.name, countryCode: loc.countryCode
                        },
                    ],
                },
            });
        }
        setQuery("");
        setIsCountryClicked(false);
    };

    const removeLocation = (loc: Country) => {
        dispatch({
            type: "SET_FIELD",
            payload: {
                'countries': selected.filter((l: any) => l.name !== loc.name),
            },
        });
    };





    return (
        <div className="mb-6" ref={containerRef}>
            {/* Input */}
            <div className="relative">
                <Text
                    name="countrySearch"
                    label="Search country"
                    value={query}
                    onChange={handleChange}
                    onClick={() => setIsCountryClicked(true)}
                    placeholder="Search Country"
                />

                {/* Suggestions */}
                {(query.length > 0 || isCountryClicked) && (<div className="absolute z-20 mt-1 w-50 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
                    {filteredCountries.map((loc) => (
                        <div
                            key={loc.countryCode}
                            onClick={() => addLocation(loc)}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                        >
                            {loc.name}
                        </div>
                    ))}
                </div>)}

            </div>

            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selected.map((loc: Country) => (
                    <div
                        key={loc.countryCode}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                        {loc.name}

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