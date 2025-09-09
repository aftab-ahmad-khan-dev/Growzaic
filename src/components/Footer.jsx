import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  LinkedinIcon,
  Instagram,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // 2025

  const footerLinks = {
    "Quick Links": [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Portfolio", path: "/portfolio" },
    ],
    Services: [
      { name: "Social Media Marketing", path: "/services#social-media" },
      { name: "Meta & Instagram Ads", path: "/services#meta-ads" },
      { name: "TikTok Campaigns", path: "/services#tiktok" },
      { name: "Web Development", path: "/services#web-dev" },
    ],
    Resources: [
      { name: "Blogs", path: "/blogs" },
      { name: "Contact Us", path: "/contact" },
      { name: "Book a Free Consultation", path: "/book-slot" },
      { name: "Privacy Policy", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/growzaic", name: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/growzaic", name: "Twitter" },
    {
      icon: LinkedinIcon,
      href: "https://LinkedinIcon.com/company/growzaic",
      name: "LinkedinIcon",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/growzaic",
      name: "Instagram",
    },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Growzaic Logo" className="h-[6rem]" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge social media marketing
              strategies, Meta Ads, and innovative web solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <a href="mailto:info@growzaic.com">info@growzaic.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>+92-321-8108509</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span>Punjab, Pakistan</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Book a free 30-min consultation today!{" "}
              <Link to="/book-slot" className="text-accent-400 hover:underline">
                Get Started
              </Link>
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Growzaic. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
