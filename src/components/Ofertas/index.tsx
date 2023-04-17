import styles from './styles.module.scss'
import Link from "next/link";

export function Oferta(){
    return(
        <>
        <div className={styles.Container}>
        <img src={"/assets/ofertas.png"} alt="" />
            <div className={styles.content}>
                <Link href={'/irati'} target='_blank'>IRATÍ</Link>
                <Link href={'/pg'} target='_blank'>PONTA GROSSA</Link>
                <Link href={'/sms'} target='_blank'>SÃO MATEUS DO SUL</Link>
            </div>
        </div>
        </>
    )
}