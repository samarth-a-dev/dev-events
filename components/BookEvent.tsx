'use client';

import { useState } from 'react';
import { createBooking } from '@/lib/actions/booking.actions';
import posthog from "posthog-js";

const BookEvent = ({ eventId, slug }: { eventId: string, slug: string }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const { success } = await createBooking({ eventId, slug, email});

        if (success) {
            setSubmitted(true);
            posthog.capture('event_booked', { eventId, slug, email });
        } else {
            console.error('Booking creation failed');
            posthog.captureException('Booking creation failed');
        }

        
    }


    return (
        <div id="book-event">
            {submitted ? (
                <p className="text-sm">Thank you for signing up!</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex-col-gap-2">
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            id='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button type="submit" className="button-submit">Submit</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default BookEvent