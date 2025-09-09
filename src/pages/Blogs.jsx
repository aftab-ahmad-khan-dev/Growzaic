import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  User,
  Tag,
  Search,
  ArrowRight,
  Clock,
  TrendingUp,
} from "lucide-react";
import SEO from "../components/SEO";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [blogsRef, blogsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "social-media-marketing", name: "Social Media Marketing" },
    { id: "seo", name: "Social Media SEO" },
    { id: "social-media", name: "Social Media Platforms" },
    { id: "web-development", name: "Web Development" },
    { id: "lead-generation", name: "Lead Generation" },
  ];

  const blogPosts = [
    {
      id: 1,
      title:
        "Mastering Meta & Instagram Ads in 2025: Proven Strategies for Success",
      slug: "meta-instagram-ads-2025",
      excerpt:
        "Unlock the power of Meta and Instagram advertising with our 2025 guide. Learn advanced targeting, creative optimization, and analytics for maximum ROI.",
      content: "Full blog post content goes here...",
      category: "social-media-marketing",
      author: "Arbab Ahmad Khan",
      date: "2025-01-15",
      readTime: "12 min read",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: true,
      tags: [
        "Meta Ads",
        "Instagram Advertising",
        "Social Media Campaigns",
        "ROI",
      ],
    },
    {
      id: 2,
      title: "LinkedIn Marketing: Driving 500+ Quality B2B Leads Monthly",
      slug: "linkedin-marketing-leads",
      excerpt:
        "Discover our proven LinkedIn strategies to generate high-quality B2B leads and build strong professional relationships through social media.",
      content: "Full blog post content goes here...",
      category: "lead-generation",
      author: "Arbab Ahmad Khan",
      date: "2025-01-10",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
      tags: [
        "LinkedIn Marketing",
        "B2B Leads",
        "Social Media Strategy",
        "Networking",
      ],
    },
    {
      id: 3,
      title:
        "Social Media SEO in 2025: Optimizing Profiles for Platform Algorithms",
      slug: "social-media-seo-2025",
      excerpt:
        "Learn how to optimize your social media profiles and content for platform algorithms to boost visibility on Instagram, LinkedIn, and TikTok in 2025.",
      content: "Full blog post content goes here...",
      category: "seo",
      author: "Arbab Ahmad Khan",
      date: "2025-01-05",
      readTime: "15 min read",
      image:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
      tags: [
        "Social Media SEO",
        "Platform Algorithms",
        "Profile Optimization",
        "Visibility",
      ],
    },
    {
      id: 4,
      title: "Creating Social Media-Driven Landing Pages That Convert",
      slug: "social-media-landing-pages",
      excerpt:
        "Learn how to design landing pages optimized for social media traffic to maximize conversions from Meta, Instagram, and TikTok campaigns.",
      content: "Full blog post content goes here...",
      category: "web-development",
      author: "Arbab Ahmad Khan",
      date: "2024-12-28",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
      tags: [
        "Landing Pages",
        "Social Media Traffic",
        "Conversion Optimization",
        "UX Design",
      ],
    },
    {
      id: 5,
      title:
        "Top Social Media Trends to Dominate Meta, Instagram, and TikTok in 2025",
      slug: "social-media-trends-2025",
      excerpt:
        "Stay ahead with our guide to 2025’s top social media trends, including Instagram Reels, TikTok challenges, and AI-driven content strategies.",
      content: "Full blog post content goes here...",
      category: "social-media",
      author: "Arbab Ahmad Khan",
      date: "2024-12-20",
      readTime: "11 min read",
      image:
        "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
      tags: [
        "Social Media Trends",
        "Instagram Reels",
        "TikTok Challenges",
        "AI Content",
      ],
    },
    {
      id: 6,
      title: "TikTok Marketing: How to Create Viral Campaigns in 2025",
      slug: "tiktok-marketing-viral",
      excerpt:
        "Master TikTok marketing with our guide to creating viral campaigns, leveraging trends, and engaging Gen Z audiences in 2025.",
      content: "Full blog post content goes here...",
      category: "social-media-marketing",
      author: "Arbab Ahmad Khan",
      date: "2024-12-15",
      readTime: "13 min read",
      image:
        "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
      tags: [
        "TikTok Marketing",
        "Viral Campaigns",
        "Gen Z Marketing",
        "Content Creation",
      ],
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const recentPosts = filteredPosts
    .filter((post) => !post.featured)
    .slice(0, 5);

  return (
    <>
      <SEO
        title="Social Media Marketing Blog - Expert Tips & Trends | Growzaic"
        description="Explore Growzaic’s blog for expert social media marketing tips, including Meta Ads, Instagram strategies, LinkedIn leads, and TikTok trends for 2025."
        keywords="social media marketing blog, Meta Ads tips, Instagram strategies, LinkedIn marketing, TikTok trends, social media SEO, lead generation, web development"
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
              Our <span className="gradient-text">Social Media Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get the latest insights, strategies, and trends to dominate Meta,
              Instagram, LinkedIn, and TikTok with our expert social media
              marketing tips.
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
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search social media articles..."
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
                      ? "bg-accent-600 text-white"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
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
                <span className="text-accent-400 font-semibold">
                  Featured Social Media Article
                </span>
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
                    {featuredPost.category.replace("-", " ")}
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
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
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
              Latest{" "}
              <span className="gradient-text">Social Media Articles</span>
            </h2>
            <p className="text-gray-300">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    blogsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
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
                        {post.category.replace("-", " ")}
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
                          <span>
                            {new Date(post.date).toLocaleDateString()}
                          </span>
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
              Stay Ahead with Social Media Insights
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Subscribe for the latest social media marketing tips, platform
              trends, and strategies delivered straight to your inbox.
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
