"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Globe,
  Home,
  Users,
  Briefcase,
  Building,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react"
import { Link } from "react-router-dom"

interface MobileSidebarProps {
  currentPath?: string
}

export default function MobileSidebar({ currentPath = "/" }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  const menuItems = [
    { slug: "/", label: "Home", icon: Home },
    { slug: "/about", label: "About", icon: Users },
    { slug: "/services", label: "Services", icon: Briefcase },
    { slug: "/hajj-umrah", label: "Hajj & Umrah", icon: Building },
    { slug: "/success-stories", label: "Success Stories", icon: Star },
    { slug: "/contact", label: "Contact", icon: Phone },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Button variant="ghost" size="sm" onClick={toggleSidebar} className="p-2">
          <Menu className="w-6 h-6" />
        </Button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Link to="/" className="flex items-center" onClick={toggleSidebar}>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.div>
                <div className="ml-3">
                  <div className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                    Timeless<span className="text-emerald-600">Consultant</span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium">Immigration & Visa Services</div>
                </div>
              </Link>
              <Button variant="ghost" size="sm" onClick={toggleSidebar} className="p-2">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Navigation Items */}
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.slug}
                      onClick={toggleSidebar}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        currentPath === item.slug
                          ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="p-4 border-t border-gray-200 mt-auto">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Info</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>+44 730 1948 344</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-500" />
                  <span>your@email.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500 mt-0.5" />
                  <span>
                    Rua do rio 27 Odeceixe
                    <br />
                    8670-320 Faro Portugal
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>Mon-Fri 8AM - 6PM</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="p-4 space-y-3">
              <Button
                size="sm"
                variant="outline"
                className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={toggleSidebar}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                onClick={toggleSidebar}
              >
                Free Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}