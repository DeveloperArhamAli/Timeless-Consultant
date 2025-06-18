import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Globe, Phone, Calendar, PhoneIcon as WhatsApp } from 'lucide-react'
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="flex justify-center">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6 px-4 py-2">Get In Touch</Badge>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Let's Start Your
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              Immigration Journey
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Ready to take the next step? Our expert consultants are here to guide you through every aspect of your
            immigration process. Contact us today for personalized assistance.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                description: "Speak directly with our travel consultants",
                contact: "+44 730 1948 344",
                action: "Call Now",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Mail,
                title: "Email Us",
                description: "Send us your travel and visa questions",
                contact: "your@email.com",
                action: "Send Email",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: WhatsApp,
                title: "WhatsApp",
                description: "Get instant support via WhatsApp",
                contact: "+44 730 1948 344",
                action: "Start Chat",
                color: "from-green-500 to-green-600",
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-6">{method.contact}</p>
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                    {method.action}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

            <div className="flex flex-col items-center">
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">
                Visit Our Office
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Location</h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of Faro, Portugal, our office is easily accessible and equipped with modern
                facilities to ensure comfortable consultations.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {[1, 2, 3].map((_, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                    <Card className="p-6 bg-white border-0 shadow-lg">
                      {index === 0 && (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Office Address</h3>
                            <p className="text-gray-600">
                              Rua do rio 27 Odeceixe
                              <br />
                              8670-320 Faro Portugal
                            </p>
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Clock className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                            <div className="text-gray-600 space-y-1">
                              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                              <p>Saturday: 9:00 AM - 2:00 PM</p>
                              <p>Sunday: Closed</p>
                            </div>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Appointment</h3>
                            <p className="text-gray-600 mb-4">
                              Schedule a consultation at your convenience. We offer both in-person and virtual meetings.
                            </p>
                            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule Now
                            </Button>
                          </div>
                        </div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <p className="text-xl text-gray-600">
              Easily locate our office and plan your visit with our interactive map.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center overflow-hidden"
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.127037232825!2d-8.769297499999999!3d37.4341036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b13c9e853a98d%3A0xeee52080e0b04273!2sR.%20do%20Rio%2027%2C%20Odeceixe%2C%20Portugal!5e0!3m2!1sen!2s!4v1750266490855!5m2!1sen!2s" className="w-full h-full" style={{border : 0}}  loading="lazy"></iframe>    
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    Timeless<span className="text-emerald-400">Consultant</span>
                  </div>
                  <div className="text-sm text-gray-400">Immigration & Visa Services</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Your trusted partner for visa and immigration services worldwide. We make global opportunities
                accessible through expert guidance and personalized service.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/about" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-400 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/success-stories" className="hover:text-emerald-400 transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-emerald-400 transition-colors">
                    Blog & Resources
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-400" />
                  <span>
                    Rua do rio 27 Odeceixe
                    <br />
                    8670-320 Faro Portugal
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>sales@timeless-consultant.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span>Mon-Fri 8AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Timeless Consultant. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
