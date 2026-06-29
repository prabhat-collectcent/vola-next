import { useCampaign } from '@/app/admin/campaign/create/context/CampaignContext';
import Text from '@/components/admin/form/fields/Text';
import { useState } from 'react';

export default function EventBox() {
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

        dispatch({
            type: "SET_FIELD",
            payload: {
                events: [...selectedEvents, ...events],
            },
        });

        setEvent("");
    }

    function removeEvent(event: string) {
        dispatch({
            type: "SET_FIELD",
            payload: {
                events: selectedEvents.filter((i: string) => i !== event),
            },
        });
    }

    return (
        <div className="mb-6">

            <div className="relative">
                <Text
                    name="events"
                    label="Events"
                    value={event}
                    onChange={handleChange}
                    onKeyDown={addEvent}
                    error={error}
                    placeholder="Enter events (comma separated) and press Enter"
                />
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-3">
                {selectedEvents.map((ip) => (
                    <div
                        key={ip}
                        className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                        {ip}
                        <button
                            type="button"
                            onClick={() => removeEvent(ip)}
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