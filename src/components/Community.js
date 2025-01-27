import React from "react";
import backgroundImage from "../assets/coffee1.jpg"; 

const Community = () => {
  const styles = {
    container: {
      padding: "2rem",
      textAlign: "center",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#333",
    },
    section: {
      margin: "2rem 0",
      padding: "1.5rem",
      backgroundColor: "rgba(255, 255, 255, 0.9)", 
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subheader: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#d9534f",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#d9534f",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Community</h1>
      <p>Join us in celebrating our amazing community!</p>

      
      <div style={styles.section}>
        <h2 style={styles.subheader}>Featured Events</h2>
        <p>
          From coffee workshops to local art showcases, we host events that
          bring our community together.
        </p>
      </div>

      
      <div style={styles.section}>
        <h2 style={styles.subheader}>Community Spotlights</h2>
        <p>
          Meet the incredible individuals and groups who make Cafecito
          special—like Jane, who hosts our monthly book club, and the artists
          behind our gallery wall!
        </p>
      </div>

      
      <div style={styles.section}>
        <h2 style={styles.subheader}>Get Involved</h2>
        <p>
          Whether you want to volunteer, collaborate, or share your ideas, we
          welcome your involvement!
        </p>
        <a href="/contact" style={styles.button}>
          Contact Us
        </a>
      </div>

      
      <div style={styles.section}>
        <h2 style={styles.subheader}>What Our Community Says</h2>
        <blockquote>
          "Cafecito is more than just a coffee shop; it's a place where we feel
          at home." - Alex M.
        </blockquote>
      </div>
    </div>
  );
};

export default Community;
