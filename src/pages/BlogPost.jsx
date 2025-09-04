import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { id } = useParams();

  // This would typically come from an API or CMS
  const blogPost = {
    id: 1,
    title: 'The Ultimate Guide to Meta Ads in 2025: Strategies That Actually Work',
    slug: 'meta-ads-guide-2025',
    excerpt: 'Discover the latest Meta advertising strategies that are driving real results for businesses in 2025.',
    category: 'digital-marketing',
    author: 'Arbab Ahmad Khan',
    date: '2025-01-15',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Meta Ads', 'Facebook Marketing', 'Digital Advertising', 'ROI'],
    content: `
      <p>Meta advertising has evolved significantly in 2025, with new features, targeting options, and optimization strategies that can dramatically improve your campaign performance. In this comprehensive guide, we'll explore the most effective Meta Ads strategies that are delivering real results for businesses across various industries.</p>

      <h2>Understanding the Meta Ads Landscape in 2025</h2>
      <p>The digital advertising landscape has become increasingly competitive, making it crucial for businesses to stay ahead of the curve with their Meta advertising strategies. With iOS 14.5+ privacy changes and evolving user behaviors, traditional approaches to Meta advertising are no longer sufficient.</p>

      <p>Successful Meta advertising in 2025 requires a deep understanding of:</p>
      <ul>
        <li>Advanced audience targeting techniques</li>
        <li>Creative optimization strategies</li>
        <li>Attribution modeling and measurement</li>
        <li>Cross-platform integration</li>
        <li>AI-powered campaign optimization</li>
      </ul>

      <h2>Advanced Targeting Strategies</h2>
      <p>One of the most significant changes in Meta advertising has been the shift towards broader targeting combined with advanced creative testing. Here's what's working in 2025:</p>

      <h3>1. Broad Targeting with Creative Hooks</h3>
      <p>Instead of relying heavily on detailed targeting, successful advertisers are using broader audiences and letting Meta's algorithm find the right people based on creative performance and engagement signals.</p>

      <h3>2. Lookalike Audiences 2.0</h3>
      <p>The new lookalike audience features allow for more sophisticated modeling based on customer lifetime value, engagement patterns, and conversion behaviors rather than just basic demographic data.</p>

      <h3>3. Interest-Based Expansion</h3>
      <p>Meta's interest expansion feature has become more sophisticated, allowing advertisers to reach users with related interests that may not be immediately obvious but show high conversion potential.</p>

      <h2>Creative Optimization in 2025</h2>
      <p>Creative content remains the most critical factor in Meta Ads success. Here are the strategies that are driving the best results:</p>

      <h3>User-Generated Content (UGC)</h3>
      <p>Authentic user-generated content continues to outperform polished brand content. Successful campaigns are incorporating:</p>
      <ul>
        <li>Customer testimonials and reviews</li>
        <li>Behind-the-scenes content</li>
        <li>Real customer stories and case studies</li>
        <li>Community-driven content</li>
      </ul>

      <h3>Video-First Approach</h3>
      <p>Video content, particularly short-form videos, are dominating Meta's algorithm. The most effective video strategies include:</p>
      <ul>
        <li>Hook-heavy opening sequences (first 3 seconds)</li>
        <li>Mobile-optimized vertical formats</li>
        <li>Captions and text overlays for sound-off viewing</li>
        <li>Clear call-to-actions within the video content</li>
      </ul>

      <h2>Measurement and Attribution</h2>
      <p>With privacy changes affecting traditional attribution models, successful advertisers are adopting new measurement approaches:</p>

      <h3>First-Party Data Integration</h3>
      <p>Building robust first-party data collection systems through:</p>
      <ul>
        <li>Email marketing integration</li>
        <li>Customer surveys and feedback</li>
        <li>Website behavior tracking</li>
        <li>CRM system integration</li>
      </ul>

      <h3>Multi-Touch Attribution</h3>
      <p>Understanding the complete customer journey across multiple touchpoints and platforms to accurately measure Meta Ads contribution to conversions.</p>

      <h2>Campaign Structure Best Practices</h2>
      <p>The most successful Meta Ads campaigns in 2025 follow these structural principles:</p>

      <h3>Simplified Campaign Architecture</h3>
      <p>Rather than complex campaign structures, successful advertisers are using simplified setups that allow Meta's algorithm to optimize more effectively:</p>
      <ul>
        <li>Fewer ad sets with broader targeting</li>
        <li>Higher budgets per ad set for better optimization</li>
        <li>Consolidated conversion events</li>
        <li>Streamlined creative testing processes</li>
      </ul>

      <h2>Advanced Optimization Techniques</h2>
      <p>Here are the advanced techniques that top-performing advertisers are using:</p>

      <h3>Dynamic Creative Optimization</h3>
      <p>Leveraging Meta's dynamic creative features to automatically test different combinations of headlines, descriptions, images, and calls-to-action.</p>

      <h3>Automated Rules and Scripts</h3>
      <p>Implementing automated rules for:</p>
      <ul>
        <li>Budget reallocation based on performance</li>
        <li>Pausing underperforming ads</li>
        <li>Scaling successful campaigns</li>
        <li>Bid adjustments based on time of day or audience behavior</li>
      </ul>

      <h2>Industry-Specific Strategies</h2>
      <p>Different industries require tailored approaches to Meta advertising:</p>

      <h3>E-commerce</h3>
      <p>Focus on dynamic product ads, retargeting campaigns, and seasonal optimization strategies.</p>

      <h3>B2B Services</h3>
      <p>Emphasis on lead generation campaigns, LinkedIn integration, and long-term nurturing sequences.</p>

      <h3>Local Businesses</h3>
      <p>Location-based targeting, local awareness campaigns, and community engagement strategies.</p>

      <h2>Future-Proofing Your Meta Ads Strategy</h2>
      <p>To ensure long-term success with Meta advertising, consider these forward-looking strategies:</p>

      <ul>
        <li>Invest in first-party data collection and management</li>
        <li>Develop strong creative production capabilities</li>
        <li>Build cross-platform measurement systems</li>
        <li>Focus on customer lifetime value optimization</li>
        <li>Stay updated with Meta's latest features and beta programs</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Meta advertising in 2025 requires a sophisticated approach that combines advanced targeting, compelling creative content, and robust measurement systems. By implementing these strategies and staying adaptable to platform changes, businesses can achieve exceptional results from their Meta advertising investments.</p>

      <p>Remember, successful Meta advertising is not just about the tactics you use, but how well you understand your audience and deliver value through your advertising content. Focus on building genuine connections with your target audience, and the results will follow.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'LinkedIn Lead Generation: How to Generate 500+ Quality B2B Leads Monthly',
      slug: 'linkedin-lead-generation-guide',
      image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'SEO in 2025: The Complete Guide to Ranking Higher on Google',
      slug: 'seo-guide-2025',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop'
    }
  ];

  const shareUrl = `https://growzaic.com/blog/${blogPost.slug}`;
  const shareTitle = blogPost.title;

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    }
  ];

  return (
    <>
      <SEO 
        title={`${blogPost.title} | Growzaic Blog`}
        description={blogPost.excerpt}
        keywords={blogPost.tags.join(', ')}
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
                {blogPost.category.replace('-', ' ')}
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
                <span>{new Date(blogPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
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
                  <p className="text-accent-400 mb-4">Founder & CEO, Growzaic</p>
                  <p className="text-gray-300 leading-relaxed">
                    Arbab Ahmad Khan is the founder of Growzaic, a leading digital marketing agency. 
                    With over 5 years of experience in digital marketing, he specializes in Meta Ads, 
                    LinkedIn marketing, and growth strategies that drive real business results.
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
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
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
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-accent-100 mb-8 leading-relaxed">
              Let our expert team help you implement these proven Meta Ads strategies 
              for your business. Book a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-slot" 
                className="bg-white text-accent-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Book Free Consultation
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