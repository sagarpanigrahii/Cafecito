import React from "react";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      lineHeight: "1.6",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    section: {
      marginBottom: "1.5rem",
    },
    subtitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    paragraph: {
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy</h1>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Information We Collect</h2>
        <p style={styles.paragraph}>
          We collect personal information that you provide to us, such as your name, email address, and preferences, when you use our services or contact us.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>How We Use Your Information</h2>
        <p style={styles.paragraph}>
          We use your information to provide and improve our services, respond to your inquiries, and ensure a better user experience.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Sharing Your Information</h2>
        <p style={styles.paragraph}>
          Your information is not shared with third parties unless required by law or to provide essential services on our behalf.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any questions about this Privacy Policy, please contact us at privacy@cafecito.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
