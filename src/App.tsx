import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ErrorPage from "./pages/error/errorPage";
import LandingPage from "./pages/LandingPage/index";
import InternProfilePage from "./pages/internProfile/internProfile";
import InternsPage from "./pages/internsPage/internsPage";
import SharedLayout from "./pages/sharedLayout/sharedlayout";

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/interns/2024" element={<SharedLayout />}>
            <Route index element={<LandingPage />} />
            <Route path=":username" element={<InternProfilePage />} />
            <Route path="allInterns" element={<InternsPage />} />
          </Route>
          <Route path="/*" element={<Navigate to="/interns/2024/" />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
