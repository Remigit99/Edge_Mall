import Image from "next/image";
import style from "../app/globals.css"
import styles from "./page.module.css";
import Link from "next/link";
import h2 from "@/public/assets/images/hoodie2.jpg"


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

        <div >
          <Link href="/all-products"  className={styles.btn}>
          Shop
          </Link>
        </div>
      </div>
      <div className={styles.homeHeaderRight}>

        <Image
        src={h2}
        alt="hoodie"
        width={500}
        height={500}
        />
      </div>
      </header>
      </div>
    
    </main>
  );
}
