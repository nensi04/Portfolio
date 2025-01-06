import skills from "../../data/skills.json";
import historys from "../../data/history.json";
import styles from "./Experience.module.css";
export default function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title}></img>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ui className={styles.history}>
          {historys.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={historyItem.organisation}
                ></img>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}- ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return (
                        <li key={id}>
                          <p>{experience}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ui>
      </div>
    </section>
  );
}
