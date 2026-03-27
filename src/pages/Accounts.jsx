import Navbar from "../components/Navbar";

function Accounts() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Accounts</h1>

        <h3>Cash in Hand: ₹0</h3>
        <h3>Bank Balance: ₹0</h3>

        <button>Add Expense</button>
      </div>
    </>
  );
}

export default Accounts;