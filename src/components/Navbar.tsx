// import MaxWidthWrapper from "./MaxWidthWrapper"
"use client"
import { Menu , CircleX } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// import { motion } from "motion/react"
const Navbar = () => {

  const[toggleMobile, setToggleMobile] = useState<boolean>(false)
  // const handleMobileOpen= ()=>{
  //   setToggleMobile(true)
  // }
  // const handleMobileclose= ()=>{
  //   setTimeout(()=>{
  //     setToggleMobile(true)
  //   },400)
  // }

  const handleClose =()=>{
    setToggleMobile(false)
  }
  return (
    <div className="bg-transparent w-full h-auto py-2 backdrop-blur-sm fixed z-50 px-10">
            <div className="flex justify-between items-center">
                <Image width={200} height={200} alt="logo" className="w-[70px] lg:w-[100px] h-[50px] lg:h-[80px] rounded-lg" src="/logo.png"/>
                <span className="w-auto h-full p-4 hidden lg:block">
                <ul className=" w-full h-full  flex flex-row justify-evenly gap-16 text-xl font-outfit font-normal text-primary-beige">

                {["Home","About", "Why us", "Services" ,"Process","Testimonials" ,"Contact"].map((item)=>(
                    <Link key={item} href={`#${item.toLowerCase()}`} className=" relative inline-block text-black after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-primary-beige after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">{item}</Link>
                ))}
                
                    
                    
                </ul>
                </span>
                <span className="lg:hidden">
                <Menu onClick={()=>setToggleMobile(true)} className="w-10 h-10 text-primary-beige"/>
                </span>

                {toggleMobile ? 
                <div
                className="absolute right-0 top-0 w-[60%] h-screen z-50 bg-primary-beige lg:hidden flex flex-col items-center justify-center p-10 ">
                  <CircleX className="w-10 h-10" onClick={()=>{setToggleMobile(false)}}/>
                  <ul className=" w-full h-full  flex flex-col justify-center gap-10 items-center text-2xl font-outfit font-normal text-black">
                    

                 <Link href="/#home" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Home</Link>
                    <Link href="/#about" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>About</Link>
                    <Link href="/#why-choose-us" className="hover:text-primary-green cursor-pointer"onClick={handleClose}>Why Us</Link>
                    <Link href="/#services" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Services</Link>
                    <Link href="/#process" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Process</Link>
                    <Link href="/#testimonials" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Testimonials</Link>
                    <Link href="/#contact" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Contact</Link>

                    
                </ul>
                </div>
                  : <></>}
               
            </div>
    </div>
  )
}

export default Navbar