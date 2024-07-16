
import styles from "./ProjectsStyles.module.css";
import cybersecurity from "../../assets/icons8-cybersecurity-100.png"
import ecommerce from "../../assets/icons8-e-commerce-100.png"
import cvMangerPicture from "../../assets/icons8-cv-100 (1).png";
import ProjectsCard from '../../common/ProjectsCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectsCard
          src={cybersecurity}
          link="https://github.com/AdemZe/back"
          h3="cybersecurity"
          p="cybersecurity awareness platform"
        />
        <ProjectsCard
          src={ecommerce}
          link="https://github.com/AdemZe/Next.js-mini-Project-e-commerce-website-"
          h3=" ShopEase"
          p=" E-commerce web site"
        />
        <ProjectsCard
          src={cvMangerPicture}
          link="https://github.com/AdemZe/UserCvHub"
          h3="CV Manager "
          p=" CV Manager "
        />

      </div>
    </section>
  );
}

export default Projects;