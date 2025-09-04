# 🌟 Growzaic

Welcome to **Growzaic**, a cutting-edge digital marketing agency founded by **Arbab Ahmad Khan**. Our modern web application, built with **React** and **Vite**, showcases innovative digital marketing, lead generation, and development services through a futuristic, minimalist, and responsive design. 🚀

## 🎯 About Growzaic

Growzaic empowers businesses to thrive in the digital landscape. From Meta and LinkedIn ads to SEO, web development, and lead generation, we deliver tailored strategies to drive growth. Our website reflects our commitment to excellence with a sleek, professional design and seamless user experience.

- **Founder**: Arbab Ahmad Khan
- **Mission**: Transform businesses through innovative digital solutions.
- **Vision**: Redefine digital marketing with creativity and precision.

## ✨ Features

- **Modern UI/UX**: Pixel-perfect, responsive design with a dark theme (black, gray, white, and #9932CC accent). 🎨
- **Dynamic Pages**:
  - **Home**: Hero section, about, services, stats, testimonials, and CTA.
  - **About**: Company story, founder bio, success stories, clients, mission, and vision.
  - **Services**: Comprehensive digital marketing, development, and lead generation offerings.
  - **Portfolio**: Interactive project grid with detailed views and client reviews.
  - **Blogs**: Engaging posts with category filters and search.
  - **Contact Us**: EmailJS-powered form, Google Maps, and multiple contact options.
  - **Book a Slot**: Easy booking form for consultations.
- **Sticky Header**: Glossy, blurred navigation bar with smooth scroll effects. 📍
- **Footer**: Links, contact info, and optional newsletter signup.
- **WhatsApp Button**: Floating, quick-contact button for instant communication. 💬
- **Animations**: Smooth transitions and scroll effects using Framer Motion. 🌈
- **SEO Optimized**: React Helmet for meta tags and fast page loads. 📈
- **Accessibility**: WCAG 2.1-compliant for inclusive design.

## 🛠️ Tech Stack

- **Frontend**: React (JSX), Vite
- **Styling**: Tailwind CSS with custom colors (`#000000`, `#808080`, `#FFFFFF`, `#9932CC`)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS for contact and booking
- **Routing**: React Router
- **SEO**: React Helmet
- **Build Tool**: Vite for fast development and production builds

## 🚀 Getting Started

Follow these steps to set up and run the Growzaic project locally.

### Prerequisites
- **Node.js**: LTS version (e.g., 20.x.x) installed from [nodejs.org](https://nodejs.org).
- **Git**: Installed for cloning the repository.
- **PowerShell**: Ensure script execution is enabled:
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

Installation

Clone the Repository:
git clone https://github.com/yourusername/Growzaic.git
cd Growzaic


Install Dependencies:
npm install


Set Up Tailwind CSS:
npx tailwindcss init -p

Update tailwind.config.js:
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        neutral: '#808080', // Gray
        light: '#FFFFFF', // White
        accent: '#9932CC', // Purple
      },
    },
  },
  plugins: [],
};


Configure EmailJS:

Sign up at emailjs.com.
Add your Service ID, Template ID, and User ID to the Contact and Book a Slot forms.


Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser.


Optional: Global Tools

Install nodemon globally for backend development (if applicable):npm install -g nodemon



📂 Project Structure
Growzaic/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable components (Header, Footer, WhatsAppButton)
│   ├── pages/              # Page components (Home, About, Services, etc.)
│   ├── index.css           # Tailwind CSS setup
│   ├── App.jsx             # Main app with routing
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file

🔒 Security

XSS Protection: Uses DOMPurify to sanitize user inputs in forms.
Secure Forms: EmailJS for safe form submissions.
HTTPS: Deploy with HTTPS for secure communication.
Dependencies: Regularly update packages to patch vulnerabilities:npm update



🌐 Deployment
Deploy to platforms like Vercel or Netlify:

Build the project:npm run build


Deploy the dist folder to your hosting provider.

🤝 Contributing
We welcome contributions! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m "Add YourFeature").
Push to the branch (git push origin feature/YourFeature).
Open a pull request.

📞 Contact

Email: info@growzaic.com
WhatsApp: +923218108509 (placeholder)
Website: growzaic.com (placeholder)
GitHub Issues: Report bugs or suggest features via Issues.

🙏 Acknowledgments

Arbab Ahmad Khan: Visionary founder of Growzaic.
Open Source: Thanks to React, Tailwind CSS, Framer Motion, and Lucide React communities.


Growzaic - Empower
