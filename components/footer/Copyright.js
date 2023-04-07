import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'



function Copyright() {
  return (
    <div className = {styles.footer__copyright}>
         <p> <Link href = "/privacy-policy">Privacy Policy</Link>
        </p>
        <p>
            <Link href = "/terms-of-use">Terms of Use</Link>
        </p>
        <p>© 2023 Lunar. All rights reserved</p>
        <p>Developed by Abdülber Kaya </p>
       
    </div>
  )
}

export default Copyright