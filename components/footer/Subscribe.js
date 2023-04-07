import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'


function Subscribe() {
  return (
    <div className = {styles.footer__subscribe}>
        
                <h3>Subscribe to our newsletter</h3>
                <p>Get the latest news and updates from Lunar</p>
                
                <div>
                <input type="text" placeholder = "Enter your email address"/>
                <button className = {styles.subscribeButton}>Subscribe</button>
                
                </div>



    </div>
  )
}

export default Subscribe