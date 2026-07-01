import styles from "./SkillsStyles.module.css";
import SkillList from "../../common/SkillList";

function Skills() {
  const groupedSkills = [
    {
      title: "Cloud & Infrastructure",
      items: ["AWS", "Terraform", "Docker", "Kubernetes", "Ansible"],
    },
    {
      title: "CI/CD & Outils",
      items: ["GitHub Actions", "Git", "Linux", "Bash", "Nginx"],
    },
    {
      title: "Monitoring & Qualite",
      items: ["Prometheus", "Grafana", "Trivy", "Snyk", "SonarQube"],
    },
    {
      title: "Developpement",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Node.js",
        "React.js",
        "Next.js",
        "Nest.js",
      ],
    },
    {
      title: "Bases de donnees",
      items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    },
    {
      title: "Business Intelligence",
      items: ["Power BI", "Excel avance", "Reporting"],
    },
  ];

  return (
    <section id="skills" className={styles.container}>
      <h2 className="sectionTitle">Competences Cles</h2>
      <div className={styles.skillsGrid}>
        {groupedSkills.map((group) => (
          <article key={group.title} className={styles.skillCard}>
            <h3>{group.title}</h3>
            <div className={styles.skillList}>
              {group.items.map((item) => (
                <SkillList key={item} skill={item} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
