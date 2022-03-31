import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import { SidebarProvider } from './contexts/SidebarContext';
import MainContent from './pages/MainContent';
import { AuthProvider } from './contexts/authContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />

            <Route exact path="/mainContent/*" element={<MainContent />} />
          </Routes>
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
