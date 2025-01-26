"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#F5E6D3] via-[#FDF5E6] to-[#FFFAF0] flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-40" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-light text-[#4A4036] mb-6 tracking-wide">
          Crafting Beautiful Spaces
        </h1>
        <p className="text-xl md:text-2xl text-[#6B5B4E] mb-8 font-light">
          Our website is currently under construction, but our creativity never stops.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 text-[#8B7355] animate-spin" />
          <p className="text-sm text-[#8B7355] italic">
            Designing something special for you
          </p>
        </div>
      </motion.div>
      
      {/* Decorative elements with gradient borders */}
      <div className="fixed top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-[#D4C4B5]/30 m-8" />
      <div className="fixed bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-[#D4C4B5]/30 m-8" />
      
      {/* Subtle decorative circles */}
      <div className="fixed top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-[#F5E6D3]/20 to-transparent blur-xl" />
      <div className="fixed bottom-1/4 left-[15%] w-48 h-48 rounded-full bg-gradient-to-tl from-[#F5E6D3]/20 to-transparent blur-xl" />
    </div>
  );
}