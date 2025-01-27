import React from "react";
import background from "../assets/realistic-coffee-background-with-drawings_79603-603.avif";
import sarahImage from "../assets/images (1).jpeg";
import mikeImage from "../assets/images (2).jpeg";

const OurStory = () => {
  const styles = {
    container: {
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "20px",
    },
    section: {
      maxWidth: "800px",
      margin: "20px auto",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    header: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333",
    },
    timeline: {
      borderLeft: "2px solid #d9534f",
      paddingLeft: "20px",
    },
    timelineItem: {
      marginBottom: "20px",
    },
    founderSection: {
      textAlign: "center",
      marginTop: "20px",
    },
    founderImage: {
      borderRadius: "50%",
      width: "150px",
      height: "150px",
      objectFit: "cover",
    },
    ctaButton: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#d9534f",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.section}>
        <h1 style={styles.header}>From Hiking Trails to Coffee Tales</h1>
        <p>
          Cafecito was born out of a love for two things: the great outdoors and
          great coffee. Our journey began in 2015 when two friends, Sarah and
          Mike, found themselves at the base of Mountain Trail after an
          invigorating hike, wishing for a warm cup of coffee and a hearty meal.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>Our Journey</h2>
        <div style={styles.timeline}>
          <div style={styles.timelineItem}>
            <h3>2015: The Idea</h3>
            <p>
              On that fateful day, Sarah turned to Mike and said, "Wouldn't it
              be amazing if there was a cozy coffee shop right here?" That
              simple question sparked the beginning of Cafecito.
            </p>
          </div>
          <div style={styles.timelineItem}>
            <h3>2016: Planning and Preparation</h3>
            <p>
              For a year, Sarah and Mike worked tirelessly. Sarah, a former
              barista, perfected her craft and sourced the finest beans. Mike,
              with his background in hospitality, scouted the perfect location
              and designed a space to become a haven for coffee lovers.
            </p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.header}>Our Values</h2>
        <p>
          <strong>Quality:</strong> We never compromise on taste or quality. <br />
          <strong>Community:</strong> We're not just in the community; we're part of it. <br />
          <strong>Sustainability:</strong> Every decision we make considers its impact. <br />
          <strong>Adventure:</strong> We fuel your journeys through coffee.
        </p>
      </div>

      <div style={{ ...styles.section, ...styles.founderSection }}>
     <h2>Meet the Founders</h2>
     <img
       src={sarahImage}
       alt="Sarah"
       style={styles.founderImage}
     />
     <p>Sarah - Beyond Dreams Collection</p>
     <img
       src={mikeImage}
       alt="Mike"
       style={styles.founderImage}
     />
     <p>Mike Rodriguez</p>
   </div>


      <div style={{ ...styles.section, textAlign: "center" }}>
        <h2>Join Our Story</h2>
        <p>
          Whether you're a local, a weekend warrior, or a tourist passing
          through, there's a place for you at Cafecito.
        </p>
        <a href="/find-us" style={styles.ctaButton}>
          Find Us
        </a>
      </div>

    </div>
  );
};

export default OurStory;
