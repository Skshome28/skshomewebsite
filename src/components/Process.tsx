"use client"
import { motion } from "framer-motion"
import { Users , Pencil ,CheckCircle ,Construction } from "lucide-react";
// import { useState } from "react";
const processSteps = [
  {
    icon: Users,
    title: "Meet your Designer",
    description: "Discuss your plans and details in first consultation",
    number: "01"
  },
  {
    icon: Pencil,
    title: "Get Design",
    description: "Get detailed design related to your project",
    number: "02"
  },
  {
    icon: CheckCircle,
    title: "Finalize the project",
    description: "Finalize the changes and Design to start the working",
    number: "03"
  },
  {
    icon: Construction,
    title: "Execution",
    description: "From manufacturing to Installation we now take care of everything",
    number: "04"
  }
];

const Process = () => {
    // const [activeStep, setActiveStep] = useState(0);
  return (
    <section id="process" className="py-20 px-8 lg:px-16 bg-white relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0  bg-primary-beige opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}/>
    </div>

    <div className="max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-primary-beige text-xl font-medium"
        >
          Our Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-light mt-4"
        >
          We work in 4 easy steps
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connection Line */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-black opacity-20 -translate-y-1/2 z-0" />
            )}
            
            {/* Step Content */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              {/* Step Number */}
              <div className="absolute -top-6 right-8 text-7xl font-light text-primary-beige opacity-20 group-hover:opacity-50 transition-opacity">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-beige bg-opacity-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6 text-primary-beige" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
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
          className="bg-[#FF5C35] text-white hover:bg-[#FF5C35]/90 rounded-full px-8 py-6 text-base"
        >
          Start Your Journey →
        </Button> */}
      </motion.div>
    </div>
  </section>
  )
}

export default Process