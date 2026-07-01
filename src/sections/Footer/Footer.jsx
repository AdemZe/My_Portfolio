import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>&copy; {new Date().getFullYear()} Adem Daghrour</p>
      <small>DevOps & Cloud Engineer Portfolio</small>
    </section>
  );
}

export default Footer;