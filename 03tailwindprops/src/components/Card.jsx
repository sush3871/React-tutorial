// components/Card.jsx
import React from "react";

const Card = ({ title, description, image, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 w-full max-w-sm">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        {title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        )}
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default Card;
