import Image from "next/image";
import styles from "../styles/login.module.css"; // Adjust the path as necessary

export default function LogIn() {
  return (
    <div className={styles.container}>
      <Image
        src="/background.jpg"
        alt="Green/blue background"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.box}></div>
    </div>
  );
}
