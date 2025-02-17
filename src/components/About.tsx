"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Right Side - Content */}
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-primary-beige text-xl font-medium"
              >
                About Us
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-light leading-tight"
              >
                Fresh perspective, timeless design
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600 text-lg"
              >
                <p>
                  As a young and dynamic interior design studio,<span className="text-primary-beige">SK&apos;s Home Interiors</span>  bring fresh energy 
                  and innovative ideas to every project. Our team combines contemporary 
                  design principles with cutting-edge technology to create spaces that 
                  are both beautiful and functional.
                </p>
                <p>
                  What sets us apart is our commitment to personalization and attention 
                  to detail. We believe that great design should reflect your unique story 
                  and lifestyle, which is why we work closely with each client to create 
                  spaces that are truly their own.
                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8"
              >
                {[
                  { number: "50+", text: "Projects Completed" },
                  { number: "30+", text: "Happy Clients" },
                  { number: "3", text: "Design Awards" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-3xl font-light">{stat.number}</p>
                    <p className="text-gray-600 text-sm">{stat.text}</p>
                  </div>
                ))}
              </motion.div> */}
            </div>


            {/* Left Side - Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-lg overflow-hidden"
              >
                <Image
                  src={"/images/about.png"}
                  alt="Interior Design Studio"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-lg shadow-lg max-w-xs"
              >
                <p className="text-4xl font-light mb-2">100%</p>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </motion.div>
            </div>

            
          </motion.div>
        </div>
      </section>
  )
}

export default About