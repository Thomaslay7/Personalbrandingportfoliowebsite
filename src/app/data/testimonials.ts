export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechVentures Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    content: "Thomas delivered exceptional work on our e-commerce platform. The attention to detail and technical expertise transformed our business. Our conversion rates increased by 45% within the first quarter.",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Product Manager",
    company: "CloudScale Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    content: "Working with Thomas was a game-changer for our project management tool. His ability to understand complex requirements and translate them into elegant solutions is remarkable. Highly recommend!",
    rating: 5
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "CEO",
    company: "HealthTech Innovations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    content: "The healthcare analytics dashboard Thomas built has revolutionized how we track patient outcomes. His expertise in both frontend and backend development, plus understanding of healthcare compliance, made all the difference.",
    rating: 5
  },
  {
    id: "4",
    name: "David Park",
    role: "Founder",
    company: "FinFlow Banking",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    content: "Thomas's work on our mobile banking app exceeded all expectations. The app is secure, fast, and beautifully designed. We went from concept to 200K users in under a year. Couldn't have done it without him.",
    rating: 5
  },
  {
    id: "5",
    name: "Lisa Anderson",
    role: "Director of Engineering",
    company: "DataStream Analytics",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    content: "Thomas is a rare find - equally strong in frontend and backend development with excellent communication skills. He consistently delivered high-quality code ahead of schedule and was a pleasure to work with.",
    rating: 5
  },
  {
    id: "6",
    name: "James Thompson",
    role: "VP of Technology",
    company: "RetailNext",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    content: "The scalability and performance optimizations Thomas implemented saved us thousands in server costs while improving user experience. His deep understanding of cloud architecture is impressive.",
    rating: 5
  }
];