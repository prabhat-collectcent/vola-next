'use client';

import { useEffect, useState } from "react";
import { useCampaign } from "@/app/admin/campaign/edit/[id]/context/CampaignContext";
import { getMobileCarrersAction } from "@/actions/metadata.actions";
import { Carrier } from "@/app/admin/campaign/create/context/types";
import { useToast } from "@/components/toast/ToastProvider";

export default function CarrierBox() {
    const { state, dispatch } = useCampaign();
    const [carriers, setCarriers] = useState<Carrier[]>([])
    const selectedCarriers = state.mobile_carriers || [];
    //this state is for tracking wheather a carrier that is being added was removed earlier, if so we'll not send that
    //  in addedCarriers array due to duplicate carrier creation 
    const [removedCarriersTracking, setRemovedCarriersTracking] = useState<Carrier[]>([]);

    const { showToast } = useToast();

    const [open, setOpen] = useState(false);
    const [tempSelected, setTempSelected] = useState<any[]>(selectedCarriers.map((c: any) => {
        return {
            id: c.constantId?.toString(),
            name: c.name,
            countryCode: c.country_code,
            resourceName: c.resourceName,
            db_id: c.id,
        }

    }));
    console.log("Carrier Box component rendered", state);

    useEffect(() => {
        async function fetchCarriers() {
            const fetchedCarriers = await getMobileCarrersAction();
            if (fetchedCarriers.success) {
                console.log("fetched carriers", fetchedCarriers);
                // @ts-ignore
                setCarriers(fetchedCarriers.data.map((carrier) => ({
                    id: carrier.google_id,
                    name: carrier.name,
                    countryCode: carrier.country_code,
                    resourceName: carrier.google_resource_name,
                })));
            } else {
                showToast(fetchedCarriers.message || 'Failed to fetch carrier data', 'error');
            }
        }
        fetchCarriers();
    }, []);

    function toggleCarrier(carrier: Carrier) {
        console.log("toggle carrier", carrier, tempSelected);

        const foundCarrier = tempSelected.find((c) => c.id == carrier.id);
        console.log("found carrier", foundCarrier);

        if (foundCarrier) {
            console.log("removing carrier: ", carrier, removedCarriersTracking, state.addedCarriers, state.removedCarriers);
            setTempSelected(tempSelected.filter((c) => c.id != carrier.id));
            setRemovedCarriersTracking([...removedCarriersTracking, carrier]);

            let updatedRemoveState = [...state.removedCarriers, carrier.db_id]
            dispatch({
                type: "SET_FIELD",
                payload: {
                    // @ts-ignore
                    removedCarriers: updatedRemoveState
                },
            });
        } else {

            setTempSelected([...tempSelected, carrier]);
            console.log("adding carrier: ", carrier, removedCarriersTracking, state.addedCarriers, state.removedCarriers);
            const foundInRemoved = removedCarriersTracking.find(c => c.resourceName == carrier.resourceName && carrier.db_id);
            console.log("found in removed", foundInRemoved);
            if (foundInRemoved) {

                setRemovedCarriersTracking(removedCarriersTracking.filter(c => c.id !== carrier.id));

                let updatedRemoveState = state.removedCarriers.filter(id => carrier.db_id != id);
                dispatch({
                    type: "SET_FIELD",
                    payload: {
                        // @ts-ignore
                        removedCarriers: updatedRemoveState
                    },
                });

            } else {
                dispatch({
                    type: "SET_FIELD",
                    payload: {
                        addedCarriers: [...state.addedCarriers, carrier.resourceName],
                    },
                });
            }


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

        let updatedRemoveState = [...state.removedCarriers, carrier.id]
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
                                        checked={Boolean(tempSelected.find(c => c.id == carrier.id))}
                                        onChange={() => {
                                            const existing = tempSelected.find(c => c.id == carrier.id);
                                            if (existing) {
                                                toggleCarrier({ ...carrier, db_id: existing.db_id })
                                            } else {
                                                const existingInOriginlCarrier = selectedCarriers.find(c => c.constantId.toString() == carrier.id);
                                                if (existingInOriginlCarrier) {
                                                    toggleCarrier({ ...carrier, db_id: Number(existingInOriginlCarrier.id) })

                                                } else {
                                                    toggleCarrier(carrier)
                                                }
                                            }
                                        }
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