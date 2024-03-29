import { Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import MainContent from './pages/MainContent';
import Error from './pages/Error';
import Countries from './components/Countries';
import Pending from './components/Pending';
import Cities from './components/Cities';
import Seniorities from './components/Seniorities';
import Positions from './components/Positions';
import Projects from './components/Projects';
import AllEmployees from './components/AllEmployees';
import PManagers from './components/PManagers';
import Admins from './components/Admins';
import OrdinaryUser from './pages/OrindaryUser';
import CustomRouter from './components/CustomRouter';
import customHistory from './components/CustomRouter/history';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <div className="App">
          <CustomRouter history={customHistory}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="mainContent" element={<MainContent />}>
                <Route path="pending" element={<Pending />} />
                <Route path="employees" element={<AllEmployees />} />
                <Route path="seniorities" element={<Seniorities />} />
                <Route path="countries" element={<Countries />} />
                <Route path="cities" element={<Cities />} />
                <Route path="positions" element={<Positions />} />
                <Route path="projects" element={<Projects />} />
                <Route path="pmanagers" element={<PManagers />} />
                <Route path="admins" element={<Admins />} />
              </Route>
              <Route path="newuser" element={<OrdinaryUser />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </CustomRouter>
        </div>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
