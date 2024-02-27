import React, { useEffect, useState } from "react";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Header = () => {
  const favoritesCount = useSelector((state) => state.bookmarks.length);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showUserOverlay, setShowUserOverlay] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
        };
        dispatch(setUser(userData));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(setUser(null));
      navigate('/');
      toast.success("Logged out successfully");
    }).catch((error) => {
      toast.error("Error logging out: " + error.message);
    });
  };

  return (
    <header className="flex justify-between items-center bg-blue-500 py-8 px-4 lg:px-10">
      <h1 className="text-white text-xl font-bold font-anta">
        <Link to="/">Booksie</Link>
      </h1>
      <div className="flex items-center">
        {user ? (
          <>
            <FaUserCircle className="text-white text-2xl cursor-pointer mr-2 lg:mr-8" onClick={() => setShowUserOverlay(!showUserOverlay)} />
            {showUserOverlay && (
              <div className="absolute right-0 top-[92px] w-[60vw] lg:w-[30vw] bg-white shadow-md">
                <div className="p-4">
                  {user && <p className="font-bold text-sm lg:text-lg">{user.email}</p>}
                  <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-b-lg mt-2">Logout</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="text-white text-md mr-2 lg:mr-8">
              <Link to='/signin'>Sign In</Link>
            </button>
          </>
        )}
        {/* Display the favorites count */}
        <Link to="/favorites">
          <FaHeart className="text-white text-2xl" />
        </Link>
        {user && <span className="text-white text-md ml-2">{favoritesCount}</span>}
      </div>
    </header>
  );
};

export default Header;
