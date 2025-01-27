import React, { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guest(s).`
    );
    // You can replace this with logic to send the data to a server
  };

  const formStyles = {
    container: {
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "2rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      margin: "0.5rem 0",
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "1rem",
    },
    button: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      backgroundColor: "coral",
      border: "none",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={formStyles.container}>
      <h2>Make a Dinner Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
        <input
          type="number"
          name="guests"
          min="1"
          max="20"
          value={formData.guests}
          onChange={handleChange}
          style={formStyles.input}
          required
        />
        <button type="submit" style={formStyles.button}>
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
