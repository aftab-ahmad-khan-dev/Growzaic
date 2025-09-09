import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  XCircle,
} from "lucide-react";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    company_name: "",
    service_interest: "",
    budget_range: "",
    preferred_date: "",
    preferred_time: "",
    business_goals: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [contactRef, contactInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const publicKey = "q1LjEqe1BYoap1aVY";
    try {
      emailjs.init(publicKey);
      console.log("EmailJS initialized with public key:", publicKey);
    } catch (error) {
      console.error("EmailJS initialization failed:", error);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = "service_kbvfd32";
      const templateId = "growzaic";

      const templateParams = {
        full_name: formData.full_name || "N/A",
        email_address: formData.email_address || "N/A",
        phone_number: formData.phone_number || "N/A",
        company_name: formData.company_name || "N/A",
        service_interest: formData.service_interest || "General Inquiry",
        budget_range: formData.budget_range || "N/A",
        preferred_date: formData.preferred_date || "N/A",
        preferred_time: formData.preferred_time || "N/A",
        business_goals: formData.business_goals || "No specific goals provided",
      };

      console.log(
        "Sending email with params:",
        templateParams,
        "serviceId:",
        serviceId,
        "templateId:",
        templateId
      );
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      console.log("Email sent successfully:", response);

      setShowModal(true);
      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        company_name: "",
        service_interest: "",
        budget_range: "",
        preferred_date: "",
        preferred_time: "",
        business_goals: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitStatus(null);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@growzaic.com",
      description: "Reach out for social media marketing insights!",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+92-321-8108509",
      description: "Mon-Fri from 9am to 6pm PKT",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Punjab, Pakistan",
      description: "Schedule a visit to discuss your campaigns",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Weekend: By appointment only",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://web.facebook.com/profile.php?id=61573263944804",
      name: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/106624605",
      name: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/growzaic_marketing/?hl=en",
      name: "Instagram",
    },
  ];

  return (
    <>
      <SEO
        title="Contact Growzaic - Free Social Media Marketing Consultation"
        description="Ready to amplify your social media presence? Contact Growzaic for expert Meta Ads, Instagram campaigns, and TikTok strategies. Book a free consultation today."
        keywords="contact Growzaic, social media marketing consultation, Meta Ads, Instagram campaigns, TikTok strategies, LinkedIn marketing, free consultation"
        url="https://growzaic.com/contact"
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to dominate Meta, Instagram, or TikTok? Let's discuss how
              our social media marketing strategies can skyrocket your brand’s
              engagement and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-neutral-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect-dark p-6 rounded-xl text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-accent-400 font-semibold mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section ref={contactRef} className="section-padding bg-neutral-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book a <span className="gradient-text">Strategy Call</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fill out the form to schedule a free social media marketing
                consultation. We’ll respond within 24 hours to plan your Meta,
                Instagram, or TikTok strategy.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="full_name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email_address"
                      name="email_address"
                      value={formData.email_address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company_name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="service_interest"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service Interest *
                    </label>
                    <select
                      id="service_interest"
                      name="service_interest"
                      value={formData.service_interest}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Meta & Instagram Ads">
                        Meta & Instagram Ads
                      </option>
                      <option value="TikTok Campaigns">TikTok Campaigns</option>
                      <option value="LinkedIn Marketing">
                        LinkedIn Marketing
                      </option>
                      <option value="Social Media SEO">Social Media SEO</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget_range"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Budget Range
                    </label>
                    <input
                      type="text"
                      id="budget_range"
                      name="budget_range"
                      value={formData.budget_range}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="$500 - $5000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="preferred_date"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferred_date"
                      name="preferred_date"
                      value={formData.preferred_date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                      min="2025-09-09"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="preferred_time"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Preferred Time
                    </label>
                    <input
                      type="time"
                      id="preferred_time"
                      name="preferred_time"
                      value={formData.preferred_time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business_goals"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Social Media Goals & Challenges *
                  </label>
                  <textarea
                    id="business_goals"
                    name="business_goals"
                    value={formData.business_goals}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors resize-vertical"
                    placeholder="Tell us about your social media goals (e.g., boost Instagram engagement, launch TikTok campaigns)..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 p-4 rounded-lg bg-red-600/20 text-red-400 border border-red-600/30">
                    <AlertCircle size={20} />
                    <span>
                      Failed to send message. Please try again or contact us
                      directly at info@growzaic.com.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Book Strategy Call
                      <Send className="ml-2" size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={
                contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="glass-effect-dark p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.1234567890123!2d74.3567!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEzLjQiTiA3NMKwMjEnMzEuMyJF!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Punjab Pakistan Location"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-effect-dark p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <p className="text-gray-300 mb-6">
                  Connect with us on social media for the latest Meta Ads tips,
                  Instagram trends, and TikTok strategies.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-neutral-800 hover:bg-accent-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="glass-effect-dark p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-accent-400" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:info@growzaic.com"
                        className="text-gray-400 hover:text-accent-400 transition-colors"
                      >
                        info@growzaic.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-accent-400" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+92-321-8108509"
                        className="text-gray-400 hover:text-accent-400 transition-colors"
                      >
                        +92-321-8108509
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you start my social media campaign?",
                answer:
                  "We typically launch campaigns within 1-2 weeks of signing the agreement. For urgent Meta or Instagram campaigns, we can often start sooner.",
              },
              {
                question: "Do you work with businesses of all sizes?",
                answer:
                  "Yes! We craft social media strategies for startups, small businesses, and enterprises, tailored to your goals and budget.",
              },
              {
                question:
                  "What’s included in your social media marketing services?",
                answer:
                  "Our services include Meta & Instagram Ads, TikTok campaigns, LinkedIn marketing, social media SEO, content creation, and detailed analytics.",
              },
              {
                question: "How do you measure social media success?",
                answer:
                  "We track key metrics like engagement rates, follower growth, click-through rates, conversions, and ROI to ensure your campaigns deliver results.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect-dark p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="glass-effect-dark p-6 rounded-2xl max-w-md w-full text-center">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XCircle size={24} />
              </button>
            </div>
            <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-6">
              Your request for a social media strategy call has been sent. We’ll
              contact you within 24 hours to discuss your goals.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
