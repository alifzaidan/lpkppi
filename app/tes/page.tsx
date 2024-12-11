'use client';
import { FormEvent, useState } from 'react';

export default function page() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {
            name,
            email,
            phone,
        };

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });

        const content = await response.json();

        alert(content);

        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="phone">phone:</label>
                <input type="number" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
