import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import coffeeImage from "../assets/pexels-chevanon-312418.jpg"; // Replace with the correct path to your image

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const heroStyles = {
    section: {
      position: "relative",
      width: "100%",
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      color: "#fff",
      textAlign: "center",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "1.25rem",
      marginBottom: "2rem",
    },
    button: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      fontWeight: "bold",
      backgroundColor: "coral",
      border: "none",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    "@media (max-width: 768px)": {
      overlay: {
        padding: "1rem",
      },
      title: {
        fontSize: "2rem",
      },
      subtitle: {
        fontSize: "1rem",
      },
      button: {
        fontSize: "0.9rem",
        padding: "0.5rem 1rem",
      },
    },
    "@media (max-width: 480px)": {
      title: {
        fontSize: "1.5rem",
      },
      subtitle: {
        fontSize: "0.9rem",
      },
    },
  };

  return (
    <div style={heroStyles.section}>
      <img src={coffeeImage} alt="Coffee" style={heroStyles.image} />
      <div style={heroStyles.overlay}>
        <h1 style={heroStyles.title}>Cafecito</h1>
        <p style={heroStyles.subtitle}>
          Coffee House & Restaurant at the Trailhead
        </p>
        <button
          style={heroStyles.button}
          onClick={() => navigate("/reservation")} // Navigate to reservation page
          onMouseOver={(e) => (e.target.style.backgroundColor = "darkorange")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "coral")}
        >
          Dinner Reservations
        </button>
      </div>
    </div>
  );
};

export default Home;
