import { useState, useEffect } from 'react';
import axios from 'axios';

const useBookSearch = (query, category, bookId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (bookId) {
          // Fetch a specific book by ID
          response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        } else {
          // Perform a search based on query and category
          let url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`;
          if (category) {
            url += `&subject=${category}`; // Add category to the API request
          }
          response = await axios.get(url);
        }
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [query, category, bookId]); // Add bookId to the dependency array

  return { data, loading, error };
};

export default useBookSearch;
