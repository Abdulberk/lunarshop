import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Rating from "../rating";
import { useEffect, useState, memo } from "react";


const ProductCard = ({

  type,
  title,
  price,
  rating,
  image,
  showDiscountTag,
  link,
  discountRate,
  id
}) =>{



  const router = useRouter();

  const handleLink = async () => {
    if (link === undefined || null) return;
    await router.push(link);
  };




  return (
    <div className={styles.productCard}>
      <div className={styles.productCard__imageContainer}>
        <Image
          key = {image}
          src={image}
          width={184}
          height={184}
          alt="none"
          onClick={handleLink}
          
                  />

        {showDiscountTag && (
          <div className={styles.discountCard}>
            <span>{discountRate}</span>
          </div>
        )}
      </div>

      {type === "chosen" && (
        <div className={styles.productCard__details}>
          <div className={styles.productCard__details__title}>
            <span>{title}</span>
          </div>
          <div className={styles.productCard__details__rating}>
            <span>{

              <Rating key= {id} value={rating} totalStars={5} />
              
              }</span>
          </div>

          <div className={styles.productCard__details__price}>
            <span>{price}</span>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default React.memo(ProductCard);
