import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Award,
  Search,
  Code,
  Zap,
  Star,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import SEO from "../components/SEO";
import AnimatedCounter from "../components/AnimatedCounter";

const Home = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [servicesRef, servicesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Search,
      title: "Social Media Marketing",
      description:
        "Skyrocket your brand with targeted social media strategies across Meta, Instagram, LinkedIn, and TikTok, driving engagement and conversions.",
      features: [
        "Meta & Instagram Advertising",
        "LinkedIn B2B Campaigns",
        "Viral Content Creation",
        "Community Engagement & Growth",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Custom Development",
        "UI/UX Design",
      ],
    },
    {
      icon: Target,
      title: "Lead Generation",
      description:
        "Strategic lead generation campaigns to attract and convert high-quality prospects.",
      features: [
        "Targeted Campaigns",
        "Landing Page Optimization",
        "Conversion Tracking",
        "Lead Nurturing",
      ],
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description:
        "Growth strategies and consulting to scale your business effectively.",
      features: [
        "Growth Strategy",
        "Market Analysis",
        "Partnership Development",
        "Process Optimization",
      ],
    },
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 250, suffix: "+", label: "Happy Clients" },
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 98, suffix: "%", label: "Success Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Growzaic's Meta and Instagram strategies tripled our engagement, growing our follower base by 300% in just 90 days.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Founder, E-commerce Plus",
      content:
        "Thanks to Growzaic's Instagram campaigns, our followers doubled, and online sales soared by 250% in months.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, HealthCorp",
      content:
        "Growzaic's LinkedIn B2B campaigns delivered high-quality leads, boosting our social media ROI by 200%.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We uncover your brand’s voice, target audience, and social media goals to craft a winning strategy.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Our experts design a tailored social media plan, leveraging Meta, Instagram, LinkedIn, and TikTok for maximum impact.",
    },
    {
      step: "03",
      title: "Execution",
      description:
        "We launch high-impact campaigns, create viral content, and engage your audience to build a loyal community.",
    },
    {
      step: "04",
      title: "Results",
      description:
        "We analyze metrics, optimize campaigns, and drive measurable growth in engagement, followers, and ROI.",
    },
  ];

  return (
    <>
      <SEO
        title="Growzaic - Top Social Media Marketing Agency | Arbab Ahmad Khan"
        description="Boost your brand with Growzaic's expert social media marketing. Specializing in Meta, Instagram, LinkedIn, and TikTok strategies for engagement and growth. Founded by Arbab Ahmad Khan."
        keywords="social media marketing agency, Instagram advertising, Meta campaigns, LinkedIn B2B marketing, TikTok strategies, social media strategy, Growzaic, Arbab Ahmad Khan"
        url="https://growzaic.com"
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-neutral-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
            >
              Skyrocket Your
              <span className="gradient-text"> Social Media Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Dominate Meta, Instagram, LinkedIn, and TikTok with our
              data-driven social media strategies, engaging content, and
              targeted campaigns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/book-slot"
                className="btn-primary inline-flex items-center"
              >
                Start Your Social Media Journey
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                See Our Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-500/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-600/20 rounded-full blur-xl floating-animation animation-delay-400"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-accent-400/20 rounded-full blur-xl floating-animation animation-delay-800"></div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="section-padding bg-neutral-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Growzaic</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Founded by{" "}
                <strong className="text-accent-400">Arbab Ahmad Khan</strong>,
                Growzaic is your go-to social media marketing agency, driving
                explosive growth through targeted campaigns and captivating
                content.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                We combine data-driven insights, creative storytelling, and
                platform expertise to deliver unmatched social media success for
                your brand.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">
                    Expert Social Media Team
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">Proven Campaign Success</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </div>
              <Link
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Discover Our Expertise
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-r from-accent-500/20 to-accent-700/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-neutral-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-20 h-20 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      Leaders in Social Media Excellence
                    </h3>
                    <p className="text-gray-400">
                      Driving impactful results since 2020
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
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
              Our 4-step process delivers measurable social media success,
              tailored to your brand’s unique goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section-padding bg-neutral-950">
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
              Our <span className="gradient-text">Social Media Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Dominate the digital landscape with our expert social media
              marketing solutions, designed to boost engagement and drive
              growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
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
                  className="service-card glass-effect-dark p-8 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="text-accent-400" size={16} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="text-accent-400 hover:text-accent-300 font-semibold inline-flex items-center"
                  >
                    Explore This Service
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="btn-primary inline-flex items-center"
            >
              Discover All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Hear from brands that transformed their social media presence with
              Growzaic’s expert strategies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  testimonialsInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
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
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Partner with Growzaic to unleash your brand’s potential with
              cutting-edge social media strategies. Let’s drive engagement and
              growth together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-slot"
                className="bg-white text-accent-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Your Free Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-accent-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Get in Touch Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
