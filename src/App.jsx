import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  // 🔐 If not logged in → show login
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div>
      {/* 🔝 Simple Navigation */}
      <div style={{ padding: "10px", background: "#eee" }}>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("vehicles")}>Vehicles</button>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>

      {/* 📄 Page Rendering */}
      {page === "dashboard" && (
        <Dashboard user={user} setUser={setUser} />
      )}

      {page === "vehicles" && (
        <Vehicles setUser={setUser} />
      )}
    </div>
  );
}

export default App;