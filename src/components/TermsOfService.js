import React from "react";

const TermsOfService = () => {
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
      <h1 style={styles.title}>Terms of Service</h1>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Introduction</h2>
        <p style={styles.paragraph}>
          By using our services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>User Obligations</h2>
        <p style={styles.paragraph}>
          You agree to use our services responsibly and not engage in any activities that may harm our platform or other users.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Limitation of Liability</h2>
        <p style={styles.paragraph}>
          We are not liable for any damages resulting from your use of our services, except as required by law.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Changes to Terms</h2>
        <p style={styles.paragraph}>
          We reserve the right to update these Terms of Service at any time. Please check this page periodically for changes.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Contact Us</h2>
        <p style={styles.paragraph}>
          For any questions about these Terms of Service, please contact us at support@cafecito.com.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
