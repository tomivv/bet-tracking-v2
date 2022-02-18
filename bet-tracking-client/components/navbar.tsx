import React from "react";
import styles from "../styles/Navbar.module.css";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Navbar() {

  function handleLogout(e: React.SyntheticEvent) {
    e.preventDefault();
    signOut();
  }

  return (
    <nav className={styles.nav_vertical}>
      <div className={styles.nav_top}>
        <ul>
          <li className={styles.nav_item}>
            <Icon icon="carbon:user-avatar-filled" color="#747572" height="32" />
          </li>
        </ul>
      </div>
      <div className={styles.nav_middle}>
        <ul>
          <li className={styles.nav_item}>
            <Link href="/dashboard">
              <a>
                <Icon icon="carbon:dashboard-reference" color="#747572" height="32" />
              </a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/betadd">
              <a>
                <Icon icon="carbon:add" color="#747572" height="32" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.nav_end}>
        <ul>
          <li onClick={handleLogout} className={styles.nav_item}>
            <a className={styles.nav_logout}>
              <Icon icon="carbon:logout" color="#747572" height="32" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}