import React from 'react'
import Showcase from '../../../components/showcase'
import Rating from '../../../components/rating'

function ShowcaseTest() {

const products = [
    {
    id : 1,
    type : "chosen",
    title : "title",
    price : "$300",
    rating : 3.5,
    image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560269/chose4_ig43kr.webp",
    showDiscountTag : false,
    link : "/",
    discountRate : "10%",


    },
    {
        id : 2,
        type : "chosen",
        title : "title2",
        price : "$230",
        rating : 3,  
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560269/chose3_i8hycf.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
        
    },
    {   
        id : 3,
        type : "chosen",
        title : "title3",
        price : "$200",
        rating : 4.5,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 4,
        type : "chosen",
        title : "title4",
        price : "$1000",
        rating : 2,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose2_e78yvc.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 5,
        type : "chosen",
        title : "title5",
        price : "$1500",
        rating : 2,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose5_ruab1b.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 6,
        type : "chosen",
        title : "title6",
        price : "$750",
        rating : 2,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose5_ruab1b.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 7,
        type : "chosen",
        title : "title7",
        price : "$800",
        rating : 2,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose5_ruab1b.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
    
    },
    {   
        id : 8,
        type : "chosen",
        title : "title8",
        price : "$900",
        rating : 2,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose5_ruab1b.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 9,
        type : "chosen",
        title : "title9",
        price : "$1000",
        rating : 5,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose5_ruab1b.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
        
    },
    {   
        id : 10,
        type : "chosen",
        title : "title10",
        price : "$1100",
        rating : 1,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 11,
        type : "chosen",
        title : "title11",
        price : "$1200",
        rating : 1.5,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 12,
        type : "chosen",
        title : "title12",
        price : "$1300",
        rating :2.5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 13,
        type : "chosen",
        title : "title13",

        price : "$1400",

        rating : 3.5,
        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 14,
        type : "chosen",
        title : "title14",
        price : "$1500",
        rating : 5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 15,
        type : "chosen",
        title : "title15",
        price : "$1600",
        rating :2.5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",

    },
    {   
        id : 16,
        type : "chosen",
        title : "title16",
        price : "$1700",
        rating : 3.5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",


        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
    },
    {   
        id : 17,
        type : "chosen",
        title : "title17",
        price : "$1800",
        rating : 4.5,


        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
    },
    {   
        id : 18,
        type : "chosen",
        title : "title18",
        price : "$1900",
        rating :3.5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
    },
    {   
        id : 19,
        type : "chosen",
        title : "title19",

        price : "$2000",

        rating : 2.5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
    },
    {   
        id : 20,
        type : "chosen",
        title : "title20",
        price : "$2100",
        rating : 3.5,

        image : "https://res.cloudinary.com/divmyjqwk/image/upload/v1680560268/chose1_turdiw.webp",
        showDiscountTag : false,
        link : "/",
        discountRate : "10%",
    },



]


  return (
    <>
        <Showcase title = "Chosen By Experts" products = {products} type = "chosen" showDiscountTag = {false}/>
    </>
  )
}

export default ShowcaseTest