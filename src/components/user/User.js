import React from 'react';
import Profile from "./profil";
import Recommendations from "./recommendations/Recommendations";
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import WishList from './WishList/WishList';

const user= () => {
  return (
    <div className="dashboard">
      <Profile />
      <Recommendations />
      <PurchaseHistory />
      <WishList />
    </div>
  );
}
export default user;