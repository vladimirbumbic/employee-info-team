import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { SidebarProvider } from './contexts/SidebarContext';
import MainContent from './pages/MainContent';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* Ruta za obicnog usera */}
      {/* <Route path="/user" element={<UserPage />} />}

        // <Route path="/adminpm" element={<AdminPmPage />} /> */}
      <Routes>
        <Route exact path="/" element={<LoginPage />} />

        <Route exact path="/mainContent/*" element={<MainContent />} />
      </Routes>

      {/*   <Route path="/projectm" element={<PMPage />} /> */}
    </div>
  );
}

export default App;
