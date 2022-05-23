import { Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import { AuthProvider } from './contexts/AuthContext';
import { EmpoloyeeContextProvider } from './contexts/EmployeeContext';
import LoginPage from './pages/LoginPage';
import MainContent from './pages/MainContent';
import Error from './pages/Error';
import Countries from './components/Countries';
// import Pending from './components/Pending';
import Cities from './components/Cities';
import Technologies from './components/Technologies';
// import Positions from './components/Positions';
import Projects from './components/Projects';
import PManagers from './components/PManagers';
import Admins from './components/Admins';
import AddNewEmployee from './components/AddNewEmployee';
import AllEmployees from './components/AllEmployees';
import Employees from './components/Employees';
import MyEmployees from './components/MyEmployees';
import AllProjects from './components/AllProjects';
import OrdinaryUser from './pages/OrindaryUser';
import CustomRouter from './components/CustomRouter';
import customHistory from './components/CustomRouter/history';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <EmpoloyeeContextProvider>
        <SidebarProvider>
          <div className="App">
            <CustomRouter history={customHistory}>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="mainContent" element={<MainContent />}>
                  {/* <Route path="pending" element={<Pending />} /> */}
                  <Route path="allemployees" element={<AllEmployees />} />
                  <Route
                    path="allemployees/newEmployee"
                    element={<AddNewEmployee />}
                  />
                  <Route path="technologies" element={<Technologies />} />
                  <Route path="countries" element={<Countries />} />
                  <Route path="cities" element={<Cities />} />
                  {/* <Route path="positions" element={<Positions />} /> */}
                  <Route path="projects" element={<Projects />} />
                  <Route path="pmanagers" element={<PManagers />} />
                  <Route path="admins" element={<Admins />} />
                  <Route path="employees" element={<Employees />} />
                  <Route path="myEmployees" element={<MyEmployees />} />
                  <Route path="allProjects" element={<AllProjects />} />
                </Route>
                <Route path="newuser" element={<OrdinaryUser />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </CustomRouter>
          </div>
        </SidebarProvider>
      </EmpoloyeeContextProvider>
    </AuthProvider>
  );
}

export default App;
