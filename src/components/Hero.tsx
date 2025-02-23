"use client"


import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="relative h-screen">
         <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        poster="/video-poster.png"
      >
        <source
          src="/skhome.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-6xl px-4">
          <motion.h1 
          initial={{
            opacity:0,
            y:-50
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:2
          }}
          viewport={{
            once:true
          }}
          className=" text-[40px] leading-[40px]  md:text-8xl  md:leading-[90px]  text-white mb-6  ">
          Crafting Spaces Beyond Imagination
          </motion.h1>
          <motion.div initial={{
            opacity:0,
            y:30
          }} whileInView={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:2
          }}
          viewport={{
            once:true
          }}
          >
          <p className=" font-outfit text-xl md:text-2xl text-white/90">
          Transform Dreams into Reality, One Space at a Time with SK&apos;s
          </p>
          <Link href="#contact">
          <Button 
                className="bg-primary-beige text-white hover:bg-black/90 rounded-full px-8 py-6 text-base mt-4"
              >
                Get Consultation 
          </Button>

          </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero