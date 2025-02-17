"use client"
import { motion } from "framer-motion"
import { Hammer, Palette , ClipboardCheck,PiggyBank, HeartHandshake, ArrowBigRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
const features = [
    {
      icon: Hammer,
      title: "Expert Craftsmanship",
      description: "Unmatched attention to detail with high-quality materials and finishes."
    },
    {
      icon: Palette,
      title: "Personalized Designs",
      description: "Custom-tailored interiors reflecting your unique style and needs."
    },
    {
      icon: ClipboardCheck,
      title: "Seamless Project Management",
      description: "From concept to completion, we ensure a smooth, hassle-free experience."
    },
    {
      icon: PiggyBank,
      title: "Budget-Friendly Solutions",
      description: "Premium designs that align with your budget, without compromising on quality."
    },
    {
      icon: HeartHandshake,
      title: "After-Sales Support",
      description: "Continued support and maintenance to keep your space looking fresh and elegant."
    }
  ];


const WhyUs = () => {
  return (
    <section id="why-choose-us" className="py-20 px-8 lg:px-16 bg-primary-beige/20">
      
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary-beige text-xl font-medium"
            >
              Why Choose Us ?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-light mt-4"
            >
              Elevate Your Space with Excellence
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-beige bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-beige" />
                </div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="#contact">
              <Button
                className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-base"
              >
                Start Your Project <ArrowBigRight/>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
  )
}

export default WhyUs