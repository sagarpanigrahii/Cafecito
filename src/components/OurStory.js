import React from "react";
import background from "../assets/realistic-coffee-background-with-drawings_79603-603.avif";

const OurStory = () => {
  const styles = {
    container: {
      height: "100vh",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#fff",
      marginBottom: "20px",
    },
    card: {
      width: "300px",
      padding: "20px",
      backgroundColor: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>Welcome to Our Story</header>
      <div style={styles.card}>
        <p>This is where the story begins...</p>
      </div>
    </div>
  );
};

export default OurStory;
