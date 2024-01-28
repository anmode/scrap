import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import ErrorPage from './pages/errorPage';
import InternProfilePage from './pages/internProfile/internProfile';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:username" element={<InternProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  );
}

export default App;