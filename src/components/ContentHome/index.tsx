import styles from './styles.module.scss'

import Image from "next/image";

import cardOne from '../../../public/assets/card-1.png'
import cardtwo from '../../../public/assets/card-2.png'
import cardthree from '../../../public/assets/card-3.png'
import cartao from '../../../public/assets/cartao.png'
import real from '../../../public/assets/real.png'

import imgone from '../../../public/image/card-1.jpeg'
import imgtwo from '../../../public/image/card-2.jpeg'
import imgthree from '../../../public/image/card-3.jpeg'

export function ContentHome(){
    return(
        <>
        <div className={styles.card}>
            <Image src={cardOne} alt=""/>
            <Image src={cardtwo} alt=""/>
            <Image src={cardthree} alt=""/>
            <Image src={cartao} alt=""/>
        </div>

        <div className={styles.cardBanner}>
            <Image src={imgone} alt=""/>
            <Image src={imgtwo} alt=""/>
            <Image src={imgthree} alt=""/>
        </div>
        </>
    )
}