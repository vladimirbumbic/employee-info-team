import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { SidebarProvider } from './contexts/SidebarContext';
import MainContent from './pages/MainContent';
import CustomRouter from './components/CustomRouter';
import customHistory from './components/CustomRouter/history';
import './App.css';

function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <CustomRouter history={customHistory}>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />

            <Route exact path="/mainContent/*" element={<MainContent />} />
          </Routes>
        </CustomRouter>
      </div>
    </SidebarProvider>
  );
}

export default App;
