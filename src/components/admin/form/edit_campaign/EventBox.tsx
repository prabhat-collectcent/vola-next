import { useCampaign } from '@/app/admin/campaign/edit/[id]/context/CampaignContext';
import Text from '@/components/admin/form/fields/Text';
import { useState } from 'react';

export default function IpExclusionBox() {
    const [event, setEvent] = useState("");
    const [error, setError] = useState("");

    const { state, dispatch } = useCampaign();

    const selectedEvents = state.events || [];


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setEvent(e.target.value);
    }

    function addEvent(e: React.KeyboardEvent<HTMLInputElement>) {

        if (e.key !== "Enter") return;

        const raw = event.trim();
        if (!raw) return;

        const events = raw.split(",").map(i => i.trim()).filter(Boolean);

        const invalidEvent = events.find(event => event.length < 3);

        if(invalidEvent) {
            setError("Invalid event found, event name should of atleast 2 characters");
            return;
        }

        let updatedAddedEvents = [...state.added_events, ...events];

        dispatch({
            type: "SET_FIELD",
            payload: {
                events: [...selectedEvents, ...events.map(event => {
                    return { name: event }

                })],
                 added_events: updatedAddedEvents,
            },
        });
        setEvent("");
        setError("");
    }

    function removeIp(event: any) {
        console.log("remove ip called", selectedEvents)
        let updateRemovedEvents = [...state.deleted_events, event.id]
        dispatch({
            type: "SET_FIELD",
            payload: {
                deleted_events: updateRemovedEvents,
                events: selectedEvents.filter((currentEvent) => currentEvent.name != event.name)
            },
        });
    }

    return (
        <div className="mb-6">


            {/* Input */}
            <div className="relative">
                <Text
                    name="events"
                    label="Events"
                    value={event}
                    onChange={handleChange}
                    onKeyDown={addEvent}
                    error={error}
                    placeholder="Enter events and press enter to add"
                />
            </div>

            {/* Selected Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selectedEvents.map((event) => (
                    <div
                        key={event.name}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                        {event.name}

                        <button
                            type="button"
                            onClick={() => removeIp(event)}
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