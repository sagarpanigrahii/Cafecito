import React, { useState } from "react";
import backgroundImage from "../assets/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.avif"; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to Web3 Forms
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "95448181-433f-4154-9d8c-b6bec898348d", 
        ...formData,
      }),
    });

    if (response.ok) {
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };

  const styles = {
    container: {
      padding: "2rem",
      textAlign: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#fff",
      minHeight: "100vh",
    },
    form: {
      display: "inline-block",
      textAlign: "left",
      maxWidth: "400px",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "1.5rem",
      borderRadius: "10px",
    },
    input: {
      width: "100%",
      margin: "0.5rem 0",
      padding: "0.5rem",
      border: "none",
      borderRadius: "5px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#d9534f",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "100%",
      marginTop: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out for any inquiries or suggestions.</p>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ ...styles.input, height: "100px" }}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
