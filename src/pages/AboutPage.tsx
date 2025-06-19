import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Users,
  Award,
  Heart,
  CheckCircle,
  Star,
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6 px-4 py-2">
              About Timeless Consultant
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Your Trusted
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
              Immigration Partners
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            For over 15 years, we've been helping individuals and families achieve their dreams of global mobility. Our
            commitment to excellence and personalized service has made us a trusted name in immigration consulting.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Dreams Since 2009</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to make global opportunities accessible to everyone, Timeless Consultant began as
                a small practice dedicated to helping individuals navigate the complex world of immigration law.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today, we've grown into a comprehensive immigration consultancy, but our core values remain unchanged:
                integrity, excellence, and unwavering commitment to our clients' success.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-8"
              >
                {[
                  { number: "2,500+", label: "Successful Cases" },
                  { number: "50+", label: "Countries Served" },
                ].map((stat, index) => (
                  <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern office building representing our professional services"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-200 rounded-2xl opacity-60"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-teal-200 rounded-2xl opacity-60"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-white text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every interaction and guide our commitment to excellence in immigration services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Compassion",
                description:
                  "We understand that immigration is deeply personal. Every case represents dreams, hopes, and life-changing opportunities.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We maintain the highest standards in everything we do, from initial consultation to final approval.",
              },
              {
                icon: Users,
                title: "Integrity",
                description:
                  "Honest, transparent communication and ethical practices form the foundation of our client relationships.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow bg-white border-0 h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Consultants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of licensed immigration consultants brings decades of combined experience and a passion for
              helping clients achieve their goals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Maria Santos",
                role: "Senior Immigration Consultant",
                experience: "12+ Years Experience",
                specialties: ["Family Immigration", "Work Permits", "Citizenship Applications"],
                image:
                  "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                name: "João Silva",
                role: "Business Immigration Specialist",
                experience: "10+ Years Experience",
                specialties: ["Investor Visas", "Business Immigration", "Entrepreneur Programs"],
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                name: "Ana Costa",
                role: "Student Visa Coordinator",
                experience: "8+ Years Experience",
                specialties: ["Student Visas", "University Applications", "Post-Study Work Permits"],
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-0">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="absolute top-4 right-4"
                    >
                      <Badge className="bg-emerald-600 text-white">{member.experience}</Badge>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Specialties:</p>
                      <ul className="space-y-1">
                        {member.specialties.map((specialty, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-3 h-3 text-emerald-500 mr-2" />
                            {specialty}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-white text-emerald-700 border-emerald-200 mb-4 px-4 py-2">Our Achievements</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and satisfied clients worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Award,
                title: "Best Immigration Consultancy",
                subtitle: "Portugal Business Awards 2023",
              },
              {
                icon: Star,
                title: "5-Star Rating",
                subtitle: "Google Reviews & Trustpilot",
              },
              {
                icon: Users,
                title: "Client Satisfaction",
                subtitle: "98% Success Rate",
              },
              {
                icon: Globe,
                title: "International Recognition",
                subtitle: "ICCRC Certified Consultants",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white border-0">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <achievement.icon className="w-6 h-6 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.subtitle}</p>
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
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-emerald-100 mb-8 leading-relaxed"
          >
            Let our experienced team guide you through your immigration process with personalized attention and expert
            knowledge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={"/contact"}>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-lg"
                >
                Schedule Consultation
              </Button>
                </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={"/services"}>
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold shadow-lg"
                >
                Learn About Our Services
              </Button>
                </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
