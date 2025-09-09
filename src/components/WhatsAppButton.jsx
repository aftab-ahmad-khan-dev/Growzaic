import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import whatsApp from "../assets/whatsapp_3670051.png"; // Adjust the path as necessary
const WhatsAppButton = () => {
  const whatsappNumber = "+923218108509"; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Hi! I'm interested in your Social media marketing services."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={whatsApp} alt="" height={50} width={50} />

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-black"></div>
        </div>

        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
