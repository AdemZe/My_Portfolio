import { useState, useEffect } from "react";
import styles from "./NavbarStyles.module.css";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <span className={styles.brandDot}></span>
        <a href="#hero">Adem Daghrour</a>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleNav}
        aria-label="Ouvrir le menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.menu} ${navActive ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#hero" onClick={closeMenu}>
              Profil
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Competences
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
