import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/:username" element={<InternProfilePage />} />
    </Routes>
  </Router>
  );
}

export default App;
