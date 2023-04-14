import styles from './styles.module.scss'
import Link from "next/link";

export function Oferta(){
    return(
        <>
        <div className={styles.Container}>
            <h1>CONFIRA NOSSAS OFERTAS</h1>
            <div className={styles.content}>
                <Link href={'/irati'}>IRATÍ</Link>
                <Link href={'/pg'}>PONTA GROSSA</Link>
                <Link href={'/sms'}>SÃO MATEUS DO SUL</Link>
            </div>
        </div>
        </>
    )
}