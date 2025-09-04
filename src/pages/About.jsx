import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  User, 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Lightbulb,
  Heart,
  Shield
} from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [founderRef, founderInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Recognized as one of the top digital marketing agencies in the region'
    },
    {
      icon: Users,
      title: '250+ Happy Clients',
      description: 'Successfully served over 250 businesses across various industries'
    },
    {
      icon: TrendingUp,
      title: '500+ Projects',
      description: 'Completed over 500 successful digital marketing and development projects'
    },
    {
      icon: Star,
      title: '98% Success Rate',
      description: 'Maintained an impressive 98% client satisfaction and project success rate'
    }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new technologies and strategies to stay ahead of the curve and deliver cutting-edge solutions.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Our clients\' success is our success. We prioritize understanding their needs and exceeding their expectations.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in transparent communication, honest practices, and building long-term relationships based on trust.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy we implement is focused on delivering measurable results and tangible business growth.'
    }
  ];

  const clients = [
    'TechStart Inc.', 'E-commerce Plus', 'HealthCorp', 'FinanceFlow', 'EduTech Solutions',
    'GreenEnergy Co.', 'FoodieDelight', 'FashionForward', 'RealEstate Pro', 'AutoAdvance'
  ];

  return (
    <>
      <SEO 
        title="About Growzaic - Digital Marketing Excellence by Arbab Ahmad Khan"
        description="Learn about Growzaic's journey, mission, and the visionary founder Arbab Ahmad Khan. Discover our commitment to transforming businesses through innovative digital marketing strategies."
        keywords="about Growzaic, Arbab Ahmad Khan, digital marketing agency founder, company history, mission vision, values"
        url="https://growzaic.com/about"
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
              About <span className="gradient-text">Growzaic</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a team of passionate digital marketing experts and innovative developers 
              dedicated to transforming businesses through strategic growth solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Founded in 2020 by <strong className="text-accent-400">Arbab Ahmad Khan</strong>, 
                Growzaic emerged from a vision to bridge the gap between traditional business practices 
                and the rapidly evolving digital landscape.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                What started as a small consulting firm has grown into a full-service digital marketing 
                agency that helps businesses of all sizes achieve remarkable growth through strategic 
                digital transformation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we pride ourselves on being more than just service providers – we're growth partners 
                committed to your long-term success.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-r from-accent-500/20 to-accent-700/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-neutral-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-20 h-20 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Team Excellence</h3>
                    <p className="text-gray-400">Passionate experts working together</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section ref={founderRef} className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={founderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={founderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-r from-accent-500/20 to-accent-700/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-neutral-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <User className="w-24 h-24 text-accent-400 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold gradient-text">Arbab Ahmad Khan</h3>
                    <p className="text-gray-400 text-lg">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={founderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6">Arbab Ahmad Khan</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With over 5 years of experience in digital marketing and business development, 
                Arbab Ahmad Khan founded Growzaic with a mission to democratize access to 
                world-class digital marketing strategies.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                His expertise spans across Meta Ads, LinkedIn advertising, SEO optimization, 
                and full-stack web development. Arbab's data-driven approach and innovative 
                thinking have helped hundreds of businesses achieve exponential growth.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">Certified Meta & LinkedIn Ads Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">Google Analytics & SEO Expert</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">Business Growth Strategist</span>
                </div>
              </div>

              <blockquote className="border-l-4 border-accent-400 pl-6 py-4 bg-neutral-800 rounded-r-lg">
                <p className="text-gray-300 italic mb-4">
                  "My vision is to empower every business, regardless of size, with the digital tools 
                  and strategies they need to compete and thrive in today's marketplace."
                </p>
                <footer className="text-accent-400 font-semibold">- Arbab Ahmad Khan</footer>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These milestones represent our commitment to excellence and our clients' success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center glass-effect-dark p-6 rounded-2xl card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-neutral-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect-dark p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To empower businesses worldwide by providing innovative digital marketing solutions, 
                cutting-edge web development services, and strategic growth consulting that drives 
                measurable results and sustainable success.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We are committed to democratizing access to world-class digital marketing expertise, 
                ensuring that businesses of all sizes can compete effectively in the digital marketplace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect-dark p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To become the global leader in digital transformation, recognized for our innovative 
                approaches, exceptional results, and unwavering commitment to client success.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where every business, regardless of size or industry, has the 
                tools and strategies needed to thrive in an increasingly digital world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="section-padding bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These values guide every decision we make and every strategy we implement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect-dark p-8 rounded-2xl card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
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
              Trusted by <span className="gradient-text">Leading Brands</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We've had the privilege of working with amazing companies across various industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark p-6 rounded-xl text-center card-hover"
              >
                <p className="font-semibold text-gray-300">{client}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;