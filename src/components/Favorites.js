import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBookmark } from "../features/bookmarks/bookmarkSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Favorites = () => {
  const favoriteBooks = useSelector((state) => state.bookmarks);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      toast.error("Please sign in to view favorites");
      navigate('/signin');
    }
  }, [user, navigate]); // Dependencies array

  const handleRemoveFromFavorites = (bookId) => {
    dispatch(removeBookmark(bookId));
    toast.success("Book removed from favorites");
  };

  return (
    <div className="p-4 lg:p-10">
      <button><Link to='/' className="text-blue-500">Back</Link></button>
      <div className="mt-5">
        <h2 className="text-4xl font-bold mb-4">Favorite Books</h2>
        {favoriteBooks.length ===  0 ? (
          <p>No favorite books yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 lg:grid-cols-4 gap-4">
            {favoriteBooks.map((book, index) => {
              const shortTitle =
                book.title.length >  18
                  ? book.title.substring(0,  18) + "..."
                  : book.title;
              return (
                <div
                  key={index}
                  className="book-card flex text-center flex-col justify-center px-5 py-3 items-center rounded overflow-hidden shadow-lg"
                >
                  <img
                    src={book.imgUrl}
                    alt={book.title}
                    className="h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{shortTitle}</h3>
                    <p className="text-gray-700">{book.author}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromFavorites(book.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-b-lg"
                  >
                    Remove from favorites
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
