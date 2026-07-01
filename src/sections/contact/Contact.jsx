import styles from "./ContactStyles.module.css";
function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 className="sectionTitle">Contact</h2>
      <p className={styles.subtitle}>
        Disponible pour un stage de fin d etudes ou une opportunite DevOps
        Engineer.
      </p>

      <div className={styles.contactGrid}>
        <article>
          <h3>Email</h3>
          <a href="mailto:adem.daghrour07@gmail.com">
            adem.daghrour07@gmail.com
          </a>
        </article>

        <article>
          <h3>Telephone</h3>
          <a href="tel:+21652716264">+216 52 716 264</a>
        </article>

        <article>
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/adem-daghrour-a423b430b/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/adem-daghrour-a423b430b
          </a>
        </article>

        <article>
          <h3>GitHub</h3>
          <a href="https://github.com/AdemZe" target="_blank" rel="noreferrer">
            github.com/AdemZe
          </a>
        </article>
      </div>

      <div className={styles.extraInfo}>
        <p>
          <strong>Formation:</strong> Cycle d Ingenieur DevOps & Cloud (2eme
          annee) - ITEAM Universite.
        </p>
        <p>
          <strong>Langues:</strong> Arabe (maternelle), Francais (courant),
          Anglais (courant).
        </p>
      </div>

      <a className={styles.cta} href="mailto:adem.daghrour07@gmail.com">
        Envoyer un message
      </a>
    </section>
  );
}

export default Contact;
