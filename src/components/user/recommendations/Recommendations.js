// src/user/Recommendations.js
import React from 'react';
import './Recommendations.css';
const books = [
  { 
    id: 1, 
    title: '1984', 
    author: 'George Orwell', 
    genre: 'Dystopian', 
    price: 9.99, 
    publicationYear: 1949, 
    description: 'A novel about a totalitarian regime that uses surveillance and propaganda to control its citizens.',
    quantityAvailable: 120 
  },
  { 
    id: 2, 
    title: 'The Lord of the Rings', 
    author: 'J.R.R. Tolkien', 
    genre: 'Fantasy', 
    price: 19.99, 
    publicationYear: 1954, 
    description: 'An epic fantasy trilogy that follows a hobbit on his quest to destroy a powerful ring.',
    quantityAvailable: 250 
  },
  { 
    id: 3, 
    title: 'One Hundred Years of Solitude', 
    author: 'Gabriel García Márquez', 
    genre: 'Magical realism', 
    price: 14.99, 
    publicationYear: 1967, 
    description: 'A multi-generational story of the Buendía family, set in the fictional town of Macondo.',
    quantityAvailable: 75 
  },
];

const Recommendations = () => {
  return (
    <div className="recommendations">
      <h2>Book Recommendations</h2>
      <ul>
        {books.map(book => (
          <li key={book.id} className="book-item">
            <h4>{book.title}</h4>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            <p><strong>Publication Year:</strong> {book.publicationYear}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Available:</strong> {book.quantityAvailable} copies</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
