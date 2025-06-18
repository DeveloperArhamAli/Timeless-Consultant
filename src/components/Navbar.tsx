import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileSidebar from "@/components/mobile-sidebar"

function Navbar() {
    return (
        <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white shadow-lg sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <Link to="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
              >
                <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="ml-2 sm:ml-3">
                <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Timeless<span className="text-emerald-600">Consultant</span>
                </div>
                <div className="text-xs text-slate-600 font-medium">Immigration & Visa Services</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                { slug: "/", label: "Home" },
                { slug: "/about", label: "About" },
                { slug: "/services", label: "Services" },
                { slug: "/hajj-umrah", label: "Hajj & Umrah" },
                { slug: "/success-stories", label: "Success Stories" },
                { slug: "/contact", label: "Contact" },
              ].map((item) => (
                <motion.div key={item.slug} whileHover={{ y: -2 }}>
                  <NavLink
                    to={item.slug}
                    className="text-slate-700 hover:text-emerald-600 font-medium transition-colors relative group"
                  >
                    {item.label}
                    <span
                      className="absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 w-0 group-hover:w-full"
                    ></span>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">Call</span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-3 sm:px-6"
                >
                  <span className="text-xs sm:text-sm">Free Consultation</span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Sidebar */}
            <MobileSidebar currentPath="/" />
          </div>
        </div>
      </motion.nav>
    )
}
export default Navbar