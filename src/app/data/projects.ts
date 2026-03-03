export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "dermaesthetics-app",
    title: "Dermaesthetics App — Skin Health & Clinic Booking",
    description:
      "Mobile app with ML-powered skin analysis, health tracking, and clinic booking integration for dermatology.",
    image: "dermaesthetics.jpeg",
    tags: [
      "Flutter",
      "Firebase",
      "TensorFlow",
      "ML Kit",
      "Image Classification",
    ],
    year: "2022 - Present",
    role: "Lead Mobile & ML Developer",
    duration: "2+ years",
    overview:
      "Developed a comprehensive skin health and beauty app with AI-powered skin analysis capabilities. Integrated with Dermaster Group clinics for seamless booking and consultation.",
    challenge:
      "Building an app with machine learning image classification for skin analysis while ensuring data privacy, seamless clinic integration, and excellent user experience for skin health tracking.",
    solution:
      "Implemented Flutter app with Firebase backend, integrated TensorFlow and Google ML Kit for real-time skin analysis, created personalized skincare recommendations, and built clinic booking system.",
    results: [
      "Successfully deployed with ML-powered skin analysis feature",
      "Integrated with multiple dermatology clinics",
      "Achieved 95% accuracy in skin analysis",
      "Positive user feedback on UX and functionality",
      "Supports personalized skincare recommendations",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "TensorFlow",
      "Google ML Kit",
      "Image Classification",
      "REST API",
    ],
  },
  {
    id: "forstock-warehouse",
    title: "Forstock — Omnichannel Warehouse Management",
    description:
      "Comprehensive inventory management system with multi-marketplace integration (Shopee, Tokopedia, Lazada, TikTok Shop).",
    image: "forstock.png",
    tags: [
      "Flutter",
      "Omnichannel",
      "Inventory Management",
      "Marketplace Integration",
    ],
    year: "2021 - 2022",
    role: "Lead Mobile Developer",
    duration: "6+ months",
    overview:
      "Built a sophisticated warehouse management system integrating multiple e-commerce marketplaces. Enables seamless inventory synchronization across Shopee, Tokopedia, Lazada, and TikTok Shop.",
    challenge:
      "Creating a system that syncs inventory across multiple marketplaces in real-time, manages orders from different platforms, and provides unified dashboard for business operations.",
    solution:
      "Developed Flutter app with real-time API integration to major marketplaces, implemented inventory sync engine, created unified order management dashboard, and integrated customer chat from all platforms.",
    results: [
      "Successfully integrated 4 major marketplace platforms",
      "Real-time inventory synchronization",
      "Unified order and chat management",
      "Reduced manual data entry by 80%",
      "Improved inventory accuracy to 99%",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Go",
      "REST API",
      "Marketplace APIs",
      "Real-time Sync",
    ],
  },
  {
    id: "hakken-online",
    title: "Hakken Online — Anime Merchandise E-Commerce",
    description:
      "Premium e-commerce platform for official and licensed anime merchandise in Singapore and international markets.",
    image: "hakken.jpeg",
    tags: ["Flutter", "Firebase", "E-Commerce", "International Payment"],
    year: "2020 - 2021",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed a mobile e-commerce platform specializing in official anime merchandise including action figures, Nendoroids, and apparel. Serves Singapore and international customers.",
    challenge:
      "Building a premium e-commerce app with international payment support, inventory management, and compelling product showcase for anime enthusiasts.",
    solution:
      "Created Flutter app with Firebase backend, integrated international payment gateways, implemented dynamic product catalog with search/filtering, and built customer review system.",
    results: [
      "Launched successfully in Singapore market",
      "Expanded to international customers",
      "Positive reviews for product quality showcase",
      "High customer satisfaction rating",
      "Growing user base from anime communities",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Payment Gateway",
      "E-Commerce Features",
    ],
  },
  {
    id: "harmony-music-app",
    title: "Harmony — Music Streaming & Playlist Management",
    description:
      "Feature-rich music streaming application with offline playback, personalized playlists, and social sharing capabilities.",
    image: "not-found.png",
    tags: [
      "Flutter",
      "Audio Streaming",
      "Playlist Management",
      "Social Features",
    ],
    year: "2021",
    role: "Mobile Developer",
    duration: "1 month",
    overview:
      "Developed a comprehensive music streaming and playlist management application. Features include audio playback with offline support, personalized playlist creation, music discovery, and social sharing with friends.",
    challenge:
      "Building a smooth music player with offline playback, managing large audio libraries, implementing efficient audio caching, and creating an intuitive UI for playlist management and music discovery.",
    solution:
      "Implemented Flutter app with audio_players plugin for high-quality playback, integrated local storage for offline capability, built playlist management system, and added social features for sharing music with friends.",
    results: [
      "Fully functional music streaming application",
      "Offline playback with downloaded music",
      "Intuitive playlist creation and management",
      "Music discovery with genre and mood filtering",
      "Social sharing features for playlists",
      "Smooth audio playback experience",
      "Efficient audio caching system",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Audio Players",
      "Local Storage",
      "Media Controls",
      "Social Sharing",
    ],
  },
  {
    id: "tokoaki-teknisi",
    title: "TokoAki Teknisi — Car Battery E-Commerce & Service",
    description:
      "Mobile e-commerce and service booking platform for car and motorcycle battery sales and installation.",
    image: "tokoaki.jpg",
    tags: ["Flutter", "Firebase", "Service Booking", "Multi-Payment"],
    year: "2020 - 2022",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Built a mobile platform combining e-commerce for battery sales with service booking for installation. Covers major Indonesian cities with flexible payment options.",
    challenge:
      "Creating a dual-purpose app that handles both product sales and service booking with location-based availability, multiple payment methods, and service tracking.",
    solution:
      "Developed Flutter app with Firebase, implemented location-based service availability, integrated COD and transfer payment options, and built service booking and tracking system.",
    results: [
      "Launched across major cities (Jakarta, Bandung, Surabaya, Yogyakarta)",
      "Multi-payment support (COD & transfer)",
      "Seamless service booking experience",
      "Growing customer base",
      "Positive reviews for service quality",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Location Services",
      "Payment Integration",
    ],
  },
  {
    id: "pocketpet-app",
    title: "PocketPet — Pet Care Management Platform",
    description:
      "Comprehensive mobile app helping pet owners manage veterinary consultations, grooming, boarding, and medical records.",
    image: "pocketpet.png",
    tags: ["Flutter", "Firebase", "Pet Care", "Consultation Platform"],
    year: "2020",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed a all-in-one pet care platform connecting pet owners with veterinarians, groomers, and boarding facilities. Maintains digital medical records and pet identification.",
    challenge:
      "Building a platform that connects multiple service providers, manages appointments, maintains health records, and provides consultation features for diverse pet care needs.",
    solution:
      "Created Flutter app with Firebase backend, integrated veterinary consultation system, implemented booking for grooming and boarding, and built digital medical record system.",
    results: [
      "Successfully launched with multiple service categories",
      "Growing network of veterinarians and groomers",
      "Digital medical records for pet health tracking",
      "Positive feedback from pet owners",
      "Seamless appointment booking experience",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Appointment Booking",
      "Medical Records",
    ],
  },

  {
    id: "papparich-app",
    title: "Papparich — Recipe & Cooking Guide",
    description:
      "Internal application displaying restaurant menus, recipes, and video tutorials for food preparation.",
    image: "papparichid.jpg",
    tags: ["Flutter", "Video Integration", "Recipe Management"],
    year: "2020 - 2021",
    role: "Mobile Developer",
    duration: "1+ years",
    overview:
      "Developed an internal application for Papparich restaurant staff displaying menu items, recipes, and instructional videos for food preparation.",
    challenge:
      "Creating an internal tool that helps kitchen staff learn and execute recipes with visual guides and video tutorials.",
    solution:
      "Built Flutter app with recipe database, integrated video playback for cooking instructions, and menu display system.",
    results: [
      "Improved food preparation consistency",
      "Easy access to recipes for staff",
      "Video tutorials reduced cooking errors",
      "Better staff training tool",
      "Increased operational efficiency",
    ],
    technologies: ["Flutter", "Dart", "Video Integration", "Recipe Management"],
  },
  {
    id: "haircut-management",
    title: "Hair Cut Management System — Salon & Barber Operations",
    description:
      "Complete salon management system with online booking, staff scheduling, appointment tracking, and customer management.",
    image: "hair-cut.png",
    tags: ["Laravel", "Filament", "Flutter", "MySQL", "Salon Management"],
    year: "2024",
    role: "Full Stack Developer",
    duration: "1 month",
    overview:
      "Developed a comprehensive hair salon and barber shop management system. Features online booking platform, powerful Filament admin dashboard for salon staff, iOS & Android mobile apps for customers and stylists, and complete business management tools.",
    challenge:
      "Creating an integrated solution that handles appointment scheduling, stylist availability, customer preferences, service pricing, inventory management, and provides seamless experience across web and mobile platforms.",
    solution:
      "Built Laravel backend with Filament admin panel for comprehensive salon management, developed Flutter mobile app for both iOS and Android platforms, created responsive web booking platform, integrated MySQL database for reliable data management.",
    results: [
      "Complete salon management solution deployed",
      "Online booking platform with customer portal",
      "Powerful Filament admin dashboard for staff scheduling",
      "iOS & Android mobile apps for customers and stylists",
      "Real-time appointment scheduling and management",
      "Stylist availability and skill tracking",
      "Improved customer retention and satisfaction",
    ],
    technologies: [
      "Laravel",
      "Filament",
      "Flutter",
      "MySQL",
      "REST API",
      "Scheduling System",
      "Real-time Updates",
    ],
  },

  {
    id: "glowup-clinic",
    title: "GlowUp — All-in-One Beauty Clinic Management System",
    description:
      "Complete solution for beauty clinics with booking website, management dashboard, mobile apps, and full business support.",
    image: "glow-up.png",
    tags: ["Laravel", "Filament", "Flutter", "MySQL", "Clinic Management"],
    year: "2022",
    role: "Full Stack Developer",
    duration: "1 month",
    overview:
      "Developed a comprehensive clinic management system for GlowUp beauty clinics. Includes web-based booking platform, admin dashboard with Filament, iOS & Android mobile apps for clinic staff and customers, and complete business support.",
    challenge:
      "Creating an integrated solution that handles clinic bookings, staff management, customer profiles, service scheduling, appointment tracking, and provides seamless experience across web and mobile platforms.",
    solution:
      "Built Laravel backend with Filament admin panel for powerful management interface, developed Flutter mobile app for both iOS and Android platforms, created responsive web booking platform, and integrated MySQL database for robust data management.",
    results: [
      "Complete clinic management solution deployed",
      "Web booking platform with customer portal",
      "Powerful Filament admin dashboard for staff",
      "iOS & Android mobile apps for clinic operations",
      "Real-time appointment scheduling and tracking",
      "Streamlined clinic business operations",
      "Improved customer booking experience",
    ],
    technologies: [
      "Laravel",
      "Filament",
      "Flutter",
      "MySQL",
      "REST API",
      "Responsive Design",
      "Real-time Updates",
    ],
  },
  {
    id: "rentcar-management",
    title: "Rent Car Management System — Vehicle Fleet & Booking Platform",
    description:
      "Modern vehicle rental management system with online reservation, fleet tracking, booking automation, and customer portal.",
    image: "not-found.png",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Fleet Management"],
    year: "2024",
    role: "Full Stack Developer",
    duration: "1 month",
    overview:
      "Developed a state-of-the-art vehicle rental management platform. Includes customer-facing booking website with real-time availability, admin dashboard for fleet management, automated reservation system, and integration with payment gateways. Provides seamless experience for customers and efficient operations for rental companies.",
    challenge:
      "Building a scalable rental system that handles real-time vehicle availability, complex booking rules, pricing calculations, customer verification, payment processing, and provides a smooth user experience across different platforms.",
    solution:
      "Built with Next.js for fast, responsive frontend, leveraged Supabase for real-time database and authentication, used PostgreSQL for robust data management, implemented automated booking system with pricing engine, and integrated secure payment processing.",
    results: [
      "Fully functional vehicle rental platform deployed",
      "Real-time vehicle availability and inventory tracking",
      "Online reservation system with instant confirmation",
      "Automated pricing based on duration and vehicle type",
      "Integrated payment gateway for secure transactions",
      "Customer portal for booking management and history",
      "Admin dashboard for fleet and booking management",
      "Reduced booking processing time by 90%",
    ],
    technologies: [
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Real-time Database",
      "Payment Gateway",
      "Authentication",
      "Responsive Design",
    ],
  },
  {
    id: "tokoaki-ecommerce",
    title: "Tokoaki.co.id — E-Commerce Vehicle Battery",
    description:
      "Complete e-commerce platform for vehicle battery sales with order tracking and payment processing.",
    image: "tokoaki.jpg",
    tags: ["Flutter", "E-Commerce", "Order Tracking", "Payment Gateway"],
    year: "2020 - 2022",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed a mobile e-commerce application for Tokoaki battery sales. Users can browse battery options, add to cart, checkout, and track order status in real-time.",
    challenge:
      "Building an e-commerce app that handles vehicle battery selection, inventory management, and real-time order tracking for delivery monitoring.",
    solution:
      "Created Flutter app with product catalog, shopping cart system, checkout process, payment integration, and real-time order status tracking.",
    results: [
      "Successfully processing battery sales online",
      "Real-time order tracking for customers",
      "Improved customer experience with online shopping",
      "Seamless checkout process",
      "Growing user base",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Payment Gateway",
      "Order Tracking",
    ],
  },
  {
    id: "pos-tokoaki-mitra",
    title: "POS TokoAki Mitra — Point of Sales",
    description:
      "Point of sales application for battery shop owners to manage orders, reports, and technician tracking.",
    image: "tokoaki.jpg",
    tags: ["Flutter", "POS", "Order Management", "Reporting"],
    year: "2020 - 2022",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Built a POS system for Tokoaki battery shop partners to manage customer orders, view sales reports, and track technician deliveries.",
    challenge:
      "Creating a comprehensive POS system that handles order management, reporting, and technician tracking for battery installation services.",
    solution:
      "Developed Flutter app with order management, time-based reporting, technician location tracking, and sales history features.",
    results: [
      "Enabled shop owners to manage orders efficiently",
      "Real-time technician tracking",
      "Comprehensive sales reports",
      "Improved business operations",
      "Better customer service",
    ],
    technologies: ["Flutter", "Dart", "POS System", "Google Maps", "Reporting"],
  },
  {
    id: "toko-aki-teknisi",
    title: "Toko Aki Teknisi — Technician Service App",
    description:
      "Mobile application for technicians to receive orders, view customer locations, and manage payments.",
    image: "tokoaki.jpg",
    tags: ["Flutter", "Google Maps", "Service Management", "Order Tracking"],
    year: "2020 - 2022",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed a mobile app for Tokoaki technicians to manage customer orders, view distances, navigate routes, and process payments on the field.",
    challenge:
      "Building a field service app with real-time location tracking, route optimization, and payment processing capabilities.",
    solution:
      "Created Flutter app with Google Maps integration for distance display and route navigation, payment processing, login system, and order reporting.",
    results: [
      "Improved technician efficiency with GPS navigation",
      "Real-time order management",
      "On-site payment processing",
      "Monthly order reports",
      "Better customer coordination",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Google Maps",
      "Payment Gateway",
      "GPS",
      "Firebase",
    ],
  },

  {
    id: "lexikon-app",
    title: "Lexikon — Employee Work Management",
    description:
      "Internal employee management application with location tracking and work management features.",
    image: "not-found.png",
    tags: ["Flutter", "Location Tracking", "Employee Management", "GPS"],
    year: "2020 - 2021",
    role: "Mobile Developer",
    duration: "1+ years",
    overview:
      "Developed an internal employee work management application with real-time location tracking capabilities for field employees.",
    challenge:
      "Building a work management system with periodic GPS tracking without draining device battery significantly.",
    solution:
      "Implemented Flutter app with optimized location tracking that sends user coordinates to server at regular intervals, enabling accurate employee location monitoring.",
    results: [
      "Real-time employee location tracking",
      "Improved field work management",
      "Optimized battery usage with periodic tracking",
      "Better work coordination",
      "Enhanced team visibility",
    ],
    technologies: ["Flutter", "Dart", "GPS", "Location Services", "Firebase"],
  },

  {
    id: "aphrozone-kiosk",
    title: "Aphrozone Kiosk — Beauty E-Commerce",
    description:
      "In-store e-commerce kiosk application for beauty products with stock checking and queue management.",
    image: "not-found.png",
    tags: ["Kotlin", "Android", "E-Commerce", "In-store"],
    year: "2019 - 2021",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed an in-store e-commerce kiosk application for Aphrozone beauty products. Customers can browse, check stock, and get payment queue numbers.",
    challenge:
      "Creating an easy-to-use touch screen interface for customers to browse products, check stock levels, and manage payment queuing.",
    solution:
      "Built Kotlin Android app with product browsing, real-time stock checking, checkout system, and queue number generation for payment.",
    results: [
      "Improved in-store customer experience",
      "Real-time stock visibility",
      "Efficient payment queue management",
      "Increased product discovery",
      "Better customer flow in stores",
    ],
    technologies: [
      "Kotlin",
      "Android",
      "E-Commerce",
      "Queue Management",
      "Stock Management",
    ],
  },
  {
    id: "aphrozone-pos",
    title: "Aphrozone POS — Beauty Product Sales",
    description:
      "Point of sales system for beauty product retail with payment processing and inventory management.",
    image: "not-found.png",
    tags: ["Kotlin", "Android", "POS", "Beauty Retail"],
    year: "2019 - 2021",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Built a POS system for Aphrozone beauty retail following the kiosk application workflow for complete store operations.",
    challenge:
      "Creating a backend POS system that continues the business process from the in-store kiosk application.",
    solution:
      "Developed Kotlin Android app handling payment processing, inventory updates, sales reconciliation, and transaction records.",
    results: [
      "Seamless workflow from kiosk to POS",
      "Complete sales transactions",
      "Inventory synchronization",
      "Payment processing",
      "Business operation continuity",
    ],
    technologies: [
      "Kotlin",
      "Android",
      "POS System",
      "Payment Gateway",
      "Inventory",
    ],
  },
  {
    id: "sobat-mjs-pharmacy",
    title: "SOBAT MJS — Online Pharmacy Platform",
    description:
      "Complete online shop application for pharmacy with user verification, product listing, and Midtrans payment integration.",
    image: "not-found.png",
    tags: ["Flutter", "Payment Gateway", "Pharmacy", "Notifications"],
    year: "2018 - 2020",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed a comprehensive online pharmacy application for Muda Jaya Sukses pharmacy enabling customers to purchase medications online.",
    challenge:
      "Building a secure pharmacy e-commerce platform with user verification, product catalog, and reliable payment processing.",
    solution:
      "Created Flutter app with user registration/login, identity verification, product listing, notification system, and Midtrans payment gateway integration.",
    results: [
      "Enabled online medication sales",
      "Secure user verification system",
      "Reliable payment processing",
      "Push notifications for orders",
      "Growing customer base",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Midtrans",
      "Payment Gateway",
      "Firebase",
      "User Auth",
    ],
  },
  {
    id: "inochi-apparel-pos",
    title: "Inochi Apparel — Children's Clothing POS",
    description:
      "Internal POS application for children's clothing store with inventory, customer management, and printing.",
    image: "not-found.png",
    tags: ["Flutter", "POS", "Inventory", "Retail"],
    year: "2018 - 2020",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Built an internal POS system for Inochi Apparel children's clothing store with comprehensive inventory and customer management.",
    challenge:
      "Creating a POS system with product price management, customer records, order history, inventory tracking, and receipt printing.",
    solution:
      "Developed Flutter app with product listing, customer management, order tracking, inventory system, and integrated printing functionality.",
    results: [
      "Streamlined retail operations",
      "Efficient inventory tracking",
      "Customer data management",
      "Order history tracking",
      "Professional receipt printing",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "POS System",
      "Inventory Management",
      "Printing",
    ],
    link: "https://play.google.com/store/apps/details?id=id.createch.inochi_apparel",
  },
  {
    id: "speranza-donation",
    title: "Speranza — Orphanage Donation Platform",
    description:
      "Charitable donation application connecting donors with orphanage children in Yogyakarta.",
    image: "not-found.png",
    tags: ["Flutter", "Charitable Giving", "Donation Platform"],
    year: "2018 - 2020",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Developed a donation platform for Speranza Foundation orphanage enabling donors to contribute to specific children's needs.",
    challenge:
      "Creating a charitable app that displays children's information, tracks donation targets, and manages donor contributions transparently.",
    solution:
      "Built Flutter app with child profiles, donation targets, needs details, and donation tracking system for transparency.",
    results: [
      "Successfully launched on Play Store",
      "Growing donor community",
      "Transparent donation tracking",
      "Improved fundraising for children",
      "Positive social impact",
    ],
    technologies: ["Flutter", "Dart", "Donation Platform", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=id.createch.speranza_app",
  },
  {
    id: "talikasih-brasil",
    title: "Talikasih Brasil — International Donation App",
    description:
      "Donation application connecting Brazilian donors with orphanage children in Solo City, Indonesia.",
    image: "not-found.png",
    tags: ["Flutter", "International", "Donation Platform"],
    year: "2018 - 2020",
    role: "Mobile Developer",
    duration: "2+ years",
    overview:
      "Built an international donation platform specifically for Brazilian donors supporting orphanage children in Solo City.",
    challenge:
      "Creating a donation app that works internationally with language support and international payment capabilities.",
    solution:
      "Developed Flutter app with internationalization, child profiles, donation targets, and international payment support.",
    results: [
      "Available on Play Store",
      "International donor base from Brazil",
      "Cross-border charitable giving",
      "Positive impact for children in Solo",
      "Cultural exchange through giving",
    ],
    technologies: ["Flutter", "Dart", "International Payment", "Localization"],
    link: "https://play.google.com/store/apps/details?id=id.createch.projeto_shelter",
  },
  {
    id: "food-truck-game",
    title: "Food Truck Game — Casual Mobile Game",
    description:
      "Casual mobile game where players drive a food truck and navigate through obstacles to sell food.",
    image: "not-found.png",
    tags: ["Game Development", "Mobile Game", "Casual Gaming"],
    year: "2018 - 2019",
    role: "Game Developer",
    duration: "1+ years",
    overview:
      "Developed a casual mobile game featuring food truck gameplay with obstacle navigation and food selling mechanics.",
    challenge:
      "Creating an engaging casual game with intuitive controls, fun mechanics, and smooth performance on mobile devices.",
    solution:
      "Built game with food truck driving mechanics, obstacle avoidance, food selling features, and progressive difficulty.",
    results: [
      "Available on Play Store",
      "Positive player reviews",
      "Engaging gameplay mechanics",
      "Smooth mobile performance",
      "Fun casual gaming experience",
    ],
    technologies: ["Game Development", "Mobile Gaming", "Game Physics"],
    link: "https://play.google.com/store/apps/details?id=com.MeryTech.FoodTruck",
  },
];
