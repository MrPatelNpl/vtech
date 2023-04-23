import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../navbar'
import Footer from '../footer'
// import { Main } from 'next/document'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Vishma Technology</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
                {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
                <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
                <link rel="stylesheet" href="swiper-bundle.min.css" />
            </Head>
            <Navbar />
            <br />
            <section>
                {children}
            </section>
            <Footer />


            {/* <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script> */}
            {/* script for swiper  */}
            {/* <Script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></Script> */}
            {/* <Script src="swiper-bundle.min.js"></Script> */}
            {/* <!-- Script for custom js --> */}
            <Script src="app.js"></Script>
            {/* <!-- Script for data aos plugin --> */}
            {/* <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script> */}
            {/* <Script>
        AOS.init({
            offset: 120,
            duration: 750,
            once: true,
            easing: 'ease-in'
        });
    </Script> */}


        </>
    )
}
