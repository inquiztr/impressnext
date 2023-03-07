import * as React from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/impress-logo.png"
              alt="Impressionable Gifts1"
              width="200"
              height="53"
              priority
            />
            {/* <img
              width="200"
              height="53"
              src="/impress-logo.png"
              alt="Impressionable Gifts"
            /> */}
          </Link>
        </div>
        <div className={styles.nav}>
          <button type="button" className={styles.buttonToggleMenu}>
            Menu
          </button>
          <ul id="nav" className={styles.navMobile}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/#gallery">Testimonials</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
