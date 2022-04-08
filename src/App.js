import { Routes, Route } from 'react-router-dom';
import { SidebarProvider } from './contexts/SidebarContext';
import LoginPage from './pages/LoginPage';
import MainContent from './pages/MainContent';
import Error from './pages/Error';
import CustomRouter from './components/CustomRouter';
import customHistory from './components/CustomRouter/history';
import './App.css';

function App() {
  return (
    <SidebarProvider>
      <div className="App">
        <CustomRouter history={customHistory}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="mainContent" element={<MainContent />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CustomRouter>
      </div>
    </SidebarProvider>
  );
}

export default App;
