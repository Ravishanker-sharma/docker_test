import { useState } from 'react';
import '../index.css';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            await response.json(); // Don't really need the token for now
            onLogin(username);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="glass-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h1>Welcome Back</h1>
            <p>Please log in to continue</p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input
                    type="text"
                    placeholder="Username (user)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password (password)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
            {error && <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>{error}</p>}
        </div>
    );
}
