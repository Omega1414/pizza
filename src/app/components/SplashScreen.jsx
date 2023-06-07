'use client'
import React, { useState, useEffect } from "react"
import Image from "next/image"
import anime from "animejs"

const SplashScreen = ({ finishLoading }) => {
  const [isLounted, setIsLounted] = useState(false)
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 200,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 200,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 10,
        scale: 1,
        duration: 200,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 10,
        scale: 1.25,
        duration: 200,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 10,
        scale: 1,
        duration: 200,
        easing: "easeInOutExpo",
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsLounted(true), 1)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="flex h-screen items-center justify-center w-screen bg-primary bg-pattern "
    >
   <Image id='logo' src={'/pizza.gif'} width={100} height={72} alt=''  />
    </div>
  )
}

export default SplashScreen
