import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomeUser from './components/WelcomeUser';
import { SidebarProvider } from './contexts/SidebarContext';
import MainContent from './pages/MainContent';
import CustomRouter from './components/CustomRouter';
import customHistory from './components/CustomRouter/history';
import { AuthContextProvider } from './contexts/AuthContextProvider';

import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <SidebarProvider>
        <div className="App">
          <CustomRouter history={customHistory}>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />

              <Route exact path="/mainContent/*" element={<MainContent />} />
              <Route exact path="/welcomeUser" element={<WelcomeUser />} />
            </Routes>
          </CustomRouter>
        </div>
      </SidebarProvider>
    </AuthContextProvider>
  );
}

export default App;
