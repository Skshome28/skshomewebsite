// import { Button } from "./ui/button"

import Image from "next/image"
import Link from "next/link"


const getCurrentYear =()=> {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/#home">
          <Image src="/logo.jpg" width={100} height={100} alt="logo"/>
          </Link>
          <p className="text-gray-400 max-w-xs">
            Creating beautiful, functional spaces that inspire and delight your world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-4">
            {['About', 'Why us', 'Services', 'Process', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        {/* <div className="space-y-6">
          <h3 className="text-lg font-medium">Services</h3>
          <ul className="space-y-4">
            {['Modular Kitchen', 'Home Furniture', 'Office Furniture', 'Turnkey Projects'].map((item) => (
              <li key={item}>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        <div className="space-y-6">
              <h3 className="text-lg font-medium">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Image 
                    src="/instagram.png" 
                    alt="Instagram" 
                    className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    width={1000}
                    height={1000}
                  />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Image 
                    src="/facebook.png" 
                    alt="Facebook" 
                    className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    width={1000}
                    height={1000}
                  />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Image 
                    src="/twitter.png" 
                    alt="X (Twitter)" 
                    className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    width={1000}
                    height={1000}
                  />
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Image 
                    src="/linkedin.png" 
                    alt="LinkedIn" 
                    className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity"
                    width={1000}
                    height={1000}
                  />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

        {/* Newsletter
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="text-gray-400">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <div className="flex space-x-2">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl" 
            />
            <Button className="bg-[#FF5C35] hover:bg-[#FF5C35]/90 rounded-xl">
              Subscribe
            </Button>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-gray-400">
          © {getCurrentYear()}  SK&apos;s Home Interiors. All rights reserved.
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer