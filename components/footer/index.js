import React from 'react'
import styles from './styles.module.scss'
import FooterLinks from './FooterLinks'
import SocialMediaIcons from './SocialMediaIcons'
import Subscribe from './Subscribe'
import Copyright from './Copyright'
import Payments from './Payments'





function Footer() {
  return (
   <>
   <footer className= {styles.footer} >
      <div className = {styles.footer__container}>


      <FooterLinks/>
      <SocialMediaIcons/>
      <Subscribe/>
      <Payments/>
      <Copyright/>


          </div>
   </footer>

   </>
    

  )
}

export default  Footer