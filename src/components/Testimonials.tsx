"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import testi from '../../public/Images/testi-1.png'
import testi2 from '../../public/Images/testi-2.png'

const testimonials = [
  {
    id: 1,
    name: "Shubhangi Jadhav",
    company: "Pune",
    position: "House Wife",
    content: "Every corner of our home now reflects warmth and thoughtfulness — thanks to SK’s Home Interiors. They were patient with my ideas, gave me suggestions I hadn’t even thought of, and designed a kitchen and living room that I absolutely love. The storage solutions, color palette, and decor choices were spot on. They didn’t just design a house — they helped us create a home",
    image: testi2,
    rating: 5
  },
  {
    id: 2,
    name: "Raviraj Jadhav",
    company: "Ravet, Pune",
    position: "Home Owner", 
    content: "From the first consultation to the final touches, SK’s Home Interiors delivered exactly what we envisioned — and more. Their team understood our lifestyle, space, and budget, and transformed our Ravet flat into a modern, elegant home. The process was smooth, transparent, and timely. I truly appreciated their commitment to quality and finish. Highly recommended!",
    image: testi,
    rating: 5
  }
];

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dvxyyw9vl/image/upload/v1754207230/SK_01_31_bd30pc.jpg",
    alt: "Minimilistic Living area",
    title: "Contemporary Living Area"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dvxyyw9vl/image/upload/v1754208189/SK_02_3_k7cwcv.jpg",
    alt: "Tv Unit",
    title: "Elegant Tv unit and Dining setup"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dvxyyw9vl/image/upload/v1754207218/SK_01_13_yaikyr.jpg",
    alt: "Luxurious bedroom design",
    title: "Master Bedroom Suite"
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dvxyyw9vl/image/upload/v1754207226/SK_01_25_xb42cj.jpg",
    alt: "Kitchen trolly",
    title: "Modular Kitchen"
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dvxyyw9vl/image/upload/v1754207226/SK_01_23_yzivjw.jpg",
    alt: "Kids bedroom",
    title: "A playfull kids bedroom"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dvxyyw9vl/image/upload/v1754208189/SK_02_5_b19sxj.jpg",
    alt: "Home for Divinity",
    title: "Special Place for Divinity"
  }
];

export default function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [videoPlaying, setVideoPlaying] = useState(false);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id='testimonials' className="py-24 bg-gradient-to-br bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
           <h2 className='text-primary-beige text-xl font-medium'>Testimonials</h2> 
          <h2 className="text-5xl font-light text-stone-800 mb-6">
            Client Stories & Portfolio
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we transform spaces into extraordinary experiences through the voices of our satisfied clients and glimpses of our finest work.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-stone-200/50 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-stone-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Quote className="text-primary-beige w-8 h-8 mb-6 opacity-60" />
                <p className="text-stone-700 text-lg leading-relaxed mb-8 font-light">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary-beige">
                    <Image
                    width={200}
                    height={200}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-stone-600 text-sm">
                      {testimonial.position}
                    </p>
                    <p className="text-primary-beige text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Section */}
         <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-stone-800 text-center mb-12">
              See What our clients has to say
            </h3>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="aspect-video bg-stone-900 relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wyxGEYQgiAM?si=SkmBJVLv-HoUD9S9"
                  title="Interior Design Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 ring-1 ring-black/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-light text-stone-800 text-center mb-12">
            Portfolio Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-full p-3"
                  >
                    <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fullscreen Gallery Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain rounded-lg"
                  width={1000}
                  height={1000}
                />
                
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image Info */}
                <div className="absolute bottom-0 left-4 right-4 text-center bg-transparent backdrop-blur-sm ">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className=""
                  >
                    <h4 className="text-white md:text-lg font-medium mb-1 text-md ">
                      {galleryImages[selectedImage].title}
                    </h4>
                    {/* <p className="text-black/80 text-sm">
                      {selectedImage + 1} of {galleryImages.length}
                    </p> */}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}