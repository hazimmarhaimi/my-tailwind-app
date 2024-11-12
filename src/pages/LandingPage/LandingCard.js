// src/components/LandingCard.js
import React from "react";

const LandingCard = ({ title, description }) => (
  <div className="flex-shrink-0 snap-center w-80 bg-white rounded-lg shadow-lg p-6">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p>{description}</p>
  </div>
);

export default LandingCard;
