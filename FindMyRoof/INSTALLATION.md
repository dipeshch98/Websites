# Installation Guide for Aus Rental Service

If you encountered memory issues during npm install, please follow these steps:

## Option 1: Try with increased Node.js memory limit

```bash
node --max-old-space-size=4096 "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
```

## Option 2: Clear npm cache and retry

```bash
npm cache clean --force
npm install
```

## Option 3: Use yarn instead of npm

1. Install yarn first:
```bash
npm install -g yarn
```

2. Then install dependencies with yarn:
```bash
yarn install
```

## Option 4: Manual installation of dependencies

If the above options don't work, you can try installing dependencies one by one:

```bash
npm install react@18.2.0 react-dom@18.2.0
npm install react-router-dom@6.8.1
npm install tailwindcss@3.3.2 postcss@8.4.24 autoprefixer@10.4.14
npm install @vitejs/plugin-react@4.2.1 vite@5.2.0
```

## After Installation

Once dependencies are installed, start the development server:

```bash
npm run dev
```

Then open your browser and navigate to `http://localhost:5173`

## If Issues Persist

If you continue to face issues:

1. Try restarting your computer to free up memory
2. Close other applications that might be using memory
3. Check if you have the latest Node.js version installed
4. Consider using a different package manager like yarn or pnpm

## Project Structure

All files have been created successfully:
- Components: Navigation, Footer, Property Cards, Search Bar, Filter Panel
- Pages: Home, Properties, Property Details, Contact
- Data: Sample properties in JSON format
- Configuration: Vite config, Tailwind config, PostCSS config
- Main App: App.jsx with routing configured

The project is ready to run once dependencies are installed successfully.
