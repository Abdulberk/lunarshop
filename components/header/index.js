import React from 'react'
import Top from './Top'
import styles from './styles.module.scss'
import Main from './Main'


function Header() {
  return (
    <div className = {styles.header}>
   <Top/>
   <Main/>
   
    </div>
  )
}

export default  Header