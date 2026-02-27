import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function PageLoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loading on navigation start
    const handleStart = () => setIsLoading(true);
    const handleEnd = () => setIsLoading(false);

    // Listen for navigation events
    window.addEventListener("beforeunload", handleStart);
    
    // Use a timeout to hide loading after initial load
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 z-50"
      style={{ scaleX: isLoading ? 1 : 0, transformOrigin: "left" }}
    >
      {/* Shimmer effect */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: isLoading ? Infinity : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </motion.div>
  );
}

export function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="mb-4 flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary"
          />
        </div>
        <p className="text-muted-foreground">Loading...</p>
      </motion.div>
    </div>
  );
}
