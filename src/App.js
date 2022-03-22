import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import AdminPmPage from './pages/AdminPMPage';
import { SidebarProvider } from './contexts/SidebarContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <SidebarProvider>
        <Routes>
          {/* Ruta za obicnog usera */}
          <Route path="/user" element={<UserPage />} />

          <Route path="/adminpm" element={<AdminPmPage />} />
          {/*   <Route path="/projectm" element={<PMPage />} /> */}
        </Routes>
      </SidebarProvider>
    </div>
  );
}

export default App;
