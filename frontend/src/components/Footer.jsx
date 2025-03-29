import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="glass-panel mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Security</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t border-gray-800 pt-8"
        >
          <p className="text-base text-gray-400 text-center">&copy; 2025 CollabFlow. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;