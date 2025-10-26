import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';   // ✅ fixed path
import ArticlePage from './components/pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

