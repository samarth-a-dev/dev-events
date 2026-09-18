'use client';

import { useState } from 'react';

const BookEvent = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
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