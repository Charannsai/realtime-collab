import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function LandingPage() {
  const features = [
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary-400" />,
      title: "Real-Time Document Editing",
      description: "Collaborate on documents with your team in real-time. See changes as they happen."
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary-400" />,
      title: "Integrated Chat",
      description: "Communicate with your team directly within the document workspace."
    },
    {
      icon: <VideoCameraIcon className="h-8 w-8 text-primary-400" />,
      title: "Video Conferencing",
      description: "Start face-to-face meetings with a single click for better collaboration."
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary-400" />,
      title: "Cloud Storage",
      description: "Your documents are automatically saved and securely stored in the cloud."
    }
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="hero-pattern min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Transform Your</span>
              <span className="block gradient-text mt-2">Team Collaboration</span>
            </motion.h1>
            <motion.p 
              className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The all-in-one platform for real-time document editing, communication, and team collaboration.
            </motion.p>
            <motion.div 
              className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/register"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 glass-button rounded-xl text-lg md:text-xl md:py-4 md:px-10"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto flex items-center justify-center px-8 py-3 glass-card rounded-xl text-lg md:text-xl md:py-4 md:px-10 hover:bg-white/15 transition-all duration-300"
              >
                Live Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-extrabold sm:text-4xl gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Everything you need to collaborate effectively
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Powerful features designed to make team collaboration seamless and efficient.
            </motion.p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-8 hover:bg-white/[0.15] transition-all duration-300 group"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;