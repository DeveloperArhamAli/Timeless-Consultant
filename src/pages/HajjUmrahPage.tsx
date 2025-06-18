"use client"
import { motion } from "framer-motion"
import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  CheckCircle,
  ArrowRight,
  Users,
  Calendar,
  Plane,
  Building,
  Shield,
  Gift,
  PhoneIcon as WhatsApp,
} from "lucide-react"
import { Link } from "react-router-dom"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HajjUmrahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-emerald-50">
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                  🕋 Hajj & Umrah Services
                </Badge>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                Sacred Journey to
                <span className="block text-transparent bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text">
                  The Holy Land
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                Experience a spiritually fulfilling journey with our premium Hajj & Umrah packages. Serving pilgrims
                from the United Kingdom and Pakistan with complete care and guidance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg shadow-lg"
                  >
                    Book Umrah 2025
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg"
                  >
                    View Packages
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-l-4 border-purple-500"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Early Bird Offer</h3>
                    <p className="text-sm sm:text-base text-purple-600">
                      Book Early to Avail Discounted Rates for Umrah Season 2025!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-first lg:order-last"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-100 to-emerald-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Kaaba in Mecca - Sacred pilgrimg destination for Hajj and Umrah"
                  width={500}
                  height={600}
                  className="rounded-xl sm:rounded-2xl shadow-2xl w-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-4 sm:top-8 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 bg-purple-200 rounded-full opacity-60"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Types */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
              Our Packages
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Choose Your Sacred Journey
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer carefully crafted packages to suit every budget and preference, ensuring your spiritual journey
              is comfortable and memorable.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                title: "Economy Package",
                price: "From £1,299",
                duration: "7-10 Days",
                accommodation: "3-Star Hotels",
                features: [
                  "Return flights from UK",
                  "3-star accommodation in Makkah & Madinah",
                  "Visa processing included",
                  "Group transportation",
                  "Basic guided tours",
                  "24/7 support",
                ],
                color: "from-blue-500 to-blue-600",
                popular: false,
              },
              {
                title: "Premium Package",
                price: "From £2,199",
                duration: "10-14 Days",
                accommodation: "4-Star Hotels",
                features: [
                  "Premium flights with good timings",
                  "4-star hotels close to Haram",
                  "Private transportation",
                  "Comprehensive guided tours",
                  "Ziyarat (religious site visits)",
                  "Dedicated tour guide",
                  "Premium meals included",
                ],
                color: "from-purple-500 to-purple-600",
                popular: true,
              },
              {
                title: "Luxury Package",
                price: "From £3,499",
                duration: "14-21 Days",
                accommodation: "5-Star Hotels",
                features: [
                  "Business class flights available",
                  "5-star luxury hotels",
                  "VIP transportation",
                  "Private guided tours",
                  "Extended Ziyarat program",
                  "Personal concierge service",
                  "Gourmet dining experiences",
                ],
                color: "from-emerald-500 to-emerald-600",
                popular: false,
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`${index === 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <Card
                  className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white h-full ${pkg.popular ? "ring-2 ring-purple-500 ring-opacity-50" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0">
                      <div className="bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-center py-2 text-xs sm:text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardContent className={`p-6 sm:p-8 ${pkg.popular ? "pt-12 sm:pt-16" : ""}`}>
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}
                    >
                      <Building className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                    <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      {pkg.duration} • {pkg.accommodation}
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {pkg.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-xs sm:text-sm text-gray-700"
                        >
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mr-2 sm:mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className={`w-full text-sm ${
                          pkg.popular
                            ? "bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-700 hover:to-emerald-700 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        Book This Package
                        <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge className="bg-white text-purple-700 border-purple-200 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
              What's Included
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Complete Hajj & Umrah Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of your spiritual journey is carefully planned and managed by our experienced team.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Plane,
                title: "Flight Arrangements",
                description: "Return flights from UK with convenient timings and reliable airlines",
              },
              {
                icon: Building,
                title: "Premium Accommodation",
                description: "3, 4, and 5-star hotels close to Haram for easy access",
              },
              {
                icon: Users,
                title: "Guided Tours",
                description: "Expert guides for Ziyarat and religious site visits",
              },
              {
                icon: Shield,
                title: "Visa Processing",
                description: "Complete visa arrangements and documentation support",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  >
                    {React.createElement(service.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-purple-600" })}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 via-emerald-600 to-purple-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6"
          >
            Begin Your Sacred Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-purple-100 mb-6 sm:mb-8 leading-relaxed"
          >
            Contact us now to book your Hajj or Umrah package. Our experienced team is ready to guide you through every
            step of your spiritual journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-lg"
              >
                <WhatsApp className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp: +44 730 1948 344
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-purple-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-lg"
              >
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Book Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                >
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold">
                    Timeless<span className="text-emerald-400">Consultant</span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Travel & Immigration Services</div>
                </div>
              </motion.div>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md">
                Your trusted partner for Hajj, Umrah, and travel services. We make sacred journeys accessible through
                expert guidance and personalized service.
              </p>
              <div className="flex gap-3 sm:gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Our Services" },
                  { href: "/hajj-umrah", label: "Hajj & Umrah" },
                  { href: "/success-stories", label: "Success Stories" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link) => (
                  <motion.li key={link.href} whileHover={{ x: 5 }}>
                    <Link to={link.href} className="hover:text-emerald-400 transition-colors">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <WhatsApp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <span>+44 730 1948 344</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <span>your@email.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <span>24/7 Support Available</span>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2024 Timeless Consultant. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
