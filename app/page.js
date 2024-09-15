import Image from "next/image";
import style from "../app/globals.css"
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
      <div className={styles.homeHeaderLeft}>
        <h1>The Best Collection 2024 </h1>
        <p>
          Luxury fashionable clothings and stationary items at
          affordable price just for you!
        </p>

        <div>
          <Link href="/all-products"
          className={style.btns}>
          Shop
          </Link>
        </div>
      </div>
      <div className={styles.homeHeaderRight}></div>
      </header>
      </div>
    
    </main>
  );
}
