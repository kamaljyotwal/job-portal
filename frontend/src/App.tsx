import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// my imports
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashPage from "./pages/Dash";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dash"
            element={
              <ProtectedRoute>
                <DashPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
