# Aus Rental Service

A modern, beginner-friendly rental website built with React, Vite, and Tailwind CSS. This project is designed as a student assignment to demonstrate React development skills with a clean, professional design.

## Features

- **Homepage**: Hero section with search bar, featured properties, categories, and testimonials
- **Property Listing**: Grid view with advanced search and filtering capabilities
- **Property Details**: Detailed view of individual properties with contact functionality
- **Contact Page**: Contact form with validation
- **Responsive Design**: Works on all device sizes
- **Search & Filter**: Search by location, price range, property type, bedrooms, and amenities

## Technologies Used

- React 18
- Vite
- React Router for navigation
- Tailwind CSS for styling
- Custom hooks (optional)
- JSON for dummy data

## Color Scheme

- Primary: #083660 (Deep Blue)
- Secondary: #f9573b (Orange)

## Installation and Setup

1. **Install Node.js**: If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

2. **Clone or Download**: Make sure you have all the project files in your directory.

3. **Install Dependencies**: Open your terminal/command prompt and run:
   ```bash
   npm install
   ```

4. **Start the Development Server**: 
   ```bash
   npm run dev
   ```

5. **Open in Browser**: Navigate to `http://localhost:5173` in your browser to view the application.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   ├── PropertyCard.jsx # Property card for listings
│   ├── SearchBar.jsx   # Search input component
│   └── FilterPanel.jsx # Filter sidebar component
├── pages/              # Page components
│   ├── HomePage.jsx    # Home page
│   ├── PropertiesPage.jsx # Property listing page
│   ├── PropertyDetailsPage.jsx # Property details page
│   └── ContactPage.jsx # Contact page with form
├── data/               # Data files
│   └── properties.json # Dummy property data
├── hooks/              # Custom React hooks (empty for now)
├── assets/             # Static assets (empty for now)
├── App.jsx             # Main App component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Walkthrough

### Homepage
- Search bar for finding properties by location
- Browse by category (Apartment, House, Studio, Shared Room)
- Featured properties section
- Customer testimonials
- Call-to-action sections

### Properties Page
- Grid view of all properties
- Advanced filtering:
  - Property type (Apartment, House, Studio, Shared Room)
  - Price range (min/max)
  - Number of bedrooms
  - Amenities (Furnished, Parking, Air Conditioning)
- Load More functionality for pagination

### Property Details Page
- Large property image
- Complete property information
- Features and amenities checklist
- Contact owner functionality

### Contact Page
- Contact form with validation
- Error handling and success messages
- Business hours and contact information

## Data Structure

The properties data follows this structure:
```json
{
  "id": 1,
  "title": "Property Name",
  "type": "Apartment",
  "price": 650,
  "pricePeriod": "week",
  "location": "City, State",
  "bedrooms": 2,
  "bathrooms": 1,
  "parking": 1,
  "furnished": true,
  "wifi": true,
  "airConditioning": true,
  "image": "image-url",
  "description": "Property description",
  "featured": true
}
```

## Customization

To customize the project:

1. **Colors**: Modify the Tailwind config file `tailwind.config.js`
2. **Properties**: Update the data in `src/data/properties.json`
3. **Styling**: All components use Tailwind CSS classes for easy modification

## Deployment

To deploy this project:

1. Run `npm run build` to create the production build
2. Upload the contents of the `dist` folder to your hosting provider
3. Make sure your hosting provider supports single-page applications (SPA)

## Notes for Students

This project demonstrates several important React concepts:
- Component-based architecture
- State management with useState and useEffect
- Routing with React Router
- Form handling and validation
- Responsive design with Tailwind CSS
- Data filtering and searching
- Props drilling and component communication

Feel free to modify, extend, or improve any part of this project for your assignment!
