import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

function FooterLinks() {
  return (
    <div className={styles.footer__links}>
      {links.map((link, index) => (

        <ul key={index}>
          <li key={index}>
            {index ==0 && <Image className = {styles.footer__svg} src="/logo.svg" width = {229} height = {64} alt="logo" />}
            <h3>
              <b>{link.title}</b>
            </h3>
          </li>

          {link.links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

const links = [
  {
    title: "About Us",
    links: [
      {
        title: "About Us",
        href: "/about-us",
      },
    
      {
        title: "Lunar Blog",
        href: "/lunar-blog",
      },
      {
        title: "Contact Us",
        href: "/contact",
      },
    ],
  },
  {
    title: "Customer Service",
    links: [
      {
        title: "Contact Us",
        href: "/contact-us",
      },
      {
        title: "Shipping & Returns",
        href: "/shipping-returns",
      },

      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Size Guide",
        href: "/size-guide",
      },
      {
        title: "Gift Cards",
        href: "/gift-cards",
      },
    ],
  },
  {
    title: "My Account",
    links: [
    
      {
        title: "My Orders",
        href: "/my-orders",
      },
      {
        title: "My Wishlist",

        href: "/wishlist",
      },
      {
        title: "My Cart",
        href: "/my-cart",
      },
      {
        title: "My Addresses",
        href: "/my-addresses",
      },
        {
        title: "My Profile",
        href: "/my-profile",
        },
        
 
   
    ],
  },
];

export default FooterLinks;
