import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import ErrorPage from './pages/errorPage';
import InternProfilePage from './pages/internProfile/internProfile';
import InternsPage from './pages/internsPage/internsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/interns/2024" element={<LandingPage />} />
        <Route path="/interns/2024/:username" element={<InternProfilePage />} />
        <Route path="/interns/2024/allInterns" element={<InternsPage />} />
        <Route path="*" element={<Navigate to="/interns/2024" />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;