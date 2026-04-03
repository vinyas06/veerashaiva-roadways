import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewBooking from "./pages/NewBooking";
import BookingList from "./pages/BookingList";
import AddVehicle from "./pages/AddVehicle";
import VehicleList from "./pages/VehicleList";
import AddDriver from "./pages/AddDriver";
import DriverList from "./pages/DriverList";
import AddParty from "./pages/AddParty";
import PartyList from "./pages/PartyList";
import Accounts from "./pages/Accounts";
import Reports from "./pages/Reports";

function App() {
  const [user, setUser] = useState(null);

  // 🔥 Load user from localStorage (stay logged in)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 🔐 Protect routes
  const Protected = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 PUBLIC ROUTE */}
        <Route path="/login" element={<Login setUser={setUser} />} />

        {/* 🔐 PROTECTED ROUTES */}
        <Route
          path="/"
          element={
            <Protected>
              <Dashboard user={user} />
            </Protected>
          }
        />

        <Route
          path="/new-booking"
          element={
            <Protected>
              <NewBooking />
            </Protected>
          }
        />

        <Route
          path="/booking-list"
          element={
            <Protected>
              <BookingList />
            </Protected>
          }
        />

        <Route
          path="/add-vehicle"
          element={
            <Protected>
              <AddVehicle />
            </Protected>
          }
        />

        <Route
          path="/vehicle-list"
          element={
            <Protected>
              <VehicleList />
            </Protected>
          }
        />

        <Route
          path="/add-driver"
          element={
            <Protected>
              <AddDriver />
            </Protected>
          }
        />

        <Route
          path="/driver-list"
          element={
            <Protected>
              <DriverList />
            </Protected>
          }
        />

        <Route
          path="/add-party"
          element={
            <Protected>
              <AddParty />
            </Protected>
          }
        />

        <Route
          path="/party-list"
          element={
            <Protected>
              <PartyList />
            </Protected>
          }
        />

        <Route
          path="/accounts"
          element={
            <Protected>
              <Accounts />
            </Protected>
          }
        />

        <Route
          path="/reports"
          element={
            <Protected>
              <Reports />
            </Protected>
          }
        />

        {/* ❌ If route not found */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;