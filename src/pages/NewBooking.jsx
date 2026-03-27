import { useState } from "react";
import Navbar from "../components/Navbar";

function NewBooking() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    party: "",
    vehicle: "",
    freight: "",
    tax: "",
    fuel: "",
    toll: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/saveBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Booking Saved ✅");
        setForm({
          from: "",
          to: "",
          party: "",
          vehicle: "",
          freight: "",
          tax: "",
          fuel: "",
          toll: "",
        });
      } else {
        alert("Error saving booking");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>New Booking</h1>

        <input name="from" placeholder="From" value={form.from} onChange={handleChange} /><br /><br />
        <input name="to" placeholder="To" value={form.to} onChange={handleChange} /><br /><br />
        <input name="party" placeholder="Party" value={form.party} onChange={handleChange} /><br /><br />
        <input name="vehicle" placeholder="Vehicle" value={form.vehicle} onChange={handleChange} /><br /><br />

        <input name="freight" placeholder="Freight" value={form.freight} onChange={handleChange} /><br /><br />
        <input name="tax" placeholder="Tax %" value={form.tax} onChange={handleChange} /><br /><br />

        <input name="fuel" placeholder="Fuel Expense" value={form.fuel} onChange={handleChange} /><br /><br />
        <input name="toll" placeholder="Toll Expense" value={form.toll} onChange={handleChange} /><br /><br />

        <button onClick={handleSubmit}>Save Booking</button>
      </div>
    </>
  );
}

export default NewBooking;