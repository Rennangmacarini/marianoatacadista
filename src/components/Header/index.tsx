import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

import logo from "../../../public/icon/logo.png";

import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  };
  
  return (
    <>
       <div onClick={handleOpen} className={styles.imgmobile}>
       <img src={openMenu ? "./image/menux.png" : "./image/menu.png"} alt="" />
       </div>
      <div className={styles.header}>
        <Image src={logo} alt="Logo"/>
        <div className={styles.menu}>
          <Link href={"/"}>INÍCIO</Link>
          <Link href={"/about"}>QUEM SOMOS</Link>
          <Link href={"/stores"}>LOJAS</Link>
          <Link href={"/"}>TRABALHE CONOSCO</Link>
        </div>
      </div>

      {openMenu && (
      <div className={styles.mobile}>
        <Link href={"/"}>INÍCIO</Link>
        <Link href={"/about"}>QUEM SOMOS</Link>
        <Link href={"/stores"}>LOJAS</Link>
        <Link href={"/"}>TRABALHE CONOSCO</Link>
      </div>
      )}
    </>
  );
}
