"use client"
import { motion, easeIn } from "framer-motion"
import { LucideCross, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
const Navbar = () => {
  const[toggleMobile , setToggleMobile] = useState<boolean>(true);
  const handleClose = ()=>{
    setToggleMobile(false);
  }
  return (
    <div className="flex justify-between items-center h-[50px]">
        <div className="text-2xl font-bold">
            
            <motion.p
            initial={{
                x:-10,
                opacity:0
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 , ease:easeIn, delay:0.5 }}
            >
            SK
            </motion.p>
            </div>
        <div className="md:flex flex-row justify-center items-center gap-10 text-xl font-thin hidden">
        {['Home', 'About', 'Why us', 'Services',"Process" ,"Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black hover:text-black/70 transition-colors "
              whileHover={{ y: -2 }}
              initial={{
                x:10,
                opacity:0
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 , ease:easeIn, delay:0.5 }}
            >
              {item}
            </motion.a>
          ))}
       
          
        </div>
          {/* mobile-Nav */}
          < motion.div
          initial={{
            x:10,
            opacity:0
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 , ease:easeIn, delay:0.5 }}
          className="md:hidden"
          >
          <Menu className="h-6 w-6 md:hidden" onClick={()=>setToggleMobile(true)}/>
          </motion.div>
         
         {toggleMobile ? 
                <div
                className="absolute right-0 top-0 w-[60%] h-screen z-100 bg-white md:hidden flex flex-col items-center justify-center p-10 ">
                  <LucideCross className="w-10 h-10" onClick={()=>{setToggleMobile(false)}}/>
                  <ul className=" w-full h-full  flex flex-col justify-center gap-10 items-center text-2xl font-outfit font-normal text-black">
                    

                    <Link href="/#home" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Home</Link>
                    <Link href="/#about" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>About</Link>
                    <Link href="/#why-choose-us" className="hover:text-primary-green cursor-pointer"onClick={handleClose}>Why Us</Link>
                    <Link href="/#services" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Services</Link>
                    <Link href="/#process" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Process</Link>
                    <Link href="/#contact" className="hover:text-primary-green cursor-pointer" onClick={handleClose}>Contact</Link>


                    
                </ul>
                </div>
                  : <></>}

         </div>
  )
}

export default Navbar