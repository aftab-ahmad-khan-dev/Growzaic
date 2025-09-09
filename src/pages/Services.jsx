import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Code,
  Target,
  TrendingUp,
  Facebook,
  Linkedin,
  Instagram,
  Smartphone,
  Palette,
  BarChart3,
  Users,
  Mail,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import SEO from "../components/SEO";

const Services = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const mainServices = [
    {
      icon: Search,
      title: "Social Media Marketing",
      description:
        "Powerful social media strategies to amplify your brand’s presence and engagement on Meta, Instagram, LinkedIn, and TikTok.",
      features: [
        "Meta & Instagram Advertising",
        "LinkedIn B2B Campaigns",
        "TikTok Viral Content Creation",
        "Social Media Management",
        "Influencer Partnerships",
        "Community Engagement",
        "Social Media Analytics",
        "Content Scheduling & Strategy",
      ],
      pricing: "Starting from $1,500/month",
      popular: true,
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Responsive websites optimized to complement your social media campaigns and drive conversions.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Mobile-Responsive Design",
        "UI/UX Design",
        "Content Management Systems",
        "Social Media Integration",
        "Maintenance & Support",
        "Performance Monitoring",
      ],
      pricing: "Starting from $2,500",
      popular: false,
    },
    {
      icon: Target,
      title: "Lead Generation",
      description:
        "Targeted campaigns to attract and convert high-quality leads through social media channels.",
      features: [
        "Social Media Lead Generation",
        "Landing Page Optimization",
        "Conversion Rate Optimization",
        "Lead Nurturing Campaigns",
        "Marketing Automation",
        "A/B Testing",
        "Lead Scoring & Qualification",
        "Performance Tracking",
      ],
      pricing: "Starting from $1,200/month",
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description:
        "Strategic growth consulting to scale your brand’s social media presence and overall business.",
      features: [
        "Social Media Growth Strategy",
        "Market Research & Analysis",
        "Competitive Analysis",
        "Partnership Development",
        "Sales Process Optimization",
        "KPI Tracking & Reporting",
        "Strategic Planning",
        "Growth Consulting",
      ],
      pricing: "Starting from $2,000/month",
      popular: false,
    },
  ];

  const specializedServices = [
    {
      icon: Facebook,
      title: "Meta Ads Management",
      description:
        "High-ROI Meta and Instagram ad campaigns tailored to your brand’s goals.",
      link: "/contact",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Marketing",
      description:
        "B2B lead generation and brand authority through targeted LinkedIn campaigns.",
      link: "/contact",
    },
    {
      icon: Instagram,
      title: "TikTok Marketing",
      description:
        "Engaging TikTok campaigns to drive viral growth and audience engagement.",
      link: "/contact",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Custom mobile apps integrated with social media for seamless user experiences.",
      link: "/contact",
    },
    {
      icon: Palette,
      title: "Brand Design",
      description:
        "Stunning visuals and brand identity tailored for social media platforms.",
      link: "/contact",
    },
    {
      icon: BarChart3,
      title: "Social Media Analytics",
      description:
        "In-depth analytics and reporting to optimize your social media performance.",
      link: "/contact",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audience Discovery",
      description:
        "We analyze your brand, target audience, and social media landscape to craft a tailored strategy.",
    },
    {
      step: "02",
      title: "Campaign Strategy",
      description:
        "Our team designs a data-driven social media plan, leveraging Meta, Instagram, LinkedIn, and TikTok.",
    },
    {
      step: "03",
      title: "Content Execution",
      description:
        "We create and launch engaging content and campaigns to build your online community.",
    },
    {
      step: "04",
      title: "Growth Optimization",
      description:
        "Continuous tracking, optimization, and reporting to maximize engagement and ROI.",
    },
  ];

  const testimonials = [
    {
      name: "David Martinez",
      role: "CEO, StartupFlow",
      content:
        "Growzaic’s Meta and Instagram campaigns boosted our engagement by 400% in just 6 months.",
      rating: 5,
    },
    {
      name: "Lisa Chen",
      role: "Marketing Director, TechCorp",
      content:
        "Their social media-integrated website skyrocketed our conversions and brand visibility.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Founder, GrowthLab",
      content:
        "Growzaic’s LinkedIn strategies helped us generate high-quality B2B leads, scaling our business.",
      rating: 5,
    },
  ];

  return (
    <>
      <SEO
        title="Social Media Marketing Services - Meta, Instagram, LinkedIn | Growzaic"
        description="Elevate your brand with Growzaic’s expert social media marketing services, including Meta Ads, Instagram campaigns, LinkedIn marketing, and TikTok strategies."
        keywords="social media marketing services, Meta Ads, Instagram campaigns, LinkedIn marketing, TikTok strategies, social media analytics, web development, lead generation"
        url="https://growzaic.com/services"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-neutral-950 pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Social Media Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Dominate Meta, Instagram, LinkedIn, and TikTok with our tailored
              social media solutions designed to skyrocket engagement and
              growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover our comprehensive social media marketing solutions to
              elevate your brand’s online presence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    servicesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative glass-effect-dark p-8 rounded-2xl card-hover ${
                    service.popular ? "ring-2 ring-accent-400" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle
                          className="text-accent-400 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-neutral-700">
                    <span className="text-accent-400 font-bold text-lg">
                      {service.pricing}
                    </span>
                    <Link
                      to="/contact"
                      className="btn-primary inline-flex items-center"
                    >
                      Get Started
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Specialized{" "}
              <span className="gradient-text">Social Media Solutions</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Enhance your social media strategy with our targeted,
              platform-specific services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect-dark p-6 rounded-xl card-hover group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="text-accent-400 hover:text-accent-300 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Social Media Process</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A proven 4-step methodology to deliver exceptional social media
              results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection line (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent-500 to-transparent -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Hear from brands that transformed their social media presence with
              Growzaic.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark p-6 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Amplify Your Social Media?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Let’s create a tailored social media strategy to skyrocket your
              brand’s engagement and growth. Book a free consultation today.
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
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
