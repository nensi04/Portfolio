import email from "../../../assets/contact/emailIcon.png";
import linkedin from "../../../assets/contact/linkedinIcon.png";
import github from "../../../assets/contact/githubIcon.png";
import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to react out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email"></img>
          <a href="mailto:nensivachhani04@gmail.com">
            nensivachhani04@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedin} alt="Linkedin"></img>
          <a href="https://www.linkedin.com/in/nensi-vachhani-78a40021a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            Linkedin.com/Nensi
          </a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="github"></img>
          <a href="https://github.com/nensi04">github.com/Nensi</a>
        </li>
      </ul>
    </footer>
  );
}
