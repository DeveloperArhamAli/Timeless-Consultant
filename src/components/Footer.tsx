import { motion } from "framer-motion"
import { Clock, Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-900 text-white pt-12 pb-7 sm:pt-16"
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
                        <div className="text-xs sm:text-sm text-gray-400">Immigration & Visa Services</div>
                        </div>
                    </motion.div>
                    <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-md">
                        Your trusted partner for visa and immigration services worldwide. We make global opportunities
                        accessible through expert guidance and personalized service.
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
                        { slug: "/about", label: "About Us" },
                        { slug: "/services", label: "Our Services" },
                        { slug: "/success-stories", label: "Success Stories" },
                        { slug: "/contact", label: "Contact Us" },
                        ].map((link) => (
                        <motion.li key={link.slug} whileHover={{ x: 5 }}>
                            <Link to={link.slug} className="hover:text-emerald-400 transition-colors">
                            {link.label}
                            </Link>
                        </motion.li>
                        ))}
                    </ul>
                    </div>
                    <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400">
                        <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0 text-emerald-400" />
                        <span>
                            721 Stockport Road Manchester M19 3AG
                        </span>
                        </motion.div>
                        <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                        <span>sales@timeless-consultant.com</span>
                        </motion.div>
                        <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                        <span>Mon-Fri 8AM - 6PM</span>
                        </motion.div>
                    </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
                    <p>Copyright &copy; {new Date().getFullYear()} Timeless Consultant. All rights reserved.</p>
                </div>
                </div>
            </motion.footer>
    )
}
export default Footer