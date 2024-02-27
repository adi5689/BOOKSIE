// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  // console.log(books);

  return (
  <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {books.map((book) => (
      <div key={book.id} className="w-80 flex flex-col items-center rounded overflow-hidden shadow-lg">
        <BookCard imgUrl={book.volumeInfo.imageLinks?.thumbnail} title={book.volumeInfo.title} author={book.volumeInfo.authors?.join(', ')} id={book.id}/>
      </div>
    ))}
  </div>
  )
};

export default BookList;
