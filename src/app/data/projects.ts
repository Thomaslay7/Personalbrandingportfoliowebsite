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
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A scalable multi-vendor marketplace with real-time inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    year: "2025",
    role: "Lead Fullstack Developer",
    duration: "6 months",
    overview: "Built a comprehensive e-commerce platform from the ground up, serving over 100 vendors and 50,000+ active users. The platform processes $2M+ in monthly transactions with 99.9% uptime.",
    challenge: "The client needed a robust marketplace that could handle multiple vendors, real-time inventory synchronization, complex pricing rules, and seamless payment processing while maintaining excellent performance.",
    solution: "Architected a microservices-based solution using React for the frontend, Node.js for backend services, PostgreSQL for data persistence, and Redis for caching. Implemented event-driven architecture for real-time updates and integrated Stripe for payment processing. Deployed on AWS using ECS for container orchestration.",
    results: [
      "Achieved 99.9% uptime with average response time under 200ms",
      "Successfully onboarded 100+ vendors in first 3 months",
      "Processing $2M+ in monthly transactions",
      "Mobile conversion rate increased by 45%",
      "Reduced cart abandonment by 30% through optimized checkout flow"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Stripe API", "AWS ECS", "Docker", "Nginx"],
    link: "https://example-ecommerce.com",
    github: "https://github.com/example/ecommerce"
  },
  {
    id: "project-management-tool",
    title: "Project Management SaaS",
    description: "Real-time collaborative project management tool with advanced analytics and team workflows.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "GraphQL"],
    year: "2024",
    role: "Fullstack Developer",
    duration: "8 months",
    overview: "Developed a modern project management SaaS application with real-time collaboration features, serving teams from 5 to 500+ members. The platform includes kanban boards, gantt charts, time tracking, and comprehensive reporting.",
    challenge: "Building a system that provides real-time updates across distributed teams while maintaining data consistency, supporting offline mode, and providing enterprise-level security.",
    solution: "Implemented a real-time architecture using Socket.io for instant updates, GraphQL for efficient data fetching, and MongoDB for flexible document storage. Built progressive web app (PWA) capabilities for offline support and implemented end-to-end encryption for sensitive data.",
    results: [
      "Achieved real-time sync with <50ms latency",
      "Supports 10,000+ concurrent users",
      "98% customer satisfaction rating",
      "Reduced project delivery time by 35% for clients",
      "Successfully passed SOC 2 Type II audit"
    ],
    technologies: ["React", "TypeScript", "Node.js", "GraphQL", "MongoDB", "Socket.io", "Redis", "Docker", "Kubernetes", "AWS"],
    link: "https://example-pm.com"
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare Analytics Dashboard",
    description: "HIPAA-compliant analytics platform for healthcare providers with predictive insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React", "Python", "PostgreSQL", "TensorFlow", "Docker"],
    year: "2024",
    role: "Senior Fullstack Developer",
    duration: "10 months",
    overview: "Created a comprehensive healthcare analytics platform that helps medical providers track patient outcomes, predict readmission risks, and optimize resource allocation. The system processes data from multiple EMR systems while maintaining HIPAA compliance.",
    challenge: "Integrating with legacy healthcare systems, ensuring HIPAA compliance, processing large datasets efficiently, and presenting complex medical data in an intuitive interface for non-technical users.",
    solution: "Built a secure data pipeline that integrates with HL7 and FHIR standards, implemented machine learning models using TensorFlow for predictive analytics, and created an intuitive dashboard using React with custom data visualizations. All infrastructure deployed on HIPAA-compliant AWS services.",
    results: [
      "Reduced patient readmission rates by 22%",
      "Processing 500K+ patient records daily",
      "Improved resource allocation efficiency by 40%",
      "Achieved HIPAA compliance certification",
      "Reduced data analysis time from days to minutes"
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "TensorFlow", "Docker", "AWS", "Redis", "Recharts"],
    link: "https://example-health.com"
  },
  {
    id: "fintech-mobile-app",
    title: "FinTech Mobile Banking",
    description: "Mobile-first banking application with biometric authentication and investment features.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["React Native", "Node.js", "PostgreSQL", "Plaid", "AWS"],
    year: "2025",
    role: "Mobile & Backend Developer",
    duration: "12 months",
    overview: "Developed a mobile banking application offering checking/savings accounts, peer-to-peer payments, investment portfolios, and financial insights. The app serves 200K+ active users with bank-grade security.",
    challenge: "Building a secure, high-performance mobile app that handles sensitive financial data, integrates with multiple banking APIs, provides real-time transaction updates, and delivers a seamless user experience.",
    solution: "Architected a secure backend using Node.js with multi-layer security, integrated Plaid API for bank connections, implemented biometric authentication, and built the mobile app using React Native for cross-platform deployment. Used WebSockets for real-time notifications and Redis for session management.",
    results: [
      "200K+ active users within first year",
      "4.8/5 star rating on app stores",
      "Zero security breaches since launch",
      "Average session time of 12 minutes",
      "$50M+ in total transactions processed"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Plaid API", "AWS Lambda", "Docker", "Jest"],
    link: "https://example-fintech.com",
    github: "https://github.com/example/fintech"
  }
];
