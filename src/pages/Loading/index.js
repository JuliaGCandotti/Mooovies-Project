import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingPage() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
          mooovies
        </h1>
        <p className="text-lg md:text-2xl font-medium animate-pulse">
          Loading{".".repeat(dots)}
        </p>
      </motion.div>
    </div>
  );
}
