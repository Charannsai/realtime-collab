import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function LandingPage() {
 
  const [showScrollTop, setShowScrollTop] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 300;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

   

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  const keyFeatures = [
    {
      icon: <DocumentTextIcon className="h-10 w-10 text-primary-400" />,
      title: "Real-Time Document Editing",
      points: [
        "Multiple users can create, edit, and update documents simultaneously.",
        "See changes instantly with auto-sync technology.",
        "Track edits & version history to never lose progress."
      ]
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-primary-400" />,
      title: "Built-in Chat & Messaging",
      points: [
        "Chat with teammates without leaving the document.",
        "Tag users, share files, and collaborate seamlessly.",
        "Get instant notifications when updates are made."
      ]
    },
    {
      icon: <VideoCameraIcon className="h-10 w-10 text-primary-400" />,
      title: "Live Video & Audio Calls",
      points: [
        "No need for third-party apps – start a video call directly inside the workspace.",
        "Screen sharing and live annotations for interactive discussions.",
        "Perfect for virtual meetings, brainstorming, and remote learning."
      ]
    },
    {
      icon: <LockClosedIcon className="h-10 w-10 text-primary-400" />,
      title: "Secure & Role-Based Access",
      points: [
        "Control who can view, edit, or comment on documents.",
        "End-to-end encryption ensures maximum security.",
        "Admin dashboard for managing permissions & users."
      ]
    },
    {
      icon: <CloudArrowUpIcon className="h-10 w-10 text-primary-400" />,
      title: "Cloud-Based & Device-Friendly",
      points: [
        "Access your documents anytime, anywhere on any device.",
        "Works on Windows, macOS, Android, and iOS – no installation needed!",
        "Automatic backups ensure your data is always safe."
      ]
    }
  ];

  const whyChooseUs = [
    "Faster Collaboration – Work together in real time, no delays.",
    "All-in-One Platform – No need for extra apps, everything is built-in.",
    "User-Friendly Interface – Simple, intuitive, and easy to use.",
    "AI-Powered Smart Suggestions – Auto-correct errors, summarize content & more!",
    "Blazing-Fast Performance – Optimized for speed and efficiency."
  ];

  const userTypes = [
    {
      icon: <UserGroupIcon className="h-12 w-12 text-primary-400" />,
      title: "Teams & Companies",
      description: "Collaborate on projects and streamline workflows."
    },
    {
      icon: <AcademicCapIcon className="h-12 w-12 text-primary-400" />,
      title: "Students & Educators",
      description: "Work on group assignments, conduct online classes."
    },
    {
      icon: <DocumentTextIcon className="h-12 w-12 text-primary-400" />,
      title: "Freelancers & Writers",
      description: "Share drafts, receive feedback in real time."
    },
    {
      icon: <BriefcaseIcon className="h-12 w-12 text-primary-400" />,
      title: "Businesses & Startups",
      description: "Improve communication and document management."
    }
  ];

  return (
    <div className="flex-grow relative">
     
      <motion.button
        className="fixed bottom-8 right-8 z-50 glass-card p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          y: showScrollTop ? 0 : 50 
        }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="h-6 w-6 text-primary-400" />
      </motion.button>

      {/* Section Dividers */}
      <div className="absolute left-0 right-0 pointer-events-none overflow-hidden">
        <div className="wave-divider top-[90vh]"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-pattern min-h-[100vh] flex items-center relative">
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
              className="mt-4 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl font-bold text-primary-400">
                Create. Edit. Communicate. All in One Place.
              </p>
            </motion.div>
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
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <button 
            onClick={() => scrollToSection('features')}
            className="glass-card p-2 rounded-full hover:bg-white/20 transition-all mb-14 duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>


      {/* <section id="supercharge" className="py-20 bg-gradient-to-b from-black/30 to-black/10 relative"> */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl z-50 font-extrabold gradient-text">
              🚀 Supercharge Your Teamwork
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              In today's fast-paced world, teamwork shouldn't be limited by location or time. Our <span className="font-bold text-white">Real-Time Collaboration Tool</span> is designed to help teams work together effortlessly—whether you're editing documents, sharing ideas, or discussing projects, everything happens in <span className="font-bold text-white">real time</span> on a <span className="font-bold text-white">single, seamless platform</span>.
            </p>
          </motion.div>

          <motion.div
            className="glass-card rounded-2xl p-8 text-center mb-16 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-2xl"></div>
            <h3 className="text-3xl font-bold gradient-text relative">
              🌍 Work from Anywhere. Anytime. Together.
            </h3>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('features')}
            className="flex items-center space-x-2 text-primary-400 hover:text-white transition-colors duration-300"
          >
            <span>Explore Features</span>
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </motion.div>
      </section> */}

      {/* Features Section */}
      <section id="features" className="py-24 relative">
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
                    <div className="absolute -inset-1 opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-4 text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('key-features')}
            className="glass-card px-6 py-3 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Discover Key Features</span>
            <ChevronDownIcon className="h-5 w-5 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Key Features Section */}
      <section id="key-features" className="py-24 bg-gradient-to-b from-black/10 to-black/30 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              🔥 Key Features That Set Us Apart
            </h2>
          </motion.div>

          <div className="space-y-16">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card rounded-xl p-8 hover:bg-white/[0.1] transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 via-transparent to-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="md:flex items-start relative">
                  <div className="md:flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0">
                    <div className="p-4 rounded-full bg-white/10 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="md:ml-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <ul className="space-y-3">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          <span className="text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('why-choose')}
            className="glass-card p-4 rounded-full hover:bg-white/15 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-24 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              🚀 Why Choose Our Tool?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:bg-white/[0.15] transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-primary-400">✅</span>
                  </div>
                  <p className="ml-4 text-lg text-gray-300">{reason}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center glass-card rounded-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 via-transparent to-primary-600/10 rounded-xl"></div>
            <p className="text-xl text-white relative">
              <span className="text-primary-400 font-bold">📢</span> Perfect for remote teams, students, educators, and businesses looking to enhance productivity!
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('who-can-use')}
            className="glass-card px-6 py-3 rounded-xl hover:bg-white/15 transition-all duration-300 flex items-center space-x-2"
          >
            <span>See Who Can Use This</span>
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </motion.div>
      </section>

      {/* Who Can Use This Section */}
      <section id="who-can-use" className="py-24 bg-gradient-to-b from-black/30 to-black/10 relative">
        <div className="absolute left-0 top-0 w-full h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-text">
              🌟 Who Can Use This?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {userTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 text-center hover:bg-white/[0.15] transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{type.title}</h3>
                  <p className="mt-4 text-gray-300">{type.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button 
            onClick={() => scrollToSection('get-started')}
            className="glass-card p-4 rounded-full hover:bg-white/15 transition-all duration-300"
          >
            <ChevronDownIcon className="h-6 w-6 text-primary-400" />
          </button>
        </motion.div>
      </section>

      
        </div>
  );
}

export default LandingPage;