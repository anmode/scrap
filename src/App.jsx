// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/sharedLayout/sharedlayout';
import LandingPage from './pages/LandingPage/index';
import ErrorPage from './pages/errorPage';
import InternProfilePage from './pages/internProfile/internProfile';
import InternsPage from './pages/internsPage/internsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes path="/interns/2024" element={<SharedLayout />} >
          <Route index element={<LandingPage />} />
          <Route path=":username" element={<InternProfilePage />} />
          <Route path="allInterns" element={<InternsPage />} />
        </Routes>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
