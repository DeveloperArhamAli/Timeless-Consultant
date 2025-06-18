import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  CheckCircle,
  ArrowRight,
  Plane,
  GraduationCap,
  Building,
  Users,
  Heart,
  Star,
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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6 px-4 py-2">Our Services</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Comprehensive
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              Immigration Solutions
            </span>
          </motion.h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
            From tourist visas to permanent residency, we provide expert guidance for all your immigration needs. Our
            comprehensive services are designed to make your journey to global opportunities smooth and successful.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {/* Study Visa Assistance */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">🎓 Study Visa Assistance</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We provide expert guidance and complete support to students who dream of studying abroad at top-ranked
                  universities worldwide.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ Study at Top-Ranked Universities in:</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      "United Kingdom (UK)",
                      "United States (USA)",
                      "Canada",
                      "Australia",
                      "Europe (Germany, Italy, Sweden, etc.)",
                    ].map((country, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Our Services Include:</h3>
                  {[
                    "University Selection Guidance",
                    "Admission Process Support",
                    "Visa Application Preparation",
                    "Scholarship Guidance",
                    "Pre-Departure Briefing",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                  Learn More About Study Visas
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Students studying at university campus"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-xl w-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-200 rounded-2xl opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-300 rounded-2xl opacity-60"></div>
              </motion.div>
            </motion.div>

            {/* Visit Visa Processing */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Airplane flying over beautiful landscape for travel visa"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-xl w-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-200 rounded-2xl opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-300 rounded-2xl opacity-60"></div>
              </motion.div>
              <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">🛂 Visit Visa Processing</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Travel anywhere in the world hassle-free. We handle your complete visit visa process with fast and
                  transparent service.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🌍 Destinations include:</h3>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {[
                      "United Kingdom (UK)",
                      "United States (USA)",
                      "United Arab Emirates (UAE)",
                      "Canada",
                      "Europe (Schengen Visa)",
                      "Turkey, Saudi Arabia, Malaysia, and more",
                    ].map((destination, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{destination}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900">Why Choose Us?</h3>
                  {[
                    "✔️ Fast Processing",
                    "✔️ Personalized Documentation Support",
                    "✔️ Visa Interview Preparation (if required)",
                    "✔️ Transparent Process",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                  Apply for Visit Visa
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Travel & Tourism */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">🗺️ Travel & Tourism Plans</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Explore amazing destinations with our carefully crafted tour packages. From Pakistan's natural beauty
                  to international adventures.
                </p>
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🇵🇰 Explore Pakistan</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Hunza Valley Tours",
                        "Skardu & Fairy Meadows",
                        "Swat & Murree Hills",
                        "Cultural Tours to Lahore, Karachi, Islamabad",
                      ].map((tour, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{tour}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🇦🇪 Discover UAE</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Dubai Desert Safari",
                        "Burj Khalifa Tours",
                        "Abu Dhabi Grand Mosque",
                        "Adventure & Water Parks",
                      ].map((tour, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{tour}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🇬🇧 United Kingdom Tours</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "London City Tours",
                        "Historic Castles & Cathedrals",
                        "Scotland Highlands",
                        "Lake District & Wales",
                      ].map((tour, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{tour}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                  Explore Tour Packages
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Beautiful mountain landscape for travel and tourism"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-xl w-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 rounded-2xl opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-purple-300 rounded-2xl opacity-60"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-white text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🏆 Your Trusted Travel Partner</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you with all your travel and visa needs. Trusted by hundreds of satisfied travelers
              worldwide.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Experienced & Certified Agents",
                description: "Our team of certified travel and visa experts brings years of experience",
                features: ["Licensed professionals", "Industry expertise", "Proven track record"],
              },
              {
                icon: CheckCircle,
                title: "Hassle-Free Process",
                description: "We handle all the paperwork and complex procedures for you",
                features: ["End-to-end service", "Documentation support", "Process management"],
              },
              {
                icon: Building,
                title: "Best Pricing & Packages",
                description: "Competitive rates and value-packed packages for all budgets",
                features: ["Transparent pricing", "No hidden costs", "Value for money"],
              },
              {
                icon: Heart,
                title: "Personalized Customer Support",
                description: "Dedicated support team available to assist you throughout your journey",
                features: ["24/7 support", "Personal assistance", "Multi-language support"],
              },
              {
                icon: Star,
                title: "High Success Rate",
                description: "Proven track record of successful visa applications and satisfied customers",
                features: ["99% success rate", "Quick processing", "Reliable service"],
              },
              {
                icon: Globe,
                title: "International Destinations",
                description: "Comprehensive coverage for travel and visa services worldwide",
                features: ["Global network", "Multiple destinations", "Customized plans"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work With You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures you receive personalized attention and expert guidance at every step of
              your immigration journey.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Free assessment of your immigration goals and eligibility",
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Customized immigration plan tailored to your specific situation",
              },
              {
                step: "03",
                title: "Application Preparation",
                description: "Complete document preparation and application submission",
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Continuous guidance until your visa is approved and beyond",
              },
            ].map((process, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Begin Your Immigration Journey?</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Schedule your free consultation today and let our experts create a personalized immigration strategy for
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"/contact"}>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-lg"
              >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
              </Link>
              <a href="tel:+351 123 456 789">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-lg"
              >
              Call Now: +351 123 456 789
            </Button>
              </a>
          </div>
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
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
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