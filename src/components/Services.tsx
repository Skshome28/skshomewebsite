"use client"
import { motion } from "framer-motion"
import Image from "next/image";
// import { Button } from "./ui/button";
const services = [
    {
      title: "Modular Kitchen",
      description: "End-to-end kitchen solutions from design to installation",
      image: "/images/kitchen.png",
      size: "large"
    },
    {
      title: "Modular Home Furniture",
      description: "Custom home furniture that maximizes space and style",
      image: "/images/home.png",
      size: "medium"
    },
    {
      title: "Modular Office Furniture",
      description: "Professional workspace solutions for maximum productivity",
      image: "/images/office.png",
      size: "medium"
    },
    {
      title: "Turnkey Projects",
      description: "Complete interior solutions for your entire space",
      image: "/images/turnkey.png",
      size: "large"
    }
  ];
const Services = () => {
  return (
    <section id="services" className="py-20 px-8 lg:px-16">
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
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-light mt-4"
            >
              Comprehensive Interior Solutions
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl ${
                  service.size === 'large' ? 'md:col-span-2 aspect-[2/1]' : 'aspect-square'
                }`}
              >
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/60 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-white text-2xl md:text-3xl font-light mb-4"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-white/80 max-w-md"
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-6"
                  >
                    {/* <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors rounded-full"
                    >
                      Learn More →
                    </Button> */}
                  </motion.div>
                </div>
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
            {/* <Button
              className="bg-black text-white hover:bg-black/90 rounded-full px-8 py-6 text-base"
            >
              View All Services →
            </Button> */}
          </motion.div>
        </div>
      </section>
  )
}

export default Services