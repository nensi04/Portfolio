import hero from "../../../assets/about/myphoto.jpeg";
import cursor from "../../../assets/about/cursorIcon.png";
import styles from "./About.module.css";
export default function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={hero}
          style={{ marginTop: 20, marginRight: 20 }}
          alt="me setting with laptop"
          className={styles.aboutImage}
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="cursor icon"></img>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm Frontend developer with experience in building responsive
                and optimized websites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="cursor icon"></img>
            <div className={styles.aboutItemText}>
              <h3>Mobile Developer</h3>
              <p>
                I'm a Mobile App Developer with experience in building intuitive
                and high-performance mobile applications for both Android and
                iOS platforms.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
