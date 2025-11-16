import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import FilterPanel from '../components/FilterPanel';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';

const PropertiesPage = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    type: 'All',
    minPrice: '',
    maxPrice: '',
    bedrooms: 'Any',
    furnished: false,
    parking: false,
    airConditioning: false
  });
  const [visibleCount, setVisibleCount] = useState(12);

  // Initialize properties data
  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  // Get search query from URL
  const searchQuery = searchParams.get('location') || '';

  // Filter properties based on filters and search query
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Search query filter
      if (searchQuery && !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Property type filter
      if (filters.type !== 'All' && property.type !== filters.type) {
        return false;
      }

      // Price range filter
      if (filters.minPrice && property.price < parseInt(filters.minPrice)) {
        return false;
      }
      if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms !== 'Any') {
        const minBedrooms = parseInt(filters.bedrooms);
        if (minBedrooms === 0 && property.bedrooms !== 0) {
          return false;
        }
        if (minBedrooms > 0 && property.bedrooms < minBedrooms) {
          return false;
        }
      }

      // Amenities filters
      if (filters.furnished && !property.furnished) {
        return false;
      }
      if (filters.parking && property.parking === 0) {
        return false;
      }
      if (filters.airConditioning && !property.airConditioning) {
        return false;
      }

      return true;
    });
  }, [properties, filters, searchQuery]);

  const handleFilterChange = (newFilter) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilter }));
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 12);
  };

  const displayedProperties = filteredProperties.slice(0, visibleCount);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {searchQuery ? `Properties in ${searchQuery}` : 'All Properties'}
          </h1>
          <p className="text-gray-600 mb-6">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mb-8">
            <SearchBar placeholder="Search by city, suburb, or postcode..." showSuggestions={true} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            {displayedProperties.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
                <button
                  onClick={() => handleFilterChange({
                    type: 'All',
                    minPrice: '',
                    maxPrice: '',
                    bedrooms: 'Any',
                    furnished: false,
                    parking: false,
                    airConditioning: false
                  })}
                  className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {displayedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} searchQuery={searchQuery} />
                  ))}
                </div>

                {filteredProperties.length > displayedProperties.length && (
                  <div className="text-center mt-8">
                    <button
                      onClick={loadMore}
                      className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Load More Properties
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertiesPage;
