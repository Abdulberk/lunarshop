import React, {useState} from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import submit from "../../public/search.svg";
import Search from "./Search";

function Main() {

  const [searchVisible, setSearchVisible] = useState(false);

  const menu = [
    {
      title: "Shoes",
      link: "/products/shoes",
    },
    {
      title: "Clothing",
      link: "/products/clothing",
    },
    {
      title: "Accessories",
      link: "/products/accessories",
    },
    {
      title: "Sale",
      link: "/products/sale",
    },
    {
      title: "New",
      link: "/products/new",

    },
    {
      title: "Brands",
      link: "/products/brands",

    }
  ];


  return (
    <div className={styles.main}>
      <div className = {styles.main__container}>

        <Link href="/">
          <a>
            <Image src="/logo.svg" width={216} height={63} alt="logo" className={styles.logo} />
          </a>
        </Link>


        { !searchVisible ? (
            <div className = {styles.middle} >

              <ul>
                {
                  menu.map((item, index) => (
                    <li key = {index}>
                      
                      <Link href = {item.link} >
                        <a>
                          {item.title}
                        </a>
                      </Link>

                      </li>
                  ))

                }
                
             
              </ul>
           
            </div>
        ) : (
               
          <Search setSearchVisible={setSearchVisible} searchVisible={searchVisible}/>
        )}

           
        <div className = {styles.miniMenu}>
          <ul>
            <li onClick = {() => setSearchVisible(true)}>
              <Image src="/search.svg" width={30} height={30} alt="search" />

            </li>
            <li>
              <Link href="/profile/wishlist">
                <a>
                  <Image src="/heart.svg" width={30} height={30} alt="heart" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a>
                  <Image src="/cart.svg" width={30} height={30} alt="cart" />
                </a>
              </Link>
            </li>
            
          </ul>
          
        </div>
        




      </div>
    </div>
    
  );
}

export default Main;
