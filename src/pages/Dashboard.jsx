import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

function Dashboard({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>
        <h2>Welcome {user?.email}</h2>
      </div>
    </>
  );
}

export default Dashboard;