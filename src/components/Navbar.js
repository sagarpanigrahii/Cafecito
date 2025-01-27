import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarStyles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      position: "relative",
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      gap: "1.5rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: {
      cursor: "pointer",
      transition: "color 0.3s",
      textDecoration: "none",
      color: "#000",
    },
    active: {
      color: "red",
      fontWeight: "bold",
    },
    hamburger: {
      flexDirection: "column",
      justifyContent: "center",
      gap: "5px",
      cursor: "pointer",
      display: "none", // Hidden by default, visible only on smaller screens
    },
    hamburgerLine: {
      width: "25px",
      height: "3px",
      backgroundColor: "#000",
      borderRadius: "2px",
      transition: "all 0.3s ease-in-out",
    },
    mobileMenu: {
      display: isMenuOpen ? "flex" : "none",
      flexDirection: "column",
      position: "absolute",
      top: "100%",
      right: 0,
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      listStyle: "none",
      gap: "1rem",
    },
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      .nav-links {
        display: none !important; /* Hide nav links on small screens */
      }
      .hamburger {
        display: flex !important; /* Show hamburger menu on small screens */
      }
      .mobile-menu {
        display: flex !important;
      }
    }
    @media (min-width: 769px) {
      .hamburger {
        display: none !important; /* Hide hamburger menu on large screens */
      }
      .nav-links {
        display: flex !important; /* Show nav links on large screens */
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <nav style={navbarStyles.container}>
        <h1 style={navbarStyles.logo}>Cafecito</h1>
        <div
          className="hamburger"
          style={navbarStyles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            style={{
              ...navbarStyles.hamburgerLine,
              transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          ></div>
          <div
            style={{
              ...navbarStyles.hamburgerLine,
              opacity: isMenuOpen ? 0 : 1,
            }}
          ></div>
          <div
            style={{
              ...navbarStyles.hamburgerLine,
              transform: isMenuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          ></div>
        </div>
        <ul
          className={isMenuOpen ? "mobile-menu" : "nav-links"}
          style={isMenuOpen ? navbarStyles.mobileMenu : navbarStyles.navLinks}
        >
          <li>
            <Link
              to="/"
              style={{
                ...navbarStyles.navItem,
                ...(location.pathname === "/" ? navbarStyles.active : {}),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menus"
              style={{
                ...navbarStyles.navItem,
                ...(location.pathname === "/menus" ? navbarStyles.active : {}),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Menus
            </Link>
          </li>
          <li>
            <Link
              to="/find-us"
              style={{
                ...navbarStyles.navItem,
                ...(location.pathname === "/find-us" ? navbarStyles.active : {}),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Find Us
            </Link>
          </li>
          <li>
            <Link
              to="/our-story"
              style={{
                ...navbarStyles.navItem,
                ...(location.pathname === "/our-story"
                  ? navbarStyles.active
                  : {}),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              style={{
                ...navbarStyles.navItem,
                ...(location.pathname === "/community" ? navbarStyles.active : {}),
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
