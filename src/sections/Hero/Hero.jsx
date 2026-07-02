import headerImg from "../../assets/devops.png";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Adem_Daghrour_Cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.imagePane}>
        <div className={styles.imageCard}>
          <img className={styles.hero} src={headerImg} alt="Adem Daghrour" />
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.eyebrow}>Etudiant Ingenieur DevOps & Cloud</p>
        <h1>Adem Daghrour</h1>
        <p className={styles.location}>Beni Khalled, Nabeul, Tunisie</p>
        <p className={styles.description}>
          Passionne par le Cloud, Kubernetes, Docker et l automatisation CI/CD,
          je concois et deploie des architectures microservices fiables avec une
          approche orientee IaC, monitoring et securite applicative.
        </p>

        <div className={styles.metrics}>
          <div>
            <strong>2+ ans</strong>
            <span>Experience IT & BI</span>
          </div>
          <div>
            <strong>3 Projets</strong>
            <span>DevOps & Cloud</span>
          </div>
          <div>
            <strong>AWS + K8s</strong>
            <span>Stack principale</span>
          </div>
        </div>

        <div className={styles.ctaRow}>
          <a href={CV} download className={styles.primaryBtn}>
            Telecharger CV
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Me contacter
          </a>
        </div>

        <span className={styles.socials}>
          <a href="https://github.com/AdemZe" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/adem-daghrour-a423b430b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
