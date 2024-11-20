// src/user/WishList.js
import React from 'react';
import './WishList.css';

const wishlist = [
  { 
    id: 1, 
    title: 'One Hundred Years of Solitude', 
    author: 'Gabriel García Márquez', 
    genre: 'Magical Realism', 
    publicationYear: 1967, 
    description: 'A novel that tells the multi-generational story of the Buendía family in the town of Macondo.',
    price: 12.99,
    status: 'Want to Read'
  },
  { 
    id: 2, 
    title: 'Don Quixote', 
    author: 'Miguel de Cervantes', 
    genre: 'Classic Literature', 
    publicationYear: 1605, 
    description: 'A tale of a man who imagines himself to be a chivalrous knight, with humorous and insightful adventures.',
    price: 10.99,
    status: 'Want to Read'
  },
  { 
    id: 3, 
    title: 'The Great Gatsby', 
    author: 'F. Scott Fitzgerald', 
    genre: 'Classic Literature', 
    publicationYear: 1925, 
    description: 'A novel set in the Jazz Age, exploring themes of wealth, class, love, and the American Dream through the tragic figure of Jay Gatsby.', 
    price: 10.99, 
    status: 'Want to Read'
  },
  { 
    id: 4, 
    title: 'The Catcher in the Rye', 
    author: 'J.D. Salinger', 
    genre: 'Fiction', 
    publicationYear: 1951, 
    description: 'The story of a troubled teenager, Holden Caulfield, and his journey of self-discovery in New York City.',
    price: 13.50,
    status: 'Want to Read'
  }
];

const WishList = () => {
  return (
    <div className="wishlist">
      <h2>Wish List</h2>
      <ul>
        {wishlist.map(book => (
          <li key={book.id} className="wishlist-item">
            <div className="book-details">
              <h4>{book.title}</h4>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Published:</strong> {book.publicationYear}</p>
              <p><strong>Description:</strong> {book.description}</p>
              <p><strong>Price:</strong> ${book.price}</p>
              <p><strong>Status:</strong> {book.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishList;
