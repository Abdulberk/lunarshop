import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import avatar from '../../public/avatar.png'
import {signIn, signOut} from 'next-auth/react'


function UserMenu({session}) {


  return (
    <div className = {styles.menu}>
        <h4>Welcome to Lunar!</h4>
        
        {session ? ( 
        
        <div className={styles.flex}>
           

          

          <Image src = {session.user.image || avatar}  alt = "avatar" className= {styles.menu__img} width= {75} height= {75} />
       
          <div className={styles.col}>  
          <span>Welcome back, </span>
          <h3>{session.user.name}</h3>
          <span onClick= {()=>signOut()}>Sign out</span>



        </div>
        </div>


        ) : 
        
        (
          <div className={styles.flex}>
            <button className={styles.btn_primary}>Register</button>
            <button className={styles.btn_outlined} onClick = {()=>signIn()}>Login</button >

          </div>

        )

        }

        <ul>
          <li>
            <Image src = "/profile.svg" width = {30} height = {30} alt = "heart" />

            <Link href = "/profile">
            My Account</Link>
          </li>
          <li>
          <Image src = "/my-orders.svg" width = {30} height = {30} alt = "my-orders" />
            <Link href = "/profile/orders"> My Orders</Link>
          </li>
          
          <li>
          <Image src = "/messages.svg" width = {30} height = {30} alt = "messages" />
            <Link href = "/profile/messages"> Messages</Link>
          </li>
          
          <li>
          <Image src = "/address.svg" width = {30} height = {30} alt = "addresses" />
            <Link href = "/profile/address">My Addresses</Link>
          </li>
          <li>
          <Image src = "/heart.svg" width = {30} height = {30} alt = "wishlist" />
            <Link href = "/profile/wishlist"> Wishlist</Link>
          </li>
       

        </ul>



    </div>

  )


}

export default UserMenu

