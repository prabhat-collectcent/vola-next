'use client';

import { useEffect, useState } from "react";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import { getMobileCarrersAction } from "@/actions/metadata.actions";
import { Carrier } from "@/app/admin/campaign/create/context/types";

export default function CarrierBox() {
    const { state, dispatch } = useCampaign();
    const [carriers, setCarriers] = useState<Carrier[]>([])
    const selectedCarriers = state.mobile_carriers || [];

    const [open, setOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState<Carrier[]>(selectedCarriers);
    console.log("Carrier Box component rendered", state);

    useEffect(() => {
        async function fetchCarriers() {
            const fetchedCarriers = await getMobileCarrersAction();
            // @ts-ignore
            setCarriers(fetchedCarriers.data.map((carrier) => ({
                id: carrier.google_id,
                name: carrier.name,
                countryCode: carrier.country_code,
                resourceName: carrier.google_resource_name,
            })));
        }
        fetchCarriers();
    }, []);

    function toggleCarrier(carrier: Carrier) {

        const foundCarrier = tempSelected.find((c) => c.id === carrier.id);
        if (foundCarrier) {
            setTempSelected(tempSelected.filter((c) => c.id !== carrier.id));
        } else {
            setTempSelected([...tempSelected, carrier]);
        }
    }

    function applySelection() {
        dispatch({
            type: "SET_FIELD",
            payload: {
                mobile_carriers: tempSelected,
            },
        });

        setOpen(false);
    }

    function removeCarrier(carrier: Carrier) {

        let updatedRemoveState = [ ...state.removedCarriers, carrier.id]
        dispatch({
            type: "SET_FIELD",
            payload: {
                mobile_carriers: selectedCarriers.filter((c: Carrier) => c.id != carrier.id),
                // @ts-ignore
                removedCarriers: updatedRemoveState
            },
        });
    }

    return (
        <div className="mb-6">
            {/* Label */}
            <div className="text-[13px] mb-2 text-[#1E1E1E]">Select Carriers</div>

            {/* Link */}
            {selectedCarriers.length === 0 ? (
                <button
                    onClick={() => setOpen(true)}
                    className="text-[#4144E6] text-sm underline"
                >
                    All carriers
                </button>
            ) : (
                <div className="flex flex-wrap gap-2">
                    {selectedCarriers.map((carrier: Carrier) => {
                        // const foundcarrier = carriers.find((c) => c.id === carrier.id);
                        // if (!foundcarrier) return null;

                        return (
                            //  text-[13px] mb-[8px] text-[#1E1E1E]
                            <div
                                key={carrier.id}
                                className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                            >
                                {carrier.name}

                                <button
                                    onClick={() => removeCarrier(carrier)}
                                    className="ml-2 text-gray-500 hover:text-red-500"
                                >
                                    ×
                                </button>
                            </div>
                        );
                    })}

                    <button
                        onClick={() => setOpen(true)}
                        className="text-[#4144E6] text-sm underline"
                    >
                        Edit
                    </button>
                </div>
            )}

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl w-[400px] p-6 shadow-lg">
                        <div className="text-medium mb-4 font-medium">Select Carriers</div>

                        <div className="flex flex-col gap-3 max-h-[250px] overflow-auto">
                            {carriers.map((carrier) => (
                                <label
                                    key={carrier.id}
                                    className="flex items-center gap-3 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        // @ts-ignore
                                        checked={  Boolean(tempSelected.find(c => c.constantId == carrier.id))}
                                        onChange={() => toggleCarrier(carrier)

                                        }
                                    />

                                    <span className="text-[13px] font-normal text-[#1E1E1E]">
                                        {carrier.name} ({carrier.countryCode})
                                    </span>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 text-sm border rounded-md"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={applySelection}

                                className="px-4 py-2 bg-[#4144E6] text-white rounded-md text-sm"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}