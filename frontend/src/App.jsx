import { useState } from 'react';
import Login from './components/Login';
import AnimalTabs from './components/AnimalTabs';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <AnimalTabs onLogout={() => setUser(null)} />
      ) : (
        <Login onLogin={(username) => setUser({ username })} />
      )}
    </div>
  );
}

export default App;
