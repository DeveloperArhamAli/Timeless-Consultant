import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  Star,
  Quote,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
} from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

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

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6 px-4 py-2">Success Stories</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Real Stories of
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              Immigration Success
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            Discover how we've helped thousands of individuals and families achieve their immigration dreams. These are
            real stories from real clients who trusted us with their journey to global opportunities.
          </motion.p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, number: "2,500+", label: "Happy Clients", color: "from-blue-500 to-blue-600" },
              { icon: CheckCircle, number: "99%", label: "Success Rate", color: "from-emerald-500 to-emerald-600" },
              { icon: Award, number: "50+", label: "Countries Served", color: "from-purple-500 to-purple-600" },
              { icon: TrendingUp, number: "15+", label: "Years Experience", color: "from-orange-500 to-orange-600" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05, y: -5 }} className="text-center">
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-white text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Featured Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Dreams into Reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each story represents a unique journey, but they all share one thing in common: the determination to
              achieve their immigration goals with our expert guidance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {[
              {
                name: "Maria & Carlos Rodriguez",
                country: "From Brazil to Canada",
                story:
                  "After years of dreaming about moving to Canada, Maria and Carlos finally took the leap. With our comprehensive family immigration services, they successfully obtained their permanent residency and are now thriving in Toronto with their two children.",
                image:
                  "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                visaType: "Family Immigration",
                timeline: "8 months",
                quote:
                  "Timeless Consultant made our Canadian dream come true. Their expertise and personal attention throughout the process was exceptional.",
                outcome: "Permanent Residency Approved",
              },
              {
                name: "Dr. Ahmed Hassan",
                country: "From Egypt to Germany",
                story:
                  "As a medical professional seeking better opportunities, Dr. Hassan needed expert guidance to navigate Germany's complex work visa requirements. Our team helped him secure a position at a leading hospital in Berlin.",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                visaType: "Work Permit",
                timeline: "6 months",
                quote:
                  "The team's knowledge of medical immigration requirements was impressive. They handled every detail professionally.",
                outcome: "Work Visa & Job Placement",
              },
              {
                name: "Sarah Chen",
                country: "From China to Australia",
                story:
                  "Sarah wanted to pursue her Master's degree in Australia. Our education consultants not only helped her secure a student visa but also assisted with scholarship applications, saving her family thousands of dollars.",
                image:
                  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                visaType: "Student Visa",
                timeline: "4 months",
                quote:
                  "Beyond just visa processing, they helped me find the perfect university and even secured a scholarship. Incredible service!",
                outcome: "Student Visa + Scholarship",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={`${story.name} - ${story.country} immigration success story`}
                      width={400}
                      height={500}
                      className="rounded-2xl shadow-xl w-full object-cover"
                    />
                  </div>
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
                    className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-200 rounded-2xl opacity-60"
                  ></motion.div>
                </motion.div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-3 py-1">
                        {story.visaType}
                      </Badge>
                      <Badge variant="outline" className="border-gray-300 text-gray-600 px-3 py-1">
                        {story.timeline}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{story.name}</h3>
                    <p className="text-lg text-emerald-600 font-medium mb-6">{story.country}</p>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{story.story}</p>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-emerald-500 mb-8"
                    >
                      <Quote className="w-8 h-8 text-emerald-500 mb-4" />
                      <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </motion.div>

                    <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Outcome</p>
                        <p className="font-semibold text-emerald-700">{story.outcome}</p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Client Reviews</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
              Timeless Consultant.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Jennifer Thompson",
                country: "USA to Portugal",
                rating: 5,
                review:
                  "Outstanding service from start to finish. The team was professional, knowledgeable, and always available to answer questions. Highly recommended!",
                visaType: "Golden Visa",
              },
              {
                name: "Raj Patel",
                country: "India to UK",
                rating: 5,
                review:
                  "They made the complex UK visa process seem effortless. Their attention to detail and expertise saved me months of potential delays.",
                visaType: "Skilled Worker Visa",
              },
              {
                name: "Elena Kowalski",
                country: "Poland to Canada",
                rating: 5,
                review:
                  "Exceptional guidance throughout my Express Entry application. The team's knowledge of Canadian immigration law is impressive.",
                visaType: "Express Entry",
              },
              {
                name: "Michael O'Brien",
                country: "Ireland to Australia",
                rating: 5,
                review:
                  "Professional, efficient, and results-driven. They helped me secure my Australian work visa in record time.",
                visaType: "Work Visa",
              },
              {
                name: "Fatima Al-Zahra",
                country: "UAE to Germany",
                rating: 5,
                review:
                  "The student visa process was handled perfectly. They even helped me find accommodation and prepare for life in Germany.",
                visaType: "Student Visa",
              },
              {
                name: "David Kim",
                country: "South Korea to USA",
                rating: 5,
                review:
                  "Incredible support for my investor visa application. Their business immigration expertise is unmatched.",
                visaType: "Investor Visa",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <Badge className="ml-auto bg-emerald-100 text-emerald-700 text-xs">{testimonial.visaType}</Badge>
                    </div>
                    <Quote className="w-6 h-6 text-emerald-500 mb-3" />
                    <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.review}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-emerald-600">{testimonial.country}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Write Your Success Story?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-emerald-100 mb-8 leading-relaxed"
          >
            Join thousands of satisfied clients who have achieved their immigration dreams with our expert guidance.
            Your success story starts with a single consultation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-lg"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-lg"
              >
                View All Services
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
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center"
                >
                  <Globe className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold">
                    Timeless<span className="text-emerald-400">Consultant</span>
                  </div>
                  <div className="text-sm text-gray-400">Immigration & Visa Services</div>
                </div>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                Your trusted partner for visa and immigration services worldwide. We make global opportunities
                accessible through expert guidance and personalized service.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Our Services" },
                  { href: "/success-stories", label: "Success Stories" },
                  { href: "/blog", label: "Blog & Resources" },
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
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-400">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-400" />
                  <span>
                    Rua do rio 27 Odeceixe
                    <br />
                    8670-320 Faro Portugal
                  </span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>sales@timeless-consultant.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400" />
                  <span>Mon-Fri 8AM - 6PM</span>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Timeless Consultant. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
