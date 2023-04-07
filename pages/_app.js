
import {Provider} from 'react-redux'
import store from '../store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.scss'
import Header from '../components/header/index'
import Footer from '../components/footer/index'



let persistor = persistStore(store)


export default function App({ Component, pageProps: { session, ...pageProps } }) {




  return (
    <>
    <Head>
      <title>
        Başlık
      </title>
      <meta name = "description" content = "LunarShop E-commerce software" />
      <meta name = "keywords" content = "Anahtar Kelimeler" />
      <meta name = "author" content = "Yazar" />

    </Head>
    <SessionProvider session={session}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
    </SessionProvider>
    </>
  )

}
