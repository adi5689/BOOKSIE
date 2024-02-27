import React, { useState } from "react";
import useBookSearch from "../services/useBookSearch";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const { data, loading, error } = useBookSearch(null, null, id); // Pass null for query and category, and the book ID

  const [showFullDescription, setShowFullDescription] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Book not found</p>;

  const { volumeInfo, saleInfo } = data;
  // Check if description is defined before splitting and slicing
  const descriptionWords = volumeInfo?.description ? volumeInfo.description.split(" ") : [];
  const shortDescription = descriptionWords.slice(0,   70).join(" ");

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Extract price information from saleInfo
  const price = saleInfo?.listPrice?.amount ? `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}` : 'N/A';

  return (
    <div className="p-4 lg:p-10">
      <button>
        <Link to="/" className="text-blue-500">Back to search</Link>
      </button>
      <div className="mt-5">
        <h2 className="text-4xl font-bold">{volumeInfo?.title}</h2>
        <h4 className="text-md mb-4">{volumeInfo?.subtitle}</h4>
        <img
          src={volumeInfo?.imageLinks?.thumbnail}
          alt={volumeInfo?.title}
          className="w-64 h-[100%] object-cover mx-auto mb-4 rounded-md"
        />
        <p className="mb-2">
          <strong>Authors:</strong> {volumeInfo?.authors.join(", ")}
        </p>
        <p className="mb-2">
          <strong>Published Date:</strong> {volumeInfo?.publishedDate}
        </p>
        <p className="mb-2">
          <strong>Price:</strong> {price}
        </p>
        <p className="">
          <strong>Description:</strong>
        </p>
        <div
          className=""
          dangerouslySetInnerHTML={{
            __html: showFullDescription
              ? volumeInfo?.description
              : shortDescription,
          }}
        />
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-200 ease-in-out"
        >
          {showFullDescription ? "See Less" : "See More"}
        </button>
        <p className="mb-2">
          <strong>Rating:</strong> {volumeInfo?.averageRating}
        </p>
        <p className="mb-2">
          <strong>Category:</strong> {volumeInfo?.categories?.join(", ")}
        </p>
        <p className="mb-2">
          <strong>Page Count:</strong> {volumeInfo?.pageCount}
        </p>
        <p className="mb-2">
          <strong>Publisher:</strong> {volumeInfo?.publisher}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
