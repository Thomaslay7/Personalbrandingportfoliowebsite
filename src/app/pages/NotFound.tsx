import { Link } from "react-router";
import { Home } from "lucide-react";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
