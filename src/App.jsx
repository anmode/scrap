import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import ErrorPage from './pages/errorPage';
import InternProfilePage from './pages/internProfile/internProfile';
import InternsPage from './pages/internsPage/internsPage';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:username" element={<InternProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/interns" element={<InternsPage />} />
    </Routes>
  </Router>
  );
}

export default App;