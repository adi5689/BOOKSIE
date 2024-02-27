import React, { useState } from "react";
import useBookSearch from "../services/useBookSearch";
import BookList from "./BookList";

const SearchBar = () => {
  const [query, setQuery] = useState("thriller");
  const [category, setCategory] = useState(""); // Add category state
  const { data, loading, error } = useBookSearch(query, category);

  const booksie = data?.items;
  console.log(booksie);
  // console.log(data.items);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center p-1">
      {/* Banner Section */}
      <div
        className="flex flex-col lg:flex-row justify-between items-center w-full h-[40vh] lg:h-[60vh] bg-gradient-to-r from-blue-500 via-purple-500 to-[#009dff] p-3"
        style={{
          backgroundSize: "200%   200%",
          animation: "gradient  15s ease infinite",
        }}
      >
        <div className="lg:w-1/2 text-center">
          <h1 className="text-6xl mb-5 font-bold text-center font-anta">
            BOOKSIE
          </h1>
          <p className="text-[18px] lg:text-xl lg:animate-slow-ping">
            Discover your next favorite book
          </p>
        </div>
        <div className="w-1/2">
          <form onSubmit={handleSearch} className="w-full max-w-sm mx-auto">
            <div className="flex items-center border-b-2 border-white py-2">
              <input
                className="appearance-none bg-transparent border-none w-[100%] text-white py-1 leading-tight focus:outline-none placeholder-white"
                type="text"
                placeholder="Search your book..."
                autoComplete="off"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="flex-shrink-0 bg-green-400 hover:bg-green-600 border-teal-500 hover:border-teal-700 text-sm border-4 text-white ml-2 py-1 px-1 lg:px-3 rounded animate-bounce"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* End of Banner Section */}
      {/* Additional Filter for Category */}
      <div className="flex flex-col items-center p-4">
        <input
          type="text"
          placeholder="Enter category name..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none bg-transparent border-2 border-blue-300 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {data && <BookList books={data.items} />}
    </div>
  );
};

export default SearchBar;
