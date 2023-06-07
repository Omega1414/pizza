"use client"
import React, { useState, useEffect } from "react"
import CartDesktop from './components/CartDesktop';
import CartMobile from './components/CartMobile';
import CartMobileIcon from './components/CartMobileIcon';
import Footer from './components/Footer';
import Nav from './components/Nav';
import CartProvider from './context/CartContext';
import { usePathname } from "next/navigation"
import './globals.css';
import {Bangers, Quicksand, Roboto_Condensed} from 'next/font/google'
import SplashScreen from "./components/SplashScreen";
export const metadata = {
  title: 'PizzaAl',
}; 
const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});
const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400']
});
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700']
});

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)
  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])
  return (
    <CartProvider>
       <html lang='en'>
      <title>PizzaAl</title>
   <body className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}>
   {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
   <Nav />
   <CartMobileIcon />
   <CartMobile />
   {children}
   <CartDesktop />
   <Footer />
   </>
        )}
   </body>
 </html>
    </CartProvider>
   
  );
}
