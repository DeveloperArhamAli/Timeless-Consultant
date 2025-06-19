import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ArrowRight,
    CheckCircle,
    Globe,
    Plane,
    GraduationCap,
    Building,
    Home,
    Shield,
    Zap,
    Target,
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

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

            <section className="relative py-10 sm:py-16 lg:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50"></div>
                <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                        ✨ Trusted Immigration Experts Since 2009
                        </Badge>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
                    >
                        Your Journey to
                        <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text">
                        Global Success
                        </span>
                        Starts Here
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                    >
                        Expert visa and immigration services tailored to your unique needs. We turn complex processes into
                        simple steps, ensuring your path to global opportunities is smooth and successful.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to={"/contact"}>
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg shadow-lg"
                                    >
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to={"/success-stories"}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg"
                                    >
                                    Watch Success Stories
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200"
                    >
                        {[
                        { number: "2,500+", label: "Visas Approved" },
                        { number: "15+", label: "Years Experience" },
                        { number: "99%", label: "Success Rate" },
                        ].map((stat, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.1 }} className="text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                            <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                        </motion.div>
                        ))}
                    </motion.div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative order-first lg:order-last"
                    >
                    <div className="relative z-10">
                        <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8"
                        >
                        <img
                            src="https://plus.unsplash.com/premium_photo-1684407617181-275e50374e95?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Passport, visa documents and travel planning materials"
                            width={500}
                            height={600}
                            className="rounded-xl sm:rounded-2xl shadow-2xl w-full object-cover"
                        />
                        </motion.div>
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
                        className="absolute top-4 sm:top-8 right-4 sm:right-8 w-16 sm:w-24 h-16 sm:h-24 bg-emerald-200 rounded-full opacity-60"
                    ></motion.div>
                    <motion.div
                        animate={{
                        y: [0, 10, 0],
                        opacity: [0.6, 0.8, 0.6],
                        }}
                        transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 1,
                        }}
                        className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-teal-200 rounded-full opacity-60"
                    ></motion.div>
                    </motion.div>
                </div>
                </div>
            </section>

        {/* Services Grid */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <Badge className="bg-white text-emerald-700 border-emerald-200 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                    Our Services
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Complete Travel & Immigration Solutions
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                    From study visas to spiritual journeys, we provide comprehensive travel and immigration services with
                    expert guidance and personalized support.
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
                        icon: GraduationCap,
                        title: "Study Visa Assistance",
                        description: "Expert guidance for studying at top-ranked universities worldwide",
                        features: ["UK, USA, Canada, Australia", "University Selection", "Scholarship Guidance"],
                        color: "from-blue-500 to-blue-600",
                    },
                    {
                        icon: Plane,
                        title: "Visit Visa Processing",
                        description: "Hassle-free visit visa processing for destinations worldwide",
                        features: ["Fast Processing", "Interview Preparation", "Transparent Process"],
                        color: "from-emerald-500 to-emerald-600",
                    },
                    {
                        icon: Building,
                        title: "Hajj & Umrah Packages",
                        description: "Premium spiritual journey packages from UK & Pakistan",
                        features: ["Economy & Luxury Options", "3-5 Star Accommodation", "Guided Tours"],
                        color: "from-purple-500 to-purple-600",
                        featured: true,
                    },
                    {
                        icon: Globe,
                        title: "Pakistan Tours",
                        description: "Explore the beauty of Pakistan with our guided tour packages",
                        features: ["Hunza Valley", "Skardu & Fairy Meadows", "Cultural Tours"],
                        color: "from-green-500 to-green-600",
                    },
                    {
                        icon: Home,
                        title: "UAE Tourism",
                        description: "Discover the wonders of United Arab Emirates",
                        features: ["Dubai Desert Safari", "Burj Khalifa Tours", "Adventure Parks"],
                        color: "from-orange-500 to-orange-600",
                    },
                    {
                        icon: Target,
                        title: "International Travel",
                        description: "Customized travel plans for destinations worldwide",
                        features: ["Europe Tours", "Turkey & Malaysia", "Personalized Itineraries"],
                        color: "from-pink-500 to-pink-600",
                    },
                    ].map((service, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card
                        className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white h-full ${service.featured ? "ring-2 ring-purple-500 ring-opacity-50" : ""}`}
                        >
                        <CardContent className="p-6 sm:p-8">
                            {service.featured && (
                            <Badge className="bg-purple-100 text-purple-700 mb-3 sm:mb-4 text-xs">Featured Service</Badge>
                            )}
                            <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}
                            >
                            <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                            </motion.div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                            {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                            {service.description}
                            </p>
                            <ul className="space-y-2 sm:space-y-3">
                            {service.features.map((feature, idx) => (
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
                        </CardContent>
                        </Card>
                    </motion.div>
                    ))}
                </motion.div>
                </div>
            </section>

        {/* Why Choose Us */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                    >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8"
                    >
                        <img
                        src="https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Immigration documents, visa applications and official paperwork"
                        width={600}
                        height={500}
                        className="rounded-xl sm:rounded-2xl shadow-xl w-full object-cover"
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
                        className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 w-12 sm:w-20 h-12 sm:h-20 bg-emerald-200 rounded-2xl opacity-60"
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
                        className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 w-10 sm:w-16 h-10 sm:h-16 bg-teal-200 rounded-2xl opacity-60"
                    ></motion.div>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                    >
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                        Why Choose Timeless
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Excellence in Every Application
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                        With over 15 years of experience and thousands of successful cases, we've built our reputation on
                        delivering results and exceeding expectations.
                    </p>
                    <div className="space-y-4 sm:space-y-6">
                        {[
                        {
                            icon: Shield,
                            title: "Licensed & Certified",
                            description: "Fully licensed immigration consultants with proven expertise and credentials",
                        },
                        {
                            icon: Zap,
                            title: "Fast & Efficient",
                            description: "Streamlined processes and quick turnaround times without compromising quality",
                        },
                        {
                            icon: Target,
                            title: "Personalized Approach",
                            description: "Tailored strategies based on your unique circumstances and goals",
                        },
                        ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"
                            >
                            <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                            </motion.div>
                            <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                    </motion.div>
                </div>
                </div>
            </section>

        {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6"
                >
                    Ready to Begin Your Immigration Journey?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-6 sm:mb-8 leading-relaxed"
                >
                    Schedule your free consultation today and take the first step towards achieving your global dreams. Our
                    experts are ready to guide you through every step of the process.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to={"/contact"}>
                    <Button
                        size="lg"
                        className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-lg"
                    >
                        Book Free Consultation
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href="tel:+447 301 948 344">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto bg-white text-emerald-600 hover:bg-gray-100 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold shadow-lg"
                        >
                        Call Now: +447 301 948 344
                    </Button>
                        </a>
                    </motion.div>
                </motion.div>
                </div>
            </motion.section>

        </div>
    )
}