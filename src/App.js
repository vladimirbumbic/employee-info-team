import { Routes, Route } from 'react-router-dom';
import { LoginContextProvider } from './contexts/LoginContext';
import LoginPage from './pages/LoginPage';
import { SidebarProvider } from './contexts/SidebarContext';
import MainContent from './pages/MainContent';
import './App.css';

function App() {
  return (
    <LoginContextProvider>
      <SidebarProvider>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />

            <Route exact path="/mainContent/*" element={<MainContent />} />
          </Routes>
        </div>
      </SidebarProvider>
    </LoginContextProvider>
  );
}

export default App;
