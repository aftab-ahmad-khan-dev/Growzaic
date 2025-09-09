import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  X,
  ExternalLink,
  Calendar,
  Tag,
  Star,
  ArrowRight,
  Filter,
} from "lucide-react";
import SEO from "../components/SEO";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [portfolioRef, portfolioInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "social-media-marketing", name: "Social Media Marketing" },
    { id: "web-development", name: "Web Development" },
    { id: "lead-generation", name: "Lead Generation" },
    { id: "branding", name: "Branding" },
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart Inc. Social Media Campaign",
      category: "social-media-marketing",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Explosive Meta and Instagram campaigns driving 350% follower growth.",
      fullDescription:
        "TechStart Inc. needed to boost their social media presence to attract more customers. We crafted a targeted Meta Ads and Instagram campaign, leveraging influencer partnerships and engaging content. The results included a 350% increase in followers and a 200% boost in engagement rates.",
      client: "TechStart Inc.",
      date: "2024",
      services: [
        "Meta Ads",
        "Instagram Campaigns",
        "Influencer Marketing",
        "Analytics",
      ],
      results: [
        "350% increase in followers",
        "200% boost in engagement rates",
        "80% reduction in cost per click",
        "500% increase in brand mentions",
      ],
      testimonial: {
        content:
          "Growzaic’s social media campaigns transformed our brand visibility. Our follower growth and engagement are off the charts!",
        author: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
      },
      link: "/contact",
    },
    {
      id: 2,
      title: "E-commerce Plus Social-First Website",
      category: "web-development",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "E-commerce platform with seamless social media integration for conversions.",
      fullDescription:
        "E-commerce Plus required a website optimized for social media-driven traffic. We built a custom e-commerce platform with Instagram Shop integration, Meta pixel tracking, and mobile-first design, resulting in a 250% sales increase and improved user engagement.",
      client: "E-commerce Plus",
      date: "2024",
      services: [
        "Custom Development",
        "Social Media Integration",
        "Mobile Optimization",
        "Analytics",
      ],
      results: [
        "250% increase in online sales",
        "50% improvement in page load speed",
        "70% increase in social media referrals",
        "85% reduction in cart abandonment",
      ],
      testimonial: {
        content:
          "The social media-integrated website has been a game-changer. Our sales and engagement have soared!",
        author: "Michael Chen",
        role: "Founder, E-commerce Plus",
      },
      link: "/contact",
    },
    {
      id: 3,
      title: "HealthCorp LinkedIn Lead Generation",
      category: "lead-generation",
      image:
        "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "LinkedIn campaigns generating high-quality B2B leads for healthcare.",
      fullDescription:
        "HealthCorp needed high-quality B2B leads in the healthcare sector. We designed targeted LinkedIn campaigns with personalized content and lead nurturing, resulting in a 200% increase in qualified leads and a stronger sales pipeline.",
      client: "HealthCorp",
      date: "2024",
      services: [
        "LinkedIn Ads",
        "Content Marketing",
        "Lead Nurturing",
        "Analytics",
      ],
      results: [
        "200% increase in qualified B2B leads",
        "50% improvement in lead-to-customer ratio",
        "65% reduction in sales cycle length",
        "180% increase in pipeline value",
      ],
      testimonial: {
        content:
          "Growzaic’s LinkedIn campaigns delivered exceptional B2B leads, making our sales process more efficient.",
        author: "Emily Rodriguez",
        role: "Marketing Director, HealthCorp",
      },
      link: "/contact",
    },
    {
      id: 4,
      title: "FashionForward Social Media Branding",
      category: "branding",
      image:
        "https://images.pexels.com/photos/6347919/pexels-photo-6347919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Social media-optimized brand identity for a fashion startup.",
      fullDescription:
        "FashionForward needed a vibrant brand identity for social media platforms. We created a cohesive logo, color palette, and Instagram-ready assets, driving a 400% increase in social media following and strong brand recognition.",
      client: "FashionForward",
      date: "2024",
      services: [
        "Brand Identity",
        "Logo Design",
        "Social Media Assets",
        "Content Strategy",
      ],
      results: [
        "400% increase in social media following",
        "250% growth in Instagram engagement",
        "120% increase in website traffic from social",
        "90% improvement in brand recall",
      ],
      testimonial: {
        content:
          "Our social media branding is now iconic, thanks to Growzaic. Our audience loves the new look!",
        author: "Jessica Williams",
        role: "Creative Director, FashionForward",
      },
      link: "/contact",
    },
    {
      id: 5,
      title: "FoodieDelight TikTok Campaign",
      category: "social-media-marketing",
      image:
        "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Viral TikTok campaign driving massive engagement for food brand.",
      fullDescription:
        "FoodieDelight aimed to reach younger audiences via TikTok. We crafted a viral content strategy with trending challenges and influencer collaborations, resulting in 1M+ video views and a 300% follower increase.",
      client: "FoodieDelight",
      date: "2023",
      services: [
        "TikTok Campaigns",
        "Influencer Marketing",
        "Content Creation",
        "Analytics",
      ],
      results: [
        "1M+ TikTok video views",
        "300% increase in followers",
        "200% boost in brand engagement",
        "150% increase in website referrals",
      ],
      testimonial: {
        content:
          "Growzaic’s TikTok strategy made us go viral. The engagement and follower growth were phenomenal!",
        author: "Laura Thompson",
        role: "Marketing Manager, FoodieDelight",
      },
      link: "/contact",
    },
    {
      id: 6,
      title: "GreenEnergy Social-Optimized Website",
      category: "web-development",
      image:
        "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description:
        "Website with social media tools to drive leads for energy company.",
      fullDescription:
        "GreenEnergy needed a website to amplify their social media-driven leads. We developed a responsive site with social media integration, lead capture forms, and interactive tools, resulting in a 350% increase in inquiries.",
      client: "GreenEnergy Co.",
      date: "2023",
      services: [
        "Website Development",
        "Social Media Integration",
        "Lead Capture",
        "Analytics",
      ],
      results: [
        "350% increase in online inquiries",
        "50% improvement in user engagement",
        "80% increase in social media traffic",
        "130% growth in organic reach",
      ],
      testimonial: {
        content:
          "Our social-optimized website has become our top lead source. Growzaic delivered beyond expectations.",
        author: "Amanda Green",
        role: "Marketing Manager, GreenEnergy Co.",
      },
      link: "/contact",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <SEO
        title="Portfolio - Social Media Marketing Success Stories | Growzaic"
        description="Discover Growzaic’s portfolio of social media marketing campaigns, including Meta Ads, Instagram growth, LinkedIn leads, and TikTok virality. See our proven results."
        keywords="social media marketing portfolio, Meta Ads campaigns, Instagram growth, LinkedIn marketing, TikTok campaigns, web development, lead generation, branding"
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
              Our <span className="gradient-text">Social Media Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore how we’ve transformed brands with powerful social media
              campaigns on Meta, Instagram, LinkedIn, and TikTok.
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
                    ? "bg-accent-600 text-white"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
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
                  animate={
                    portfolioInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
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
                        {project.category.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar size={14} />
                        <span>{project.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-accent-400">
                        <span className="text-sm font-medium">
                          View Details
                        </span>
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
                    {selectedProject.category.replace("-", " ")}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-medium">
                          Client:
                        </span>
                        <span className="text-white">
                          {selectedProject.client}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-medium">Year:</span>
                        <span className="text-white">
                          {selectedProject.date}
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <span className="text-gray-400 font-medium">
                          Services:
                        </span>
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
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <Star
                            className="text-accent-400 flex-shrink-0"
                            size={16}
                          />
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
                      <p className="text-gray-400 text-sm">
                        {selectedProject.testimonial.role}
                      </p>
                    </div>
                  </footer>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-gray-300 mb-6">
                    Ready to launch your own social media success story?
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center"
                    onClick={closeModal}
                  >
                    Start Your Project
                    <ExternalLink className="ml-2" size={16} />
                  </Link>
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
              Ready for Your Social Media Success?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Let’s create your next viral campaign or engagement-driven
              strategy. Book a free consultation to start your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-slot"
                className="bg-white text-accent-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
