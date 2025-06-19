import { motion } from "framer-motion"
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react"

function TopInfoBar() {
    return (
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900 text-white py-2 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 sm:mb-0">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="text-center sm:text-left">721 Stockport Road, Manchester M19 3AG</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <span>Mon-Fri 8AM - 6PM</span>
            </motion.div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="hidden sm:inline">sales@timeless-consultant.com</span>
            </motion.div>
            <div className="flex gap-2">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 hover:text-emerald-400 cursor-pointer transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
}
export default TopInfoBar