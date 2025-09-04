import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  User, 
  Tag, 
  Search, 
  ArrowRight,
  Clock,
  TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [blogsRef, blogsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'seo', name: 'SEO' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'lead-generation', name: 'Lead Generation' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Meta Ads in 2025: Strategies That Actually Work',
      slug: 'meta-ads-guide-2025',
      excerpt: 'Discover the latest Meta advertising strategies that are driving real results for businesses in 2025. From audience targeting to creative optimization, we cover everything you need to know.',
      content: 'Full blog post content goes here...',
      category: 'digital-marketing',
      author: 'Arbab Ahmad Khan',
      date: '2025-01-15',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      tags: ['Meta Ads', 'Facebook Marketing', 'Digital Advertising', 'ROI']
    },
    {
      id: 2,
      title: 'LinkedIn Lead Generation: How to Generate 500+ Quality B2B Leads Monthly',
      slug: 'linkedin-lead-generation-guide',
      excerpt: 'Learn our proven LinkedIn lead generation strategies that help B2B companies consistently generate high-quality leads and build meaningful business relationships.',
      content: 'Full blog post content goes here...',
      category: 'lead-generation',
      author: 'Arbab Ahmad Khan',
      date: '2025-01-10',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      tags: ['LinkedIn', 'B2B Marketing', 'Lead Generation', 'Sales']
    },
    {
      id: 3,
      title: 'SEO in 2025: The Complete Guide to Ranking Higher on Google',
      slug: 'seo-guide-2025',
      excerpt: 'Stay ahead of the competition with our comprehensive SEO guide for 2025. Learn about the latest algorithm updates, ranking factors, and optimization techniques.',
      content: 'Full blog post content goes here...',
      category: 'seo',
      author: 'Arbab Ahmad Khan',
      date: '2025-01-05',
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      tags: ['SEO', 'Google Rankings', 'Search Marketing', 'Organic Traffic']
    },
    {
      id: 4,
      title: 'Building High-Converting Landing Pages: A Data-Driven Approach',
      slug: 'high-converting-landing-pages',
      excerpt: 'Discover the essential elements of high-converting landing pages and learn how to optimize them for maximum conversions using real data and testing methodologies.',
      content: 'Full blog post content goes here...',
      category: 'web-development',
      author: 'Arbab Ahmad Khan',
      date: '2024-12-28',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      tags: ['Landing Pages', 'Conversion Optimization', 'UX Design', 'A/B Testing']
    },
    {
      id: 5,
      title: 'Social Media Marketing Trends That Will Dominate 2025',
      slug: 'social-media-trends-2025',
      excerpt: 'Get ahead of the curve with our analysis of the top social media marketing trends for 2025. From AI-powered content to new platform features, here\'s what you need to know.',
      content: 'Full blog post content goes here...',
      category: 'social-media',
      author: 'Arbab Ahmad Khan',
      date: '2024-12-20',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      tags: ['Social Media', 'Marketing Trends', 'Content Strategy', 'AI Marketing']
    },
    {
      id: 6,
      title: 'The Psychology of Digital Marketing: Understanding Your Customer\'s Mind',
      slug: 'psychology-digital-marketing',
      excerpt: 'Explore the psychological principles that drive consumer behavior online and learn how to apply these insights to create more effective digital marketing campaigns.',
      content: 'Full blog post content goes here...',
      category: 'digital-marketing',
      author: 'Arbab Ahmad Khan',
      date: '2024-12-15',
      readTime: '13 min read',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      tags: ['Consumer Psychology', 'Marketing Strategy', 'User Behavior', 'Conversion']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = filteredPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <>
      <SEO 
        title="Digital Marketing Blog - Expert Tips & Strategies | Growzaic"
        description="Stay updated with the latest digital marketing trends, SEO tips, social media strategies, and expert insights from Growzaic's team. Practical advice for business growth."
        keywords="digital marketing blog, SEO tips, social media marketing, Meta Ads guide, LinkedIn marketing, lead generation strategies, web development tips"
        url="https://growzaic.com/blogs"
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Stay ahead of the curve with our latest insights, strategies, and expert tips 
              on digital marketing, SEO, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
          >
            {/* Search Bar */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent-600 text-white'
                      : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-neutral-950">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="text-accent-400" size={20} />
                <span className="text-accent-400 font-semibold">Featured Article</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-video overflow-hidden rounded-2xl">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Tag className="text-accent-400" size={16} />
                  <span className="text-accent-400 text-sm font-medium capitalize">
                    {featuredPost.category.replace('-', ' ')}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center space-x-6 mb-6 text-gray-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${featuredPost.slug}`}
                  className="btn-primary inline-flex items-center"
                >
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section ref={blogsRef} className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={blogsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-gray-300">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={blogsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect-dark rounded-2xl overflow-hidden card-hover"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="text-accent-400" size={14} />
                    <span className="text-accent-400 text-sm font-medium capitalize">
                      {post.category.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="bg-accent-600/20 text-accent-400 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-accent-400 hover:text-accent-300 font-semibold text-sm inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-accent-600 to-accent-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Get the latest digital marketing tips, strategies, and industry insights 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white/40 backdrop-blur-sm"
              />
              <button className="bg-white text-accent-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blogs;