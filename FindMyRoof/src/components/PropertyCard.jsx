import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, searchQuery = '' }) => {
  const {
    id,
    title,
    type,
    price,
    pricePeriod,
    location,
    bedrooms,
    bathrooms,
    parking,
    image,
    featured
  } = property;

  // Function to highlight text
  const highlightText = (text, query) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <span key={index} className="bg-yellow-200 font-semibold">{part}</span> : 
            part
        )}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded">{type}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">{highlightText(location, searchQuery)}</p>
        <div className="flex items-center text-gray-500 text-sm mb-3 space-x-3">
          <span>{bedrooms > 0 ? `${bedrooms} Bedrooms` : 'Studio'}</span>
          <span>{bathrooms} Bathrooms</span>
          <span>{parking > 0 ? `${parking} Parking` : 'No Parking'}</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-secondary">${price}/{pricePeriod}</p>
          <Link 
            to={`/property/${id}`} 
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
