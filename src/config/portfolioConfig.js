// src/config/portfolioConfig.js

const portfolioConfig = {
    // ==================== PERSONAL INFORMATION ====================
    personalInfo: {
      name: "Krishna Bitthariya",
      firstName: "Krishna",
      lastName: "Bitthariya",
      email: "kbitthariya76@gmail.com",
      tagline: "learning, building, and evolving",
      bio: "Krishna is an enthusiastic and curious learner exploring the world of technology. Passionate about Flutter, Firebase, and cross-platform development, he is actively building real-world projects while learning modern tools like Riverpod, barcode systems, and cloud integration. Eager to grow in app development and AI, Krishna is committed to turning ideas into impactful digital solutions.",
      profileImage: `${process.env.PUBLIC_URL}/my-photo.jpeg`, // Path to your profile image in public folder
      location: "Artist Village, Maharashtra, IN"
    },
  
    // ==================== SOCIAL LINKS ====================
    socialLinks: {
      github: "https://github.com/KrishnaBitthariyaCollege",
      linkedin: "https://www.linkedin.com/in/krishna-bitthariya-445952267/",
      twitter: "", // Optional
      instagram: "", // Optional
      portfolio: "" // Optional - your live portfolio URL
    },
  
    // ==================== NAVIGATION ====================
    navigation: {
      logo: "Krishna Bitthariya", // Text shown in navbar
      menuItems: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/about" }
      ]
    },
  
    // ==================== EXPERIENCE & ACHIEVEMENTS ====================
    experiences: [
      {
        title: "Avishkar & Dipex Finalist",
        tech: "Research & Innovation, IoT Systems",
        description: "Selected as a finalist for university-level Avishkar and Dipex innovation exhibitions for developing scalable Smart Solar Powered Irrigation System",
        gradient: "from-yellow-500 to-amber-600",
        borderColor: "border-yellow-400",
      },
      {
        title: "CubeSat / CanSat Prototype",
        tech: "Arduino, Telemetry, GPS, IMU",
        description: "Developed a 10x10x10 cm CubeSat prototype for high-altitude balloon testing — including data collection, tracking, and parachute descent.",
        gradient: "from-purple-400 to-pink-500",
        borderColor: "border-purple-400",
      }
    ],
  
    // ==================== SKILLS ====================
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 80 },
      { name: "Arduino / Teensy", level: 90 },
      { name: "ESP8266 / ESP-NOW", level: 85 },
      { name: "React / Tailwind", level: 80 },
      { name: "Firebase / MQTT", level: 70 }
    ],
  
    // ==================== AREAS OF INTEREST ====================
    interests: [
      { name: "App Development", emoji: "📱", color: "bg-blue-100 dark:bg-blue-900/30" },
      { name: "IoT & Hardware", emoji: "🔧", color: "bg-green-100 dark:bg-green-900/30" },
      { name: "Cloud Computing", emoji: "☁️", color: "bg-purple-100 dark:bg-purple-900/30" },
      { name: "AI & ML", emoji: "🤖", color: "bg-pink-100 dark:bg-pink-900/30" },
      { name: "Space Tech", emoji: "🚀", color: "bg-indigo-100 dark:bg-indigo-900/30" },
      { name: "Problem Solving", emoji: "🧩", color: "bg-yellow-100 dark:bg-yellow-900/30" }
    ],
  
    // ==================== JOURNEY / TIMELINE ====================
    journey: [
      {
        year: "2024",
        title: "CubeSat Project",
        description: "Developed miniature satellite system for education",
        color: "purple"
      },
      {
        year: "2023",
        title: "Smart Irrigation",
        description: "Built IoT system for water conservation",
        color: "blue"
      }
    ],
  
    // ==================== PROJECTS ====================
    projects: [
      {
        id: 1,
        title: "Smart Irrigation System",
        shortDesc: "IoT-based automated irrigation for water conservation",
        fullDesc: "An intelligent irrigation system that uses soil moisture sensors, weather data, and machine learning to optimize water usage for agriculture. The system automatically waters plants based on real-time conditions, saving water and improving crop health.",
        color: "blue",
        gradient: "from-blue-500 to-indigo-600",
        bgPattern: "bg-blue-50 dark:bg-blue-900/20",
        image: `${process.env.PUBLIC_URL}/smart-irrigation.jpeg`,
        technologies: [
          "Arduino/ESP32",
          "Soil Moisture Sensors",
          "Cloud Integration",
          "Python Backend",
          "MQTT Protocol",
          "Mobile Dashboard"
        ],
        features: [
          "Real-time soil moisture monitoring",
          "Automated watering schedule",
          "Weather API integration",
          "Remote control via mobile app",
          "Water usage analytics",
          "Multiple zone management"
        ],
        github: "https://github.com/KrishnaBitthariya/CropConnect", // Project-specific GitHub link
        demo: null, // Add demo link if available
        status: "Developed",
        year: "2024"
      },
      {
        id: 2,
        title: "CubeSat Satellite Project",
        shortDesc: "Educational miniature satellite system",
        fullDesc: "Designed and developed a CubeSat miniature satellite for educational purposes. The project includes data collection, telemetry systems, and ground station communication. Aims to provide hands-on experience with space technology and satellite systems.",
        color: "purple",
        gradient: "from-purple-500 to-pink-600",
        bgPattern: "bg-purple-50 dark:bg-purple-900/20",
        image: `${process.env.PUBLIC_URL}/cansat.jpeg`,
        technologies: [
          "Arduino",
          "Satellite Systems",
          "C/C++",
          "Data Analysis",
          "Radio Communication",
          "Python"
        ],
        features: [
          "Data collection sensors",
          "Telemetry and tracking",
          "Ground station interface",
          "Power management system",
          "Orbital mechanics simulation",
          "Real-time data visualization"
        ],
        github: "https://github.com/KrishnaBitthariya/Vyom-Voyage-Instumentation",
        demo: null,
        status: "In Development",
        year: "2025"
      }
    ],
  
    // ==================== FOOTER ====================
    footer: {
      copyrightText: "© 2025 krishna bitthariya · All rights reserved.",
      tagline: "I Like to Build Things",
      subtitle: "Let's Connect"
    }
  };
  
  export default portfolioConfig;