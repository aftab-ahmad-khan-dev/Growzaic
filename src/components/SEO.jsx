import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Growzaic - Digital Marketing Agency',
  description = 'Transform your business with Growzaic\'s expert digital marketing services. Founded by Arbab Ahmad Khan, we specialize in Meta Ads, LinkedIn Ads, SEO, web development, and lead generation.',
  keywords = 'digital marketing, Meta Ads, LinkedIn Ads, SEO, web development, lead generation, business development, Growzaic, Arbab Ahmad Khan',
  image = '/og-image.jpg',
  url = 'https://growzaic.com',
  type = 'website'
}) => {
  const siteTitle = title.includes('Growzaic') ? title : `${title} | Growzaic`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Growzaic - Arbab Ahmad Khan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Growzaic" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#9932cc" />
      <meta name="msapplication-TileColor" content="#9932cc" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Growzaic",
          "founder": "Arbab Ahmad Khan",
          "url": "https://growzaic.com",
          "logo": "https://growzaic.com/logo.png",
          "description": "Digital marketing agency specializing in Meta Ads, LinkedIn Ads, SEO, web development, and lead generation.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Business Ave, Suite 100",
            "addressLocality": "Business City",
            "addressRegion": "BC",
            "postalCode": "12345",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@growzaic.com"
          },
          "sameAs": [
            "https://facebook.com/growzaic",
            "https://twitter.com/growzaic",
            "https://linkedin.com/company/growzaic",
            "https://instagram.com/growzaic"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;