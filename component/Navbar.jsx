"use client";
import Link from "next/link";
import { useState } from "react";
import { mainNavLinks } from "@/utils/NavLinks";
import styles from "@/styles/nav.module.css";
import Image from "next/image";

const Navbar = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navLogo}>
          <h2>
            <Link href="/">EdgeMall</Link>
          </h2>
        </div>

        {/* Desktop Nav */}

        <div className={`${styles.navLinks} ${styles.desktopNav}`}>
          <ul>
            {mainNavLinks.map(({ id, title, path }) => (
              <Link href={`${path}`} key={id}>
                {title}
              </Link>
            ))}
          </ul>

          <div>
            {userLoggedIn ? (
              <div className={styles.navRight}>
                <Link href="/account">Account</Link>
                <Link href="/cart">Cart</Link>
                <Link href="/logout">Logout</Link>
              </div>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        {showMenu ? (
          <div className={`${styles.navLinks} ${styles.mobileNav}`}>
            <ul>
              {mainNavLinks.map(({ id, title, path }) => (
                <Link href={`${path}`} key={id}>
                  {title}
                </Link>
              ))}
            </ul>

            <div>
              {userLoggedIn ? (
                <div className={styles.navRight}>
                  <Link href="/account">Account</Link>
                  <Link href="/cart">Cart</Link>
                  <Link href="/logout">Logout</Link>
                </div>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        <span
          className={styles.menuLogo}
          onClick={(prev) => setShowMenu(!prev)}
        >
          <Image
            src="/assets/icons/menu-alt.svg"
            alt="menu_logo"
            width={40}
            height={40}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
