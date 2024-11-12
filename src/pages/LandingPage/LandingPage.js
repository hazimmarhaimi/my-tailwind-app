import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LandingCard from "../LandingPage/LandingCard"; // Import the LandingCard component
import HeroSection from "./HeroSection";
import useMeasure from "react-use-measure";
import { motion, useMotionValue, useAnimation } from "framer-motion"; // Import necessary framer-motion hooks

const cardData = [
  {
    title: "Feature One",
    description:
      "Learn about our first feature and how it helps you achieve your goals.",
  },
  {
    title: "Feature Two",
    description:
      "Our second feature provides additional benefits to enhance your experience.",
  },
  {
    title: "Feature Three",
    description:
      "Discover the unique advantages of our third feature tailored just for you.",
  },
  {
    title: "Feature Four",
    description:
      "Explore another feature designed for your convenience and success.",
  },
  {
    title: "Feature Four",
    description:
      "Explore another feature designed for your convenience and success.",
  },
  {
    title: "Feature Four",
    description:
      "Explore another feature designed for your convenience and success.",
  },
];

const LandingPage = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    const finalPosition = -(width * cardData.length) - 4;

    // Define the animation controls
    controls.start({
      x: [0, finalPosition],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 60, // Adjust duration for a smoother scroll
          ease: "linear",
        },
      },
    });

    return () => controls.stop();
  }, [controls, width]);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-400 text-white">
      {/* Navigation Tabs */}
      <nav className="w-full flex justify-center py-4 shadow-lg bg-white bg-opacity-10 backdrop-blur-md rounded-lg fixed top-0 z-50">
        <a
          href="#hero"
          className="px-6 py-2 text-lg font-semibold hover:text-gray-200 transition"
        >
          Hero
        </a>
        <a
          href="#info"
          className="px-6 py-2 text-lg font-semibold hover:text-gray-200 transition"
        >
          Info
        </a>
        <Link
          to="/login"
          className="px-6 py-2 text-lg font-semibold hover:text-gray-200 transition"
        >
          Login
        </Link>
      </nav>
      {/* Hero Section */}
      <HeroSection />
      {/* Info Card Section */}
      <section id="info" className="w-full py-12 bg-[#454545] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>

          {/* Horizontal Scroll Container */}
          <motion.div
            className="flex justify-center space-x-6 pb-4 text-black"
            ref={ref}
            style={{ x: xTranslation }}
            animate={controls} // Bind animation controls here
          >
            {/* Render LandingCard components using map */}
            {[...cardData, ...cardData].map((card, index) => (
              <LandingCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
