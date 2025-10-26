import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchNews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_SITE_URL}&api_key=${import.meta.env.VITE_API_KEY}`
        );
        console.log('API Response:', response.data);
        console.log('Full API URL:', `${import.meta.env.VITE_API_BASE_URL}${import.meta.env.VITE_SITE_URL}&api_key=${import.meta.env.VITE_API_KEY}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { data, loading, error };
};
