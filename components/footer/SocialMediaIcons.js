import React from 'react'
import styles from './styles.module.scss'
import{SocialIcon} from 'react-social-icons'




function SocialMediaIcons() {
    
  return (
    <div className = {styles.footer__social}>
        <SocialIcon url = "https://www.facebook.com/" network="facebook" bgColor = "#3b5998" fgColor = "white"/>
        <SocialIcon url = "https://www.instagram.com/" network="instagram" bgColor = "#3f729b" fgColor = "white" />
        <SocialIcon url = "https://www.twitter.com/" network="twitter" bgColor = "#55acee" fgColor = "white" />
        <SocialIcon url = "https://www.youtube.com/" network="youtube" bgColor = "#cd201f" fgColor = "white" />

        
    </div>
  )
}

export default SocialMediaIcons