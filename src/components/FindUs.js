import React from "react";
import backgroundImage from "../assets/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.avif"; // Update with the correct path to your image file

const FindUs = () => {
  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      backgroundImage: `url(${backgroundImage})`, // Use the imported image
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#333",
      minHeight: "100vh",
    },
    card: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "left",
    },
    header: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    section: {
      marginBottom: "1rem",
    },
    mapContainer: {
      marginTop: "2rem",
    },
    iframe: {
      border: "none",
      width: "100%",
      height: "400px",
      borderRadius: "8px",
    },
    directions: {
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    footer: {
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#2c2c2c",
      color: "#fff",
      textAlign: "center",
      fontSize: "0.875rem",
      borderRadius: "8px",
    },
    footerLink: {
      color: "#f39c12",
      textDecoration: "none",
      margin: "0 0.5rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Visit Us at the Trailhead</h2>
        <p style={styles.section}>
          We’re conveniently located at the start of your favorite hiking trails,
          making us the perfect spot for a pre-hike energizer or a post-adventure meal.
        </p>
        <div style={styles.section}>
          <h3>Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Trailhead Way, Mountain Town, MT 98765
          </p>
          <p>
            <strong>Phone:</strong> +91 77880 78024
          </p>
          <p>
            <strong>Email:</strong> sagar.trushnapanigrahi2002@gmail.com
          </p>
        </div>
        <div style={styles.section}>
          <h3>Hours of Operation</h3>
          <p>
            <strong>Monday - Friday:</strong> 7:00 AM - 9:00 PM
          </p>
          <p>
            <strong>Saturday - Sunday:</strong> 6:00 AM - 10:00 PM
          </p>
        </div>
      </div>
      <div style={styles.mapContainer}>
        <h3>Find Your Way to Cafecito</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098364!2d-122.41941508468152!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b8eb3411%3A0x76f68d7f7a5f2c5!2sTrailhead!5e0!3m2!1sen!2sus!4v1610919456612!5m2!1sen!2sus"
          style={styles.iframe}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
      <div style={styles.directions}>
        <h3>Directions</h3>
        <ol>
          <li>From the town center, head north on Main Street for 2 miles.</li>
          <li>Turn right onto Trailhead Way. You'll see our sign after 0.5 miles.</li>
          <li>Parking is available in our lot or along the street.</li>
        </ol>
        <p>
          <strong>Tip:</strong> Look for the big coffee cup mural on our west wall!
        </p>
      </div>
      
    </div>
  );
};

export default FindUs;
