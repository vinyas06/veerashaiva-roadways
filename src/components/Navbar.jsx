function Navbar({ setUser }) {
  return (
    <div style={{
      background: "#222",
      color: "white",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>🚗 Fleet Manager</div>

      <div>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;