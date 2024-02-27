import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase'; // Adjust the import path as necessary
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './features/user/userSlice';
import SearchBar from './components/SearchBar';
import BookDetails from './components/BookDetails';
import Favorites from './components/Favorites';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './features/authentication/SignIn';
import SignUp from './features/authentication/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Extract only the necessary serializable properties
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

  return (
    <div className="bg-gray-100 flex flex-col justify-center">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
