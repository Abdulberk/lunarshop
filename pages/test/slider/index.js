import React from 'react'
import Slider from '../../../components/slider'


const slides = [
    {
      title: 'Slide 1',
      image: 'https://res.cloudinary.com/divmyjqwk/image/upload/v1680707937/slider1_vqvn2j.png',
      link : 'https://res.cloudinary.com/divmyjqwk/image/upload/v1680707937/slider1_vqvn2j.png'
    },
    {
      
      title: 'Slide 2',
      image: 'https://res.cloudinary.com/divmyjqwk/image/upload/v1680708823/italian_kptxr5.png',
      link : 'https://res.cloudinary.com/divmyjqwk/image/upload/v1680708823/italian_kptxr5.png'
    },
    {
      
      title: 'Slide 3',
      image: 'https://res.cloudinary.com/divmyjqwk/image/upload/v1680707937/slider1_vqvn2j.png',
      link : 'https://res.cloudinary.com/divmyjqwk/image/upload/v1680707937/slider1_vqvn2j.png'
    },
  
  ]

function SliderTest() {
  return (
    <div>   
        <Slider slides = {slides} />

    </div>
  )
}

export default SliderTest