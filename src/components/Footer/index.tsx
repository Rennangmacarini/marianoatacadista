import Image from "next/image";
import styles from "./styles.module.scss";

import facebook from "../../../public/icon/facebook.png";
import instagram from "../../../public/icon/instagram.png";
import linkdin from "../../../public/icon/linkdin.png";
import email from "../../../public/icon/email.png";
import whats from "../../../public/icon/whats.png";

import elo from "../../../public/icon/elo.png";
import visa from "../../../public/icon/visa.png";
import picpay from "../../../public/icon/picpay.png";
import pix from "../../../public/icon/pix.png";
import mastercard from "../../../public/icon/mastercard.png";

import personalcard from "../../../public/icon/personalcard.png";
import valecard from "../../../public/icon/valecard.png";
import sodexo from "../../../public/icon/sodexo.png";
import copper from "../../../public/icon/copper.png";
import life from "../../../public/icon/lifecard.png";
import cartaomariano from "../../../public/icon/cartaomariano.png";
import trio from "../../../public/icon/triocard.png";
import cash from "../../../public/icon/cashberti.png";
import money from "../../../public/icon/money.png";

export function Footer() {
  return (
    <>
      <div className={styles.global}>
        <div className={styles.container}>
          <div className={styles.cardIcon}>
            <h1>REDE SOCIAL</h1>
            <div className={styles.icon}>
              <Image src={facebook} alt="" />
              <Image src={instagram} alt="" />
              <Image src={linkdin} alt="" />
            </div>
          </div>

          <div className={styles.cardIcon}>
            <h1>OUVIDORIA</h1>
            <div className={styles.icon}>
              <Image src={email} alt="" />
            </div>
          </div>

          <div className={styles.cardIcon}>
            <h1>CONTATO LOJAS</h1>
            <div className={styles.icon}>
              <Image src={whats} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.containerCard}>
          <div className={styles.cardIcon}>
            <h1>CRÉDITO/DÉBITO</h1>
            <div className={styles.card}>
              <Image src={elo} alt="" />
              <Image src={visa} alt="" />
              <Image src={picpay} alt="" />
              <Image src={pix} alt="" />
              <Image src={mastercard} alt="" />
            </div>
          </div>

          <div className={styles.cardIcon}>
            <h1>VALE/ALIMENTAÇÃO</h1>
            <div className={styles.card}>
              <Image src={personalcard} alt="" />
              <Image src={valecard} alt="" />
              <Image src={sodexo} alt="" />
              <Image src={copper} alt="" />
              <Image src={life} alt="" />
            </div>
            <div className={styles.card}>
              <Image src={cartaomariano} alt="" />
              <Image src={trio} alt="" />
              <Image src={cash} alt="" />
            </div>
          </div>

          <div className={styles.cardIcon}>
            <h1>DINHEIRO</h1>
            <div className={styles.card}>
              <Image src={money} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.term}>
          <h1>TERMO DE POLITICA DE PRIVACIDADE</h1>
        </div>
      </div>
    </>
  );
}
