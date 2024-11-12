import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import HeroBg from "../../../src/assets/heroBg.json"; // Import the HeroBg animation
import HeroBgVid from "../../../src/assets/heroBG.mp4"; // Import the HeroBg video

const HeroSection = () => (
  <section
    id="hero"
    className="flex flex-col items-center justify-center h-screen px-4 relative"
  >
    {/* Background Video */}
    <video
      src={HeroBgVid}
      autoPlay
      loop
      muted
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    {/* <Lottie
      animationData={HeroBg}
      loop={true}
      className="absolute inset-0 w-full h-full object-cover"
    /> */}

    <motion.div
      className="relative z-10 text-center"
      initial={{ opacity: 0 }} // Initially hidden
      animate={{ opacity: 1 }} // Fade in animation
      transition={{ duration: 1 }} // Duration of the animation
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App!</h1>
      <p className="text-xl mb-6">
        Discover our features and sign in to get started.
      </p>
      <div className="flex justify-center space-x-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/login"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-700 transition"
          >
            Login
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/signup"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-700 transition"
          >
            Sign Up
          </Link>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
