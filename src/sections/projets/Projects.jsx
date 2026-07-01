
import styles from "./ProjectsStyles.module.css";
import cybersecurity from "../../assets/icons8-cybersecurity-100.png"
import ecommerce from "../../assets/icons8-e-commerce-100.png"
import cvMangerPicture from "../../assets/icons8-cv-100 (1).png";
import ProjectsCard from '../../common/ProjectsCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projets DevOps & Cloud</h2>
      <p className={styles.subtitle}>
        Projets axes sur l automatisation, le deploiement cloud et la fiabilite
        des applications en production.
      </p>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={cybersecurity}
          link="https://github.com/AdemZe"
          h3="Infrastructure DevOps MERN"
          p="Conteneurisation, pipelines CI/CD, monitoring et analyse de securite pour une application MERN."
          stack="Docker, Ansible, GitHub Actions, Prometheus, Grafana, Trivy, Snyk"
        />
        <ProjectsCard
          src={ecommerce}
          link="https://github.com/AdemZe"
          h3="Plateforme E-commerce sur AWS"
          p="Infrastructure AWS complete avec Terraform, configuration automatisee et pipeline CI/CD."
          stack="AWS, Terraform, Ansible, Docker Compose, CloudWatch, SNS"
        />
        <ProjectsCard
          src={cvMangerPicture}
          link="https://github.com/AdemZe"
          h3="Microservices Voting App"
          p="Architecture microservices conteneurisee et orchestree avec Kubernetes et persistance des donnees."
          stack="Kubernetes, Docker Compose, Redis, PostgreSQL, Python, Node.js, .NET"
        />
        <ProjectsCard
          src={cybersecurity}
          link="https://github.com/AdemZe/back"
          h3="Cybersecurity"
          p="Cybersecurity awareness platform avec contenu de sensibilisation et parcours interactif."
          stack="Nest.js, React.js, PostgreSQL, TypeScript"
        />
        <ProjectsCard
          src={ecommerce}
          link="https://github.com/AdemZe/Next.js-mini-Project-e-commerce-website-"
          h3="ShopEase"
          p="E-commerce web site moderne avec interface utilisateur responsive."
          stack="Next.js, JavaScript, CSS"
        />
        <ProjectsCard
          src={cvMangerPicture}
          link="https://github.com/AdemZe/UserCvHub"
          h3="CV Manager"
          p="Plateforme de gestion de CV pour centraliser et organiser les profils candidats."
          stack="React.js, Node.js, PostgreSQL"
        />
      </div>
    </section>
  );
}

export default Projects;