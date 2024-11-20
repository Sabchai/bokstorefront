
import React from 'react';
import './PurchaseHistory.css';

const purchases = [
  { 
    id: 1, 
    title: '1984', 
    date: '2023-10-01', 
    price: 9.99, 
    quantity: 1, 
    total: 9.99, 
    status: 'Delivered', 
    paymentMethod: 'Credit Card' 
  },
  { 
    id: 2, 
    title: 'The Lord of the Rings', 
    date: '2023-09-15', 
    price: 19.99, 
    quantity: 2, 
    total: 39.98, 
    status: 'Pending', 
    paymentMethod: 'PayPal' 
  },
  { 
    id: 3, 
    title: 'Cien Años de Soledad', 
    date: '2023-08-20', 
    price: 14.99, 
    quantity: 1, 
    total: 14.99, 
    status: 'Delivered', 
    paymentMethod: 'Credit Card' 
  },
];

const PurchaseHistory = () => {
  return (
    <div className="purchase-history">
      <h2>Purchase History</h2>
      <ul>
        {purchases.map(purchase => (
          <li key={purchase.id} className="purchase-item">
            <h4>{purchase.title}</h4>
            <p><strong>Date:</strong> {purchase.date}</p>
            <p><strong>Price:</strong> ${purchase.price}</p>
            <p><strong>Quantity:</strong> {purchase.quantity}</p>
            <p><strong>Total:</strong> ${purchase.total}</p>
            <p><strong>Status:</strong> {purchase.status}</p>
            <p><strong>Payment Method:</strong> {purchase.paymentMethod}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PurchaseHistory;
