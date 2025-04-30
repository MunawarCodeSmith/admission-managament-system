import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure Routes is imported here
import Home from "./Components/Home";
import Dashboard from "./Components/DashboardPage";
import Payment from "./Components/PaymentsPage";
import Communication from "./Components/CommunicationPage";
import Query from "./Components/QueryPage";
import ThankYouPage from "./Components/ThankYouPage";
import RegistrationPage from "./Components/RegisterLoginForm";
import AdminLogin from "./Components/AdminLogin";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define Routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/queries" element={<Query />} />
          <Route path="/communications" element={<Communication />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
