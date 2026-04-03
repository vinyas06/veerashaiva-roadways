import { useState } from "react";
import Navbar from "../components/Navbar";

function Vehicles({ setUser }) {
  const [vehicles, setVehicles] = useState([]);
  const [name, setName] = useState("");

  const addVehicle = () => {
    if (!name) return;
    setVehicles([...vehicles, { name }]);
    setName("");
  };

  return (
    <>
      <Navbar setUser={setUser} />

      <div style={{ padding: "20px" }}>
        <h2>Vehicles</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vehicle Name"
        />

        <button onClick={addVehicle}>Add</button>

        <ul>
          {vehicles.map((v, i) => (
            <li key={i}>{v.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Vehicles;