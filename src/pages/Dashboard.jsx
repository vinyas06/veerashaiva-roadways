import Navbar from "../components/Navbar";

function Dashboard({ user, setUser }) {
  return (
    <>
      <Navbar setUser={setUser} />

      <div style={{ padding: "20px" }}>
        <h1>Welcome {user.email}</h1>
        <h2>Dashboard 🚗</h2>
      </div>
    </>
  );
}

export default Dashboard;