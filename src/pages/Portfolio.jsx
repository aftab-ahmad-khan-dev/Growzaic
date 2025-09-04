import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  X, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Star,
  ArrowRight,
  Filter
} from 'lucide-react';
import SEO from '../components/SEO';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'lead-generation', name: 'Lead Generation' },
    { id: 'branding', name: 'Branding' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechStart Inc. Digital Transformation',
      category: 'digital-marketing',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete digital marketing overhaul resulting in 300% increase in qualified leads.',
      fullDescription: 'TechStart Inc. approached us with declining online visibility and poor lead quality. We implemented a comprehensive digital marketing strategy including Meta Ads optimization, LinkedIn lead generation campaigns, and SEO improvements. The results exceeded expectations with a 300% increase in qualified leads and 150% improvement in conversion rates.',
      client: 'TechStart Inc.',
      date: '2024',
      services: ['Meta Ads', 'LinkedIn Marketing', 'SEO', 'Analytics'],
      results: [
        '300% increase in qualified leads',
        '150% improvement in conversion rates',
        '75% reduction in cost per acquisition',
        '400% increase in organic traffic'
      ],
      testimonial: {
        content: 'Growzaic transformed our entire digital presence. The results speak for themselves - we\'ve never seen such consistent, high-quality leads.',
        author: 'Sarah Johnson',
        role: 'CEO, TechStart Inc.'
      },
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Plus Platform Development',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Modern e-commerce platform with advanced features and mobile optimization.',
      fullDescription: 'E-commerce Plus needed a complete platform redesign to handle their growing business. We built a custom e-commerce solution with advanced inventory management, multi-payment gateway integration, and mobile-first design. The new platform improved user experience and significantly boosted sales.',
      client: 'E-commerce Plus',  
      date: '2024',
      services: ['Custom Development', 'UI/UX Design', 'Mobile Optimization', 'Payment Integration'],
      results: [
        '250% increase in online sales',
        '40% improvement in page load speed',
        '60% increase in mobile conversions',
        '90% reduction in cart abandonment'
      ],
      testimonial: {
        content: 'The new platform exceeded our expectations. Sales have more than doubled, and our customers love the seamless shopping experience.',
        author: 'Michael Chen',
        role: 'Founder, E-commerce Plus'
      },
      link: '#'
    },
    {
      id: 3,
      title: 'HealthCorp B2B Lead Generation',
      category: 'lead-generation',
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Targeted LinkedIn campaigns generating high-quality B2B leads for healthcare industry.',
      fullDescription: 'HealthCorp struggled with generating quality B2B leads in the competitive healthcare market. We developed a multi-channel lead generation strategy focusing on LinkedIn advertising, content marketing, and email nurturing campaigns. The comprehensive approach resulted in consistent, high-quality leads and improved sales pipeline.',
      client: 'HealthCorp',
      date: '2024',
      services: ['LinkedIn Ads', 'Content Marketing', 'Email Marketing', 'Lead Nurturing'],
      results: [
        '180% increase in qualified B2B leads',
        '45% improvement in lead-to-customer ratio',
        '60% reduction in sales cycle length',
        '200% increase in pipeline value'
      ],
      testimonial: {
        content: 'The quality of leads we\'re getting now is exceptional. Our sales team is busier than ever with qualified prospects.',
        author: 'Emily Rodriguez',
        role: 'Marketing Director, HealthCorp'
      },
      link: '#'
    },
    {
      id: 4,
      title: 'FashionForward Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete brand redesign and digital presence for fashion startup.',
      fullDescription: 'FashionForward, a new fashion startup, needed a complete brand identity and digital presence. We created a modern, cohesive brand identity including logo design, color palette, typography, and brand guidelines. The comprehensive branding package helped establish their market presence and attract their target audience.',
      client: 'FashionForward',
      date: '2024',
      services: ['Brand Identity', 'Logo Design', 'Website Design', 'Social Media Assets'],
      results: [
        '500% increase in brand recognition',
        '300% growth in social media following',
        '150% increase in website engagement',
        '80% improvement in brand recall'
      ],
      testimonial: {
        content: 'Our new brand identity perfectly captures our vision. We\'ve seen incredible growth since the rebrand launch.',
        author: 'Jessica Williams',
        role: 'Creative Director, FashionForward'
      },
      link: '#'
    },
    {
      id: 5,
      title: 'FinanceFlow Lead Conversion Optimization',
      category: 'digital-marketing',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Conversion rate optimization resulting in 200% improvement in lead quality.',
      fullDescription: 'FinanceFlow had good traffic but poor conversion rates. We conducted comprehensive conversion rate optimization including landing page redesign, A/B testing, and user experience improvements. The optimization process resulted in significantly better lead quality and higher conversion rates.',
      client: 'FinanceFlow',
      date: '2023',
      services: ['CRO', 'Landing Page Design', 'A/B Testing', 'Analytics'],
      results: [
        '200% improvement in conversion rate',
        '150% increase in lead quality score',
        '40% reduction in bounce rate',
        '180% increase in form completions'
      ],
      testimonial: {
        content: 'The conversion optimization work was phenomenal. We\'re converting visitors at rates we never thought possible.',
        author: 'Robert Davis',
        role: 'VP Marketing, FinanceFlow'
      },
      link: '#'
    },
    {
      id: 6,
      title: 'GreenEnergy Website Development',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sustainable energy company website with interactive features and lead capture.',
      fullDescription: 'GreenEnergy needed a modern website that would effectively communicate their sustainable energy solutions while capturing leads. We developed a responsive website with interactive features, energy calculator tools, and optimized lead capture forms. The site effectively showcases their services while driving business growth.',
      client: 'GreenEnergy Co.',
      date: '2023',
      services: ['Website Development', 'Interactive Tools', 'Lead Capture', 'SEO'],
      results: [
        '300% increase in online inquiries',
        '45% improvement in user engagement',
        '60% increase in time on site',
        '120% growth in organic traffic'
      ],
      testimonial: {
        content: 'Our new website perfectly represents our mission and has become our best sales tool. Inquiries have tripled.',
        author: 'Amanda Green',
        role: 'Marketing Manager, GreenEnergy Co.'
      },
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <SEO 
        title="Portfolio - Our Digital Marketing Success Stories | Growzaic"
        description="Explore Growzaic's portfolio of successful digital marketing campaigns, web development projects, and lead generation strategies. See real results from our expert team."
        keywords="digital marketing portfolio, case studies, success stories, web development projects, lead generation campaigns, Meta Ads results, LinkedIn marketing"
        url="https://growzaic.com/portfolio"
      />

      {/* Hero Section */}
      <section className="section-padding bg-neutral-950 pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover how we've helped businesses achieve exceptional growth through 
              strategic digital marketing and innovative web solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-accent-600 text-white'
                    : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                <Filter size={16} />
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={portfolioRef} className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect-dark rounded-2xl overflow-hidden card-hover cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Tag className="text-accent-400" size={16} />
                      <span className="text-accent-400 text-sm font-medium capitalize">
                        {project.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-accent-400">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="text-accent-400" size={16} />
                  <span className="text-accent-400 text-sm font-medium capitalize">
                    {selectedProject.category.replace('-', ' ')}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-medium">Client:</span>
                        <span className="text-white">{selectedProject.client}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-medium">Year:</span>
                        <span className="text-white">{selectedProject.date}</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-gray-400 font-medium">Services:</span>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.services.map((service) => (
                            <span 
                              key={service}
                              className="bg-accent-600/20 text-accent-400 px-3 py-1 rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Results</h3>
                    <div className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Star className="text-accent-400 flex-shrink-0" size={16} />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-neutral-800 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Client Testimonial</h3>
                  <blockquote className="text-gray-300 italic mb-4">
                    "{selectedProject.testimonial.content}"
                  </blockquote>
                  <footer className="flex items-center space-x-3">
                    <div>
                      <cite className="text-white font-semibold not-italic">
                        {selectedProject.testimonial.author}
                      </cite>
                      <p className="text-gray-400 text-sm">{selectedProject.testimonial.role}</p>
                    </div>
                  </footer>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Interested in similar results for your business?
                  </p>
                  <button
                    onClick={closeModal}
                    className="btn-primary inline-flex items-center"
                  >
                    <a href="/contact" className="flex items-center">
                      Start Your Project
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Let's create the next success story together. Book a consultation to discuss 
              how we can help achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-slot" 
                className="bg-white text-accent-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;