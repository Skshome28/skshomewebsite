"use client"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Phone , MapPin , Mail } from 
"lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useForm } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const subject = encodeURIComponent("Interior Design Project Inquiry");
        const body = encodeURIComponent(`
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Phone: ${data.phone}
    
    Message:
    ${data.message}
        `);
        
        window.location.href = `mailto:skshomeinteriors@gmail.com?subject=${subject}&body=${body}`;
      };
    
  return (
    <section id="contact" className="py-20 px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
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
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-light mt-4"
        >
          Let&apos;s Create Your Dream Space
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-light mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-beige bg-opacity-10 rounded-full flex items-center justify-center">
                <Mail className="  w-4 h-6 md:w-6 md:h-6 text-primary-beige" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className=" text-md md:text-lg">skshomeinteriors@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-beige bg-opacity-10 rounded-full flex items-center justify-center">
                <Phone className="md:w-6 md:h-6 w-4 h-4 text-primary-beige" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-md md:text-lg">+919130792151</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-primary-beige bg-opacity-10 rounded-full flex items-center justify-center">
                <MapPin className=" md:w-6 md:h-6 w-4 h-4 text-primary-beige" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className=" text-md md:text-lg">Shubheccha Residency,Jagtap Dairy,Pune- 411027</p>
              </div>
            </div>
          </div>

          {/* <div className="pt-8">
            <p className="text-gray-600 mb-4">Follow us on social media</p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 bg-primary-beige bg-opacity-10 rounded-full flex items-center justify-center hover:bg-primary-beige hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div> */}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">First Name</label>
                <Input 
                  {...register("firstName", { required: true })}
                  type="text" 
                  placeholder="John"
                  className={`rounded-xl border-gray-200 focus:border-primary-beige focus:ring-primary-beige ${errors.firstName ? 'border-red-500' : ''}`}
                />
                {errors.firstName && (
                  <span className="text-sm text-red-500">First name is required</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Last Name</label>
                <Input 
                  {...register("lastName", { required: true })}
                  type="text" 
                  placeholder="Doe"
                  className={`rounded-xl border-gray-200 focus:border-primary-beige focus:ring-primary-beige ${errors.lastName ? 'border-red-500' : ''}`}
                />
                {errors.lastName && (
                  <span className="text-sm text-red-500">Last name is required</span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email</label>
              <Input 
                {...register("email", { 
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                type="email" 
                placeholder="john@example.com"
                className={`rounded-xl border-gray-200 focus:border-primary-beige focus:ring-primary-beige ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && (
                <span className="text-sm text-red-500">Valid email is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Phone</label>
              <Input 
                {...register("phone", { required: true })}
                type="tel" 
                placeholder="+1 (555) 123-4567"
                className={`rounded-xl border-gray-200 focus:border-primary-beige focus:ring-primary-beige ${errors.phone ? 'border-red-500' : ''}`}
              />
              {errors.phone && (
                <span className="text-sm text-red-500">Phone number is required</span>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">Message</label>
              <Textarea 
                {...register("message", { required: true })}
                placeholder="Tell us about your project..."
                className={`rounded-xl border-gray-200 focus:border-primary-beige focus:ring-primary-beige min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && (
                <span className="text-sm text-red-500">Message is required</span>
              )}
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary-beige text-white hover:bg-primary-beige/90 rounded-xl py-6"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
  )
}

export default Contact