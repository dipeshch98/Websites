import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';   
import ArticlePage from './pages/ArticlePage';

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

