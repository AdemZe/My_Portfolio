import headerImg from "../../assets/header.png";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Adem_Daghrour_Cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import pict1 from "../../assets/1.jpg";
import pict2 from "../../assets/2.jpg";
import pict3 from "../../assets/7127986.jpg";


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
     
        <img
          className={styles.hero}
          src={headerImg}
          alt="profile pic "
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Adem
          <br />
          Daghrour
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank"  rel='noreferrer'>
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/AdemZe" target="_blank"  rel='noreferrer'>
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/adem-daghrour-a423b430b/"
            target="_blank" rel='noreferrer'
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate about crafting robust full-stack applications web  with modern technologies.
        </p>
        <br/>

        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
