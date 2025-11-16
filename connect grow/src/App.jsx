import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, MessageCircle, ArrowRight, Sparkles, TrendingUp, Megaphone, Palette, ChevronLeft, ChevronRight } from 'lucide-react';
import PortfolioStrip from './components/portfolio';

const ConnectGrow = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const portfolioItems = [
    {
      title: "Madeena Bakery",
      category: "Food & Bakery Marketing",
      description: "Complete branding and promotional materials for premium bakery business",
      image: "image1.jpeg",
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Coconut Oil Product",
      category: "Product Photography & Design",
      description: "Premium product showcase with professional photography and design",
      image: "image2.jpeg",
      color: "from-green-600 to-teal-600"
    },
    {
      title: "Silsila Fashion Store",
      category: "Grand Opening Campaign",
      description: "Complete grand reopening promotional materials for fashion retail",
      image: "image3.jpeg",
      color: "from-red-600 to-yellow-600"
    },
    {
      title: "Adlooc Electronics",
      category: "Product Marketing",
      description: "Special offer campaign for solar technology products",
      image: "image4.jpeg",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Cookify Kitchenware",
      category: "Product Photography",
      description: "Professional product showcase for premium cookware brand",
      image: "image5.jpeg",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Eid Festival Campaign",
      category: "Religious Event Design",
      description: "Beautiful festive greeting designs for community celebrations",
      image: "image6.jpeg",
      color: "from-blue-600 to-purple-600"
    },
    {
      title: "Social Media Campaigns",
      category: "Instagram Marketing",
      description: "Engaging content strategies that boost audience engagement",
      image: "image7.jpeg",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Brand Identity Design",
      category: "Creative Design",
      description: "Complete brand identity packages for growing businesses",
      image: "image8.jpeg",
      color: "from-pink-600 to-rose-600"
    }
  ];

  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Strategic campaigns across social media platforms to grow your online presence and reach your target audience effectively"
    },
    {
      icon: Palette,
      title: "Poster Design",
      description: "Creative and eye-catching poster designs for events, promotions, and brand awareness that make your message stand out"
    },
    {
      icon: TrendingUp,
      title: "Brand Growth",
      description: "Complete brand building solutions from strategy to execution, helping your business connect with customers and grow"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  const handleWhatsApp = () => {
    window.open('https://wa.me/918086791080', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:muhdrabeehkv7902@gmail.com';
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Connect
              </span>
              <span className="text-white"> Grow</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 ${activeSection === item
                      ? 'text-purple-400'
                      : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-gray-400 hover:text-white transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Your Growth Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Elevate Your Brand
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Connect & Grow
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through creative digital marketing and stunning poster designs.
            We help brands connect with their audience and achieve remarkable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-400 text-sm font-semibold">WHO WE ARE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Your Success is
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                At Connect Grow, we believe every business deserves to shine. We specialize in digital marketing strategies and creative poster designs that capture attention and drive results.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                Our approach combines creativity with strategy, ensuring your brand not only looks great but also reaches the right audience at the right time.
              </p>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                From small businesses to growing brands, we're committed to delivering solutions that make a real impact on your growth journey.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-gray-300 text-lg">Projects Completed</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <p className="text-gray-300 text-lg">Happy Clients</p>
              </div>

              <div className="bg-gradient-to-br from-pink-600/10 to-orange-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  300%
                </div>
                <p className="text-gray-300 text-lg">Average Growth Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-400 text-sm font-semibold">WHAT WE DO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive solutions to help your brand stand out and grow in the digital space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 rounded-3xl transition-all duration-500"></div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Portfolio (Infinite Image Marquee) */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-400 text-sm font-semibold">OUR WORK</span>
            </div>
          </div>

          <PortfolioStrip items={portfolioItems} />
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-400 text-sm font-semibold">GET IN TOUCH</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Grow Together</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to take your brand to the next level? We'd love to hear from you and discuss how we can help your business grow.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918086790180"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 w-full rounded-2xl px-6 py-5 min-h-[76px]
                          bg-gradient-to-r from-green-600 to-green-500 text-white
                          ring-1 ring-white/10 hover:ring-white/20
                          transition-all duration-200 hover:-translate-y-0.5 focus:-translate-y-0.5
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs text-green-100/90">WhatsApp</div>
                  <div className="text-lg sm:text-xl font-semibold">+91 8086790180</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:muhdrabeehkv7902@gmail.com"
                className="relative flex items-center gap-4 w-full rounded-2xl px-6 py-5 min-h-[76px]
                  bg-gradient-to-r from-purple-600 to-blue-600 text-white
                  ring-1 ring-white/10 hover:ring-white/20
                  transition-all duration-200 hover:-translate-y-0.5 focus:-translate-y-0.5
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/20 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>

                {/* Make this block flexible and allow truncation */}
                <div className="flex-1 min-w-0 leading-tight">
                  <div className="text-xs text-purple-100/90">Email Us</div>
                  <div className="font-semibold overflow-hidden text-ellipsis whitespace-nowrap
                          text-lg sm:text-xl lg:text-base xl:text-lg">
                    muhdrabeehkv7902@gmail.com
                  </div>
                </div>
              </a>

            </div>

            {/* Divider */}
            <div className="border-t border-white/10 my-4"></div>

            {/* Socials */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">Follow us on social media</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.instagram.com/p/CuV7PhVSMEv/?hl=en"
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-3
                            hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-purple-400" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect Grow
            </span>
          </div>
          <p className="text-gray-400">© 2025 Connect Grow. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Helping brands connect, engage, and grow</p>
        </div>
      </footer>

      <style >{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ConnectGrow;