import React from "react";
import styles from "./style.module.scss";
import ProductCard from "./ProductCard";
import {useState, useEffect, useRef} from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Rating from "../rating";


function Showcase({ title, products, type }) {

  const [chosenProducts, setChosenProducts] = useState(products.slice(0, 5));
const [startIndex, setStartIndex] = useState(0)
const [endIndex, setEndIndex] = useState(5)


const nextButtonRef = useRef(null)
const prevButtonRef = useRef(null)


const toggleVisibility = (isVisible, ref) => {

  if (isVisible) {
    ref.current.style.visibility = "visible";
 
  } else {
    ref.current.style.visibility = "hidden";
    
  }

}



useEffect(() => {

  const checkButtons = () => {
    if (endIndex >= products.length) {
      toggleVisibility(false, nextButtonRef)

      
    } else {
      toggleVisibility(true, nextButtonRef)
    }
  
  
    if (startIndex === 0 || startIndex < 0) {
    
      toggleVisibility(false, prevButtonRef)

    } else {
      toggleVisibility(true, prevButtonRef)
    }

  }

  checkButtons()

}, [chosenProducts])


const handleNext = () => {

  const newStartIndex = startIndex + 1;
  const newEndIndex = endIndex + 1;

  setStartIndex(newStartIndex)
  setEndIndex(newEndIndex)
  setChosenProducts(products.slice(newStartIndex, newEndIndex))

}

const handlePrev = () => {

  const newStartIndex = startIndex - 1;
  const newEndIndex = endIndex - 1;

  setStartIndex(newStartIndex)
  setEndIndex(newEndIndex)
  setChosenProducts(products.slice(newStartIndex, newEndIndex))

}


  return (
    <>
    
    <h2 className={styles.showCaseTitle}>{title}</h2>
    <div className={styles.showCaseContainer}>

    <div className = {styles.prev} ref = {prevButtonRef} onClick={handlePrev}>
    <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{color: "#5f717a",}} />
      
    </div>
      
      {type === "specialOffers" ? (
        <div className={styles.specialOffersContainer}>
          {chosenProducts.map((product,index) => (
            <ProductCard
              key={index}
              type={type}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
              showDiscountTag={product.showDiscountTag}
              link={product.link}
              discountRate={product.discountRate}
            />
          ))}
        </div>
      ) : type === "chosen" ? (
        <div className={styles.chosenContainer}>
          {chosenProducts.map((product,index) => (
            <ProductCard
              key={index}
              type={type}
              title={product.title}
              price={product.price}
              rating= {product.rating}
              image={product.image}
              showDiscountTag={product.showDiscountTag}
              link={product.link}
              discountRate={product.discountRate}
            />
          ))}
        </div>
      ) : null}

    <div className = {styles.next} ref = {nextButtonRef} onClick={handleNext}>
    
    <FontAwesomeIcon icon={faAngleRight} size="xl" style={{color: "#5f717a",}} />
        </div>
       
    </div>
   
    </>
  );
}

export default Showcase;