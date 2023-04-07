import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import UserMenu from "./UserMenu";
import avatar from "../../public/avatar.png";
import { useSession, signIn, signOut } from "next-auth/react"
 
function Top() {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const { data: session, status } = useSession();


  return (
    <> 
      <div className={styles.top}>
        <div className={styles.top__container}>
          <div></div>

          <ul className={styles.top__list}>
            <li className={styles.li}>

              
              <Image
                src="/heart.svg"
                width={20}
                height={20}
                alt="heart"
                className={styles.test}
              />
              <Link href="/profile/wishlist">
                <span>Wishlist</span>
              </Link>
            </li>

            <li className={styles.li}>
              <span className={styles.cart}>3</span>
              <Image src="/cart.svg" width={22} height={22} alt="cart" />

              <Link href="/cart">
                <span>Cart</span>
              </Link>
            </li>
           

            <li
              className={styles.li}
              onMouseMove={() => setUserMenuVisible(true)}
              onMouseLeave={() => setUserMenuVisible(false)}
            >

                

              {session ? (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    
                    <Image
                      src={session.user.image || avatar}
                      width={64}
                      height={64}
                      alt="avatar"
                    />
                    <span>{session.user.name}</span>
                  </div>
                </li>
              ) : (
                <li className={styles.li}>
                  <div className={styles.flex}>
                    <span>Account</span>
                  </div>
                </li>
              )}
              {userMenuVisible && <UserMenu session={session} />}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Top;
