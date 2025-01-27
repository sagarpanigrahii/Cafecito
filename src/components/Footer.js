import React from "react";

const Footer = () => {
  const styles = {
    footer: {
      marginTop: "3rem",
      padding: "1.5rem 1rem",
      backgroundColor: "#2C2C2C",
      color: "#fff",
      textAlign: "center",
      fontSize: "0.875rem",
      fontFamily: "'Arial', sans-serif",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    links: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "1rem",
    },
    link: {
      color: "coral",
      textDecoration: "none",
      fontSize: "0.9rem",
      transition: "color 0.3s",
    },
    linkHover: {
      color: "#fff",
    },
    copyright: {
      marginTop: "1rem",
      fontSize: "0.75rem",
      color: "#aaa",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>Cafecito</div>
      <div style={styles.links}>
        <a href="/privacy" style={styles.link}>
          Privacy Policy
        </a>
        <a href="/terms" style={styles.link}>
          Terms of Service
        </a>
        
      </div>
      <div style={styles.copyright}>
        © 2024 Cafecito. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
