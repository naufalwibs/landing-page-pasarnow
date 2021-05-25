import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles["nav-header"]}>
        <div className={styles["nav-title"]}>Blogr</div>
        <div className={styles["nav-sub-title"]}>Product</div>
        <div className={styles["nav-sub-title"]}>Company</div>
        <div className={styles["nav-sub-title"]}>Connect</div>
      </div>
      <div className={styles["nav-links"]}>
        <a href="true">Login</a>
        <a href="true">Sign Up</a>
      </div>
    </div>
  );
}
