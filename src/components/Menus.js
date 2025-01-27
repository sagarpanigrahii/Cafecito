import React, { useState } from "react";
import backgroundImage from "../assets/coffee-171653_1280.jpg"; // Replace with the actual path to the image

const Menus = () => {
  const [activeMenu, setActiveMenu] = useState("Coffee");

  const menus = {
    Coffee: [
      { name: "Espresso", price: "$2.50" },
      { name: "Cappuccino", price: "$4.00" },
      { name: "Latte", price: "$4.50" },
      { name: "Americano", price: "$3.00" },
      { name: "Pour Over", price: "$3.50" },
    ],
    Breakfast: [
      { name: "Pancakes", price: "$5.00" },
      { name: "Omelette", price: "$6.50" },
    ],
    Lunch: [
      { name: "Grilled Cheese", price: "$4.00" },
      { name: "Caesar Salad", price: "$7.00" },
    ],
    Dinner: [
      { name: "Steak", price: "$15.00" },
      { name: "Pasta", price: "$12.50" },
    ],
  };

  const styles = {
    container: {
      textAlign: "center",
      padding: "2rem",
      fontFamily: "'Arial', sans-serif",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    menuButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap", // Allow buttons to wrap on smaller screens
      marginBottom: "2rem",
    },
    button: {
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#F4F1ED",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
      fontSize: "1rem",
    },
    activeButton: {
      backgroundColor: "coral",
      color: "#fff",
    },
    menuTable: {
      margin: "0 auto",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "1rem",
      width: "90%", // Adjust width for smaller screens
      maxWidth: "600px", // Limit max width
      textAlign: "left",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      color: "#000",
    },
    tableHeader: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      borderBottom: "2px solid coral",
      marginBottom: "1rem",
      textAlign: "center",
    },
    tableRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.5rem 0",
      borderBottom: "1px solid #f0f0f0",
      fontSize: "1rem",
    },
    tableRowLast: {
      borderBottom: "none",
    },
    "@media (max-width: 768px)": {
      button: {
        fontSize: "0.9rem",
        padding: "0.5rem",
      },
      tableRow: {
        fontSize: "0.9rem",
      },
    },
    "@media (max-width: 480px)": {
      container: {
        padding: "1rem",
      },
      menuTable: {
        width: "100%", // Use full width for very small screens
        padding: "0.5rem",
      },
      tableHeader: {
        fontSize: "1.25rem",
      },
      button: {
        fontSize: "0.8rem",
        padding: "0.4rem",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.menuButtons}>
        {Object.keys(menus).map((menu) => (
          <button
            key={menu}
            style={{
              ...styles.button,
              ...(activeMenu === menu ? styles.activeButton : {}),
            }}
            onClick={() => setActiveMenu(menu)}
          >
            {menu}
          </button>
        ))}
      </div>

      <div style={styles.menuTable}>
        <h2 style={styles.tableHeader}>{activeMenu} Menu</h2>
        {menus[activeMenu].map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.tableRow,
              ...(index === menus[activeMenu].length - 1
                ? styles.tableRowLast
                : {}),
            }}
          >
            <span>{item.name}</span>
            <span>- {item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
