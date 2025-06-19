import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, Phone, Calendar, PhoneIcon as WhatsApp } from 'lucide-react'

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
                contact: "+447301948344",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Mail,
                title: "Email Us",
                description: "Send us your travel and visa questions",
                contact: "your@email.com",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: WhatsApp,
                title: "WhatsApp",
                description: "Get instant support via WhatsApp",
                contact: "+447301948344",
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
                            <p className="text-gray-600">721 Stockport Road Manchester M19 3AG</p>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.114350579555!2d-2.1917885999999993!3d53.4485421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb3db0b87d363%3A0x3473f7cabb0b6209!2s721%20Stockport%20Rd%2C%20Levenshulme%2C%20Manchester%20M19%203AG%2C%20UK!5e0!3m2!1sen!2s!4v1750316168436!5m2!1sen!2s" className="w-full h-full" style={{border : 0}}  loading="lazy"></iframe>    
          </motion.div>
        </div>
      </section>
    </div>
  )
}
