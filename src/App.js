import { Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import { SidebarProvider } from './contexts/SidebarContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <SidebarProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/*   <Route path="/projectm" element={<PMPage />} /> */}
        </Routes>
      </SidebarProvider>
    </div>
  );
}

export default App;
