import projects from "../../data/project.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Project.module.css";
export default function Project() {
  return (
    <section id="projects" className={styles.conatiner}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.project}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>;
        })}
      </div>
    </section>
  );
}
