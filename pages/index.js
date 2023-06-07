import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import styles from '../styles/Home.module.scss'
import Main from '../components/home/main/index'
import ShowcaseTest from './test/showcase/index'
import SliderTest from './test/slider/index'






export default function Home() {
  return (
    <>

   
        <SliderTest />
        <ShowcaseTest />

    

   
      
    </>
  )
}
