import hero from "../../../assets/hero/myphoto.jpeg";
import styles from "../Hero/Hero.module.css";
export default function () {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Nensi </h1>
        <p className={styles.description}>
          I am a skilled Frontend Developer and Mobile Application Developer
          with expertise in building dynamic and user-friendly interfaces using
          React and React Native. My passion lies in creating seamless web and
          mobile experiences, leveraging the power of modern technologies to
          deliver high-performance, visually appealing, and responsive
          applications. With a strong focus on code quality and best practices,
          I excel in translating complex requirements into intuitive and
          efficient solutions. My dedication to continuous learning ensures that
          I stay updated with the latest advancements in React and React Native
          ecosystems, enabling me to craft cutting-edge applications that meet
          both user and business needs.
        </p>
        <a
          href="mailto:nensivachhani04@gmail.com"
          className={styles.contactBtn}
        >
          Contact me
        </a>
      </div>
      <img src={hero} className={styles.heroImg}></img>
    </section>
  );
}
