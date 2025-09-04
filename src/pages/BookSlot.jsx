import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Send,
  Star,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const BookSlot = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [bookingRef, bookingInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = 'your_service_id'; // Replace with your EmailJS service ID
      const templateId = 'your_booking_template_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_type: formData.serviceType,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        budget: formData.budget,
        message: formData.message,
        to_name: 'Growzaic Team',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        budget: ''
      });
    } catch (error) {
      console.error('Error sending booking request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    'Digital Marketing Strategy',
    'Meta Ads Management',
    'LinkedIn Lead Generation',
    'SEO Optimization',
    'Web Development',
    'Lead Generation Campaign',
    'Business Development Consulting',
    'Complete Digital Transformation'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+'
  ];

  const benefits = [
    {
      icon: User,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our experienced digital marketing specialists.'
    },
    {
      icon: CheckCircle,
      title: 'Custom Strategy',
      description: 'Receive a tailored strategy designed specifically for your business goals.'
    },
    {
      icon: Star,
      title: 'No Obligation',
      description: 'Free consultation with no strings attached - just valuable insights.'
    },
    {
      icon: ArrowRight,
      title: 'Quick Results',
      description: 'Start seeing improvements in your digital presence within weeks.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'The consultation was incredibly valuable. Arbab provided actionable insights that we implemented immediately.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder, E-commerce Plus',
      content: 'Professional, knowledgeable, and results-driven. The best investment we made for our business.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Book Free Consultation - Digital Marketing Strategy Session | Growzaic"
        description="Book your free digital marketing consultation with Growzaic. Get expert advice on Meta Ads, LinkedIn marketing, SEO, and growth strategies. No obligation, just results."
        keywords="book consultation, free consultation, digital marketing consultation, Meta Ads consultation, LinkedIn marketing advice, SEO consultation, business growth strategy"
        url="https://growzaic.com/book-slot"
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
              Book Your Free <span className="gradient-text">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your business? Schedule a free 30-minute strategy session 
              with our digital marketing experts and discover how we can accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-neutral-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect-dark p-6 rounded-xl text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={bookingRef} className="section-padding bg-neutral-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={bookingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Schedule Your <span className="gradient-text">Session</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fill out the form below to book your free consultation. We'll contact you 
                within 24 hours to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Service & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Scheduling */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-accent-400 transition-colors"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors resize-vertical"
                    placeholder="What are your main business goals and challenges? This helps us prepare for our consultation."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`flex items-center space-x-2 p-4 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                      : 'bg-red-600/20 text-red-400 border border-red-600/30'
                  }`}>
                    {submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Booking request sent successfully! We'll contact you within 24 hours to confirm.</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle size={20} />
                        <span>Failed to send booking request. Please try again or contact us directly.</span>
                      </>
                    )}
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
                      Booking...
                    </>
                  ) : (
                    <>
                      Book Free Consultation
                      <Send className="ml-2" size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Information Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={bookingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* What to Expect */}
              <div className="glass-effect-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Analysis</h4>
                      <p className="text-gray-400 text-sm">We'll analyze your current digital presence and identify opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Strategy Discussion</h4>
                      <p className="text-gray-400 text-sm">We'll discuss tailored strategies for your specific goals and challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Action Plan</h4>
                      <p className="text-gray-400 text-sm">You'll receive actionable recommendations you can implement immediately.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="glass-effect-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Consultation Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-accent-400" size={20} />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-gray-400 text-sm">30-45 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-accent-400" size={20} />
                    <div>
                      <p className="font-semibold">Availability</p>
                      <p className="text-gray-400 text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="text-accent-400" size={20} />
                    <div>
                      <p className="font-semibold">Format</p>
                      <p className="text-gray-400 text-sm">Video call (Zoom/Google Meet)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="text-accent-400" size={20} />
                    <div>
                      <p className="font-semibold">Cost</p>
                      <p className="text-gray-400 text-sm">Completely FREE - No strings attached</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="glass-effect-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">What Clients Say</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-accent-400 pl-4">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={14} />
                        ))}
                      </div>
                      <p className="text-gray-300 text-sm mb-3 italic">"{testimonial.content}"</p>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-gray-400 text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
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
                question: "Is the consultation really free?",
                answer: "Yes, absolutely! Our initial consultation is completely free with no hidden costs or obligations. We believe in providing value upfront."
              },
              {
                question: "What if I can't make the scheduled time?",
                answer: "No problem! Just contact us and we'll reschedule to a time that works better for you. We're flexible with our scheduling."
              },
              {
                question: "Do I need to prepare anything for the consultation?",
                answer: "Just come with your questions and goals! If you have existing marketing materials or analytics, feel free to share them, but it's not required."
              },
              {
                question: "Will you try to sell me services during the consultation?",
                answer: "Our focus is on providing value and understanding your needs. We'll only discuss our services if they're a good fit for your goals."
              }
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
    </>
  );
};

export default BookSlot;