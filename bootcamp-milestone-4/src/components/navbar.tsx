import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar}>
      <h1 className={style.pagetitle}>Rishan Baweja </h1>
      <nav className={style.navlist}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/about">Contact Me</Link>
      </nav>
    </header>
  );
}
