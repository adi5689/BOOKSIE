import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark } from "../features/bookmarks/bookmarkSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const BookCard = ({ imgUrl, title, author, id }) => {
  // Add id as a prop
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(state => state.bookmarks);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleAddToFavorites = () => {
    if (!user) {
      toast.error("Please sign in to add to favorites");
      navigate('/signin');
      return;
    }

    const bookExists = favoriteBooks.some(book => book.id === id);

    if (bookExists) {
      toast.error("Book already added to favorites");
    } else {
      dispatch(addBookmark({ imgUrl, title, author, id }));
      toast.success("Book added to favorites");
    }
  };

  const shortTitle = title?.length >  18 ? title.substring(0,  10) + '...' : title;

  return (
    <div className="book-card flex text-center flex-col justify-center px-5 py-5 items-center">
      <Link to={`/book/${id}`}>
        {" "}
        {/* Wrap the content in a Link component */}
        <div className="flex justify-center items-center">
          <img className="h-64" src={imgUrl} alt={title} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-md mb-1">{shortTitle}</div>
          <p className="text-gray-700 text-sm">{author}</p>
        </div>
      </Link>
      <button onClick={handleAddToFavorites} className="bg-green-500 text-white px-4 py-2 rounded-b-lg">Add to favorites</button>
    </div>
  );
};

export default BookCard;
