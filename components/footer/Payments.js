import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'


function Payments() {
  return (
    <div className = {styles.footer__payment}>
        <h3>
            We accept
        </h3>
        <Image src = "/visa.svg" width= {50} height = {50} alt = "visa" className= {styles.footer__payment__svg}/>
        <Image src = "/maestro.svg" width= {50} height = {50} alt = "mastercard"/>
        <Image src = "/paypal.svg" width= {50} height = {50} alt = "paypal"/>
        <Image src = "/express.svg" width= {50} height = {50} alt = "american-express"/>
        <Image src = "/disco.svg" width= {50} height = {50} alt = "discover"/>
        <Image src = "/skrill.svg" width= {50} height = {50} alt = "jcb"/>
        <Image src = "/stripe.svg" width= {50} height = {50} alt = "diners-club"/>



    </div>
  )
}

export default Payments