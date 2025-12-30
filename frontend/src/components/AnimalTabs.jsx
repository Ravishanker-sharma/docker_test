import '../index.css';
import { useState, useEffect } from 'react';

const ANIMALS = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra'];

export default function AnimalTabs({ onLogout }) {
    const [activeTab, setActiveTab] = useState(ANIMALS[0]);
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFact(activeTab);
    }, [activeTab]);

    const fetchFact = async (animal) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/facts/${animal}`);
            const data = await response.json();
            setFact(data.fact);
        } catch (err) {
            setFact('Failed to load fact.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2>Animal Facts</h2>
                <button onClick={onLogout} style={{ backgroundColor: '#ff4757' }}>Log Out</button>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {ANIMALS.map(animal => (
                    <button
                        key={animal}
                        onClick={() => setActiveTab(animal)}
                        style={{
                            backgroundColor: activeTab === animal ? '#646cff' : '#1a1a1a',
                            borderColor: activeTab === animal ? '#646cff' : 'transparent'
                        }}
                    >
                        {animal}
                    </button>
                ))}
            </div>

            <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {loading ? (
                    <p>Loading interesting fact...</p>
                ) : (
                    <div>
                        <h3>{activeTab}</h3>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>{fact}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
