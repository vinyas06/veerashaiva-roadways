import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ background: "#222", color: "white", padding: "10px" }}>
      
      <h2>🚗 Veerashaiva Roadways</h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>

        <Link to="/">Dashboard</Link>

        <div>
          Booking:
          <Link to="/new-booking"> New</Link>
          <Link to="/booking-list"> List</Link>
        </div>

        <div>
          Vehicle:
          <Link to="/add-vehicle"> Add</Link>
          <Link to="/vehicle-list"> List</Link>
        </div>

        <div>
          Driver:
          <Link to="/add-driver"> Add</Link>
          <Link to="/driver-list"> List</Link>
        </div>

        <div>
          Party:
          <Link to="/add-party"> Add</Link>
          <Link to="/party-list"> List</Link>
        </div>

        <Link to="/accounts">Accounts</Link>
        <Link to="/reports">Reports</Link>

      </div>
    </div>
  );
}

export default Navbar;