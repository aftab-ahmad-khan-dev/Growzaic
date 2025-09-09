import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or CMS
  const blogPost = {
    id: 1,
    title:
      "Mastering Meta & Instagram Ads in 2025: Proven Strategies for Success",
    slug: "meta-instagram-ads-2025",
    excerpt:
      "Unlock the power of Meta and Instagram advertising with our 2025 guide to advanced targeting, creative optimization, and analytics for maximum ROI.",
    category: "social-media-marketing",
    author: "Arbab Ahmad Khan",
    date: "2025-01-15",
    readTime: "12 min read",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
    tags: [
      "Meta Ads",
      "Instagram Advertising",
      "Social Media Campaigns",
      "ROI",
    ],
    content: `
      <p>Meta and Instagram advertising have transformed in 2025, offering powerful new tools, targeting options, and optimization strategies to skyrocket campaign performance. In this comprehensive guide, we dive into the most effective Meta and Instagram Ads strategies that are driving explosive growth for businesses.</p>

      <h2>Navigating the Meta and Instagram Ads Landscape in 2025</h2>
      <p>The social media advertising space is more competitive than ever, with privacy changes (like iOS 14.5+) and shifting user behaviors demanding innovative approaches. To succeed on Meta and Instagram in 2025, you need to master:</p>
      <ul>
        <li>Precision audience targeting</li>
        <li>Engaging creative formats like Instagram Reels</li>
        <li>Advanced analytics and attribution</li>
        <li>Cross-platform content strategies</li>
        <li>AI-driven campaign optimization</li>
      </ul>

      <h2>Advanced Targeting Strategies</h2>
      <p>Targeting has evolved significantly on Meta and Instagram. Here’s what’s working in 2025:</p>

      <h3>1. Broad Targeting with Meta Advantage+</h3>
      <p>Leverage Meta’s Advantage+ audience tool to reach broader audiences, allowing the algorithm to optimize based on engagement signals and creative performance.</p>

      <h3>2. Lookalike Audiences Enhanced</h3>
      <p>Meta’s updated lookalike audiences now incorporate customer lifetime value and Instagram engagement patterns, enabling more precise audience modeling.</p>

      <h3>3. Interest and Behavior Expansion</h3>
      <p>Instagram’s interest expansion identifies high-potential users based on Reels interactions and hashtag engagement, boosting conversion rates.</p>

      <h2>Creative Optimization for Meta and Instagram</h2>
      <p>Compelling creatives are the heart of successful Meta and Instagram Ads. Here’s how to stand out:</p>

      <h3>Instagram Reels and Short-Form Video</h3>
      <p>Short-form video content, especially Instagram Reels, dominates engagement. Top strategies include:</p>
      <ul>
        <li>Captivating 3-second hooks to grab attention</li>
        <li>Vertical, mobile-optimized formats</li>
        <li>Text overlays for sound-off viewers</li>
        <li>Trend-driven content aligned with hashtags</li>
      </ul>

      <h3>User-Generated Content (UGC)</h3>
      <p>Authentic UGC outperforms polished ads. Incorporate:</p>
      <ul>
        <li>Customer testimonials and Instagram Stories</li>
        <li>Behind-the-scenes Reels</li>
        <li>Influencer-driven content</li>
        <li>Community challenges and hashtag campaigns</li>
      </ul>

      <h2>Measurement and Attribution</h2>
      <p>Privacy changes have reshaped attribution. Here’s how to measure success in 2025:</p>

      <h3>First-Party Data Strategies</h3>
      <p>Build robust data collection through:</p>
      <ul>
        <li>Instagram lead forms</li>
        <li>Meta pixel integration</li>
        <li>Customer feedback via Stories polls</li>
        <li>CRM sync for ad interactions</li>
      </ul>

      <h3>Multi-Touch Attribution</h3>
      <p>Track the customer journey across Meta and Instagram touchpoints to accurately measure ad impact on conversions.</p>

      <h2>Campaign Structure Best Practices</h2>
      <p>Effective Meta and Instagram campaigns in 2025 follow streamlined structures:</p>

      <h3>Simplified Campaign Setup</h3>
      <p>Optimize for Meta’s algorithm with:</p>
      <ul>
        <li>Fewer ad sets with broader targeting</li>
        <li>Higher budgets for faster optimization</li>
        <li>Consolidated conversion events</li>
        <li>Rapid creative testing cycles</li>
      </ul>

      <h2>Advanced Optimization Techniques</h2>
      <p>Top advertisers leverage these techniques:</p>

      <h3>Dynamic Creative Optimization</h3>
      <p>Use Meta’s dynamic creative tools to test combinations of headlines, images, and CTAs tailored for Instagram and Facebook audiences.</p>

      <h3>Automated Rules</h3>
      <p>Implement rules for:</p>
      <ul>
        <li>Budget reallocation based on Reels performance</li>
        <li>Pausing low-engagement ads</li>
        <li>Scaling high-performing Instagram campaigns</li>
        <li>Bid adjustments for peak engagement hours</li>
      </ul>

      <h2>Industry-Specific Strategies</h2>
      <p>Tailor your approach to your industry:</p>

      <h3>E-commerce</h3>
      <p>Focus on Instagram Shop ads, dynamic product catalogs, and retargeting via Meta pixels.</p>

      <h3>B2C Brands</h3>
      <p>Leverage Instagram Reels and influencer partnerships for brand awareness and engagement.</p>

      <h3>Local Businesses</h3>
      <p>Use location-based targeting and Instagram Stories for community-driven campaigns.</p>

      <h2>Future-Proofing Your Social Media Strategy</h2>
      <p>Stay ahead with these strategies:</p>
      <ul>
        <li>Invest in first-party data via Instagram lead forms</li>
        <li>Create Reels-first content pipelines</li>
        <li>Integrate cross-platform analytics</li>
        <li>Optimize for customer lifetime value</li>
        <li>Explore Meta’s beta features for early adoption</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Mastering Meta and Instagram Ads in 2025 demands a blend of creative excellence, strategic targeting, and robust analytics. By leveraging these strategies and staying agile with platform updates, businesses can achieve exceptional ROI and engagement.</p>

      <p>Success on Meta and Instagram isn’t just about tactics—it’s about connecting authentically with your audience through compelling content. Start implementing these strategies to amplify your brand’s social media presence today.</p>
    `,
  };

  const relatedPosts = [
    {
      id: 2,
      title: "LinkedIn Marketing: Driving 500+ Quality B2B Leads Monthly",
      slug: "linkedin-marketing-leads",
      image:
        "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
    {
      id: 3,
      title: "TikTok Marketing: How to Create Viral Campaigns in 2025",
      slug: "tiktok-marketing-viral",
      image:
        "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
    },
  ];

  const shareUrl = `https://growzaic.com/blog/${blogPost.slug}`;
  const shareTitle = blogPost.title;

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
  ];

  return (
    <>
      <SEO
        title={`${blogPost.title} | Growzaic Blog`}
        description={blogPost.excerpt}
        keywords={blogPost.tags.join(", ")}
        url={`https://growzaic.com/blog/${blogPost.slug}`}
        type="article"
        image={blogPost.image}
      />

      {/* Back to Blog */}
      <section className="pt-32 pb-8 bg-neutral-950">
        <div className="container-custom">
          <Link
            to="/blogs"
            className="inline-flex items-center text-accent-400 hover:text-accent-300 transition-colors"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12 bg-neutral-950">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Category */}
            <div className="flex items-center space-x-2 mb-6">
              <Tag className="text-accent-400" size={16} />
              <span className="text-accent-400 font-medium capitalize">
                {blogPost.category.replace("-", " ")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <User size={16} />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>
                  {new Date(blogPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent-600/20 text-accent-400 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-4 mb-12">
              <span className="text-gray-400 font-medium">Share:</span>
              {shareLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-neutral-800 hover:bg-accent-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                    aria-label={`Share on ${social.name}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-2xl mb-12">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.article>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:text-gray-300 prose-li:mb-2
                prose-strong:text-accent-400
                prose-a:text-accent-400 prose-a:no-underline hover:prose-a:text-accent-300"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-neutral-950">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect-dark p-8 rounded-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{blogPost.author}</h3>
                  <p className="text-accent-400 mb-4">
                    Founder & CEO, Growzaic
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Arbab Ahmad Khan is the founder of Growzaic, a leading
                    social media marketing agency. With over 5 years of
                    experience, he specializes in Meta and Instagram Ads,
                    LinkedIn marketing, and TikTok campaigns that drive
                    explosive engagement and growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-neutral-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">
              More Social Media Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="glass-effect-dark rounded-xl overflow-hidden card-hover group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-3 line-clamp-2 group-hover:text-accent-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-accent-400 text-sm">
                      <span>Read Article</span>
                      <ArrowRight className="ml-1" size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Amplify Your Social Media Presence
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Ready to launch high-impact Meta and Instagram Ads? Book a free
              strategy call with our team to drive engagement and conversions.
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
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
