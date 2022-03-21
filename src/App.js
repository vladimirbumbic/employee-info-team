import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Ruta za obicnog usera */}
                {/* <Route path="/user" element={<UserPage />} /> */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                <Route path="/adminPage" element={<AdminPage />} />

                {/* <Route path="/admin" element={<AdminPage />} />
                <Route path="/projectm" element={<PMPage />} /> */}
            </Routes>
        </div>
    );
}

export default App;
