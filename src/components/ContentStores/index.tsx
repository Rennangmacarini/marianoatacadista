import styles from "./styles.module.scss";

import irati from "../../../public/image/irati.png";
import sms from "../../../public/image/sms.png";
import pg from "../../../public/image/pg.png";
import Image from "next/image";
import Link from "next/link";

export function ContentStores() {
  return (
    <>
      <div className={styles.container}>
        <h1>LOJAS MARIANO ATACADISTA</h1>
      </div>

      <div className={styles.stores}>
        <div className={styles.content}>
          <Image src={irati} alt="irati" />
          <div className={styles.text}>
            <h2>IRATI</h2>
            <p>Av. Dr. Vicente Machado, 1392 - Centro, Irati - PR,</p>
            <p>Contato : 84500-039.</p>
            <Link
              href="https://api.whatsapp.com/send?phone=+554291383099&text=“Olá, gostaria de ter algumas informações”"
              target="_blank"
            >
              Televendas - (42) 9138-3099
            </Link>
            <h2>HORÁRIO DE ATENDIMENTO</h2>
            <p>De segunda a sábado: 7h30 às 20h.</p>
            <p>Aos domingos 9h às 19h.</p>
          </div>
        </div>

        <div className={styles.content}>
          <Image src={sms} alt="irati" />
          <div className={styles.text}>
            <h2>SÃO MATEUS DO SUL </h2>
            <p>R. Rodolfo Wolf, 83 - Vila Amaral, São Mateus do</p>
            <p>Sul - PR, 83900-000.</p>
            <Link
              href="https://api.whatsapp.com/send?phone=+554291568432&text=“Olá, gostaria de ter algumas informações”"
              target="_blank"
            >
              Televendas - (42) 9156-8432
            </Link>
            <h2>HORÁRIO DE ATENDIMENTO</h2>
            <p>De segunda a sábado: 7h30 às 20h30.</p>
            <p>Aos domingos 9h às 20h30</p>
          </div>
        </div>

        <div className={styles.content}>
          <Image src={pg} alt="irati" />
          <div className={styles.text}>
            <h2>PONTA GROSSA</h2>
            <p>Rua Valério Ronchi, no Bairro Neves,</p>
            <p>84030-320.</p>
            <Link
              href="https://api.whatsapp.com/send?phone=+554241410001&text=“Olá, gostaria de ter algumas informações”"
              target="_blank"
            >
              Televendas - (42) 4141-0001
            </Link>
            <h2>HORÁRIO DE ATENDIMENTO</h2>
            <p>De segunda a sábado: 08h às 21h.</p>
            <p>Aos domingos 8h às 20h.</p>
          </div>
        </div>
      </div>
    </>
  );
}
