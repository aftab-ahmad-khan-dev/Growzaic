import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  Shield,
} from "lucide-react";
import SEO from "../components/SEO";
import founder from "../assets/founder.jpg";
const About = () => {
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [founderRef, founderInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [valuesRef, valuesInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements = [
    {
      icon: Award,
      title: "Industry Leader",
      description:
        "Recognized as a top social media marketing agency in the region",
    },
    {
      icon: Users,
      title: "250+ Happy Clients",
      description:
        "Empowered over 250 brands with high-impact social media campaigns",
    },
    {
      icon: TrendingUp,
      title: "500+ Campaigns",
      description:
        "Launched over 500 successful social media marketing projects",
    },
    {
      icon: Star,
      title: "98% Success Rate",
      description:
        "Achieved a 98% client satisfaction rate in social media growth",
    },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We pioneer creative social media strategies, leveraging the latest trends on Meta, Instagram, and TikTok.",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your brand’s success is our priority. We craft tailored social media campaigns to exceed expectations.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We build trust through transparent communication and ethical social media practices.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Our strategies focus on measurable engagement, follower growth, and ROI across social platforms.",
    },
  ];

  const clients = [
    "TechStart Inc.",
    "E-commerce Plus",
    "HealthCorp",
    "FinanceFlow",
    "EduTech Solutions",
    "GreenEnergy Co.",
    "FoodieDelight",
    "FashionForward",
    "RealEstate Pro",
    "AutoAdvance",
  ];

  return (
    <>
      <SEO
        title="About Growzaic - Social Media Marketing Experts | Arbab Ahmad Khan"
        description="Discover Growzaic's mission to transform brands through expert social media marketing. Founded by Arbab Ahmad Khan, we specialize in Meta, Instagram, LinkedIn, and TikTok strategies."
        keywords="about Growzaic, Arbab Ahmad Khan, social media marketing agency, Instagram campaigns, LinkedIn marketing, Meta advertising, company mission"
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
              We’re a passionate team of social media marketing experts
              dedicated to amplifying brands through strategic campaigns and
              engaging content on Meta, Instagram, LinkedIn, and TikTok.
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
                Founded in 2020 by{" "}
                <strong className="text-accent-400">Arbab Ahmad Khan</strong>,
                Growzaic was born to revolutionize how brands connect with
                audiences through social media.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                From a small team to a leading social media marketing agency,
                we’ve empowered businesses worldwide with data-driven campaigns,
                viral content, and platform expertise.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We’re more than marketers – we’re your partners in building
                thriving online communities and driving measurable social media
                success.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square  p-8 backdrop-blur-sm">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="https://img.freepik.com/premium-photo/neon-light-question-marks-concept-dark-concrete-realistic-abstract-background-3d-rendering_626958-370.jpg"
                      alt=""
                      className="rounded-xl w-[100%] mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold mb-2">
                      Social Media Experts
                    </h3>
                    <p className="text-gray-400">
                      Crafting impactful online communities
                    </p>
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
            animate={
              founderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
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
              animate={
                founderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-r from-accent-500/20 to-accent-700/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-full h-full  rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <img src={founder} alt="" className="rounded-xl" />
                    <h3 className="text-3xl font-bold gradient-text pb-4">
                      Arbab Ahmad Khan
                    </h3>
                    <p className="text-gray-400 text-lg">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                founderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6">Arbab Ahmad Khan</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With over 5 years of expertise in social media marketing, Arbab
                Ahmad Khan founded Growzaic to empower brands with cutting-edge
                social media strategies.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                His mastery of Meta Ads, LinkedIn B2B campaigns, Instagram
                growth, and TikTok trends has driven exponential engagement for
                hundreds of businesses. Arbab also brings full-stack web
                development skills to create seamless digital experiences.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">
                    Certified Meta & LinkedIn Ads Specialist
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">
                    Instagram & TikTok Growth Expert
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">Full-Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-accent-400" size={20} />
                  <span className="text-gray-300">
                    Social Media Growth Strategist
                  </span>
                </div>
              </div>

              <blockquote className="border-l-4 border-accent-400 pl-6 py-4 bg-neutral-800 rounded-r-lg">
                <p className="text-gray-300 italic mb-4">
                  "My mission is to empower every brand with the social media
                  tools and strategies they need to build thriving online
                  communities and achieve massive growth."
                </p>
                <footer className="text-accent-400 font-semibold">
                  - Arbab Ahmad Khan
                </footer>
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
              Our <span className="gradient-text">Social Media Milestones</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These achievements showcase our expertise in driving social media
              success.
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
                  <h3 className="text-xl font-bold mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
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
                To empower brands with innovative social media marketing
                solutions, delivering engaging campaigns on Meta, Instagram,
                LinkedIn, and TikTok that drive measurable growth.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We’re committed to making world-class social media expertise
                accessible, helping businesses of all sizes thrive in the
                digital landscape.
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
                To lead the world in social media transformation, recognized for
                our creative campaigns, platform expertise, and unmatched client
                results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where every brand harnesses the power of
                social media to build vibrant communities and achieve
                exponential growth.
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
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These values shape our approach to delivering exceptional social
              media marketing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect-dark p-8 rounded-2xl card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
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
              Trusted by <span className="gradient-text">Top Brands</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We’ve transformed the social media presence of leading brands
              across industries.
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
