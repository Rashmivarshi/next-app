import Image from "next/image";
import styles from "./home.module.css"
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textcontainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
        blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>
    </div>
    <div className={styles.imagecontainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;