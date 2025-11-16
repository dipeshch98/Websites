import React from 'react';

const FilterPanel = ({ filters, onFilterChange }) => {
  const propertyTypes = ['All', 'Apartment', 'House', 'Studio', 'Shared Room'];
  const bedroomOptions = ['Any', 0, 1, 2, 3, 4];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-primary mb-4">Filters</h3>
      
      {/* Property Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
        <select
          value={filters.type}
          onChange={(e) => onFilterChange({ type: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          {propertyTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e) => onFilterChange({ minPrice: e.target.value })}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange({ maxPrice: e.target.value })}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={(e) => onFilterChange({ bedrooms: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          {bedroomOptions.map(bedrooms => (
            <option key={bedrooms} value={bedrooms}>
              {bedrooms === 'Any' ? 'Any' : bedrooms === 0 ? 'Studio' : `${bedrooms}+`}
            </option>
          ))}
        </select>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.furnished}
              onChange={(e) => onFilterChange({ furnished: e.target.checked })}
              className="mr-2 text-secondary focus:ring-secondary"
            />
            <span className="text-sm">Furnished</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.parking}
              onChange={(e) => onFilterChange({ parking: e.target.checked })}
              className="mr-2 text-secondary focus:ring-secondary"
            />
            <span className="text-sm">Parking</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.airConditioning}
              onChange={(e) => onFilterChange({ airConditioning: e.target.checked })}
              className="mr-2 text-secondary focus:ring-secondary"
            />
            <span className="text-sm">Air Conditioning</span>
          </label>
        </div>
      </div>

      <button
        onClick={() => onFilterChange({
          type: 'All',
          minPrice: '',
          maxPrice: '',
          bedrooms: 'Any',
          furnished: false,
          parking: false,
          airConditioning: false
        })}
        className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterPanel;
