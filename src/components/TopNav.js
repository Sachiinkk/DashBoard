import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/dashboardSlice';
import './TopNav.css';

const SearchIcon = ({ size = 16, color = "#9e9e9e" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const BellIcon = ({ size = 20, color = "#757575" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const TopNav = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <span className="logo">Home &gt; Dashboard V2</span>
      </div>

      <div className="nav-center">
        <div className="search-box">
          <SearchIcon />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="search-input" 
            onChange={handleSearch} 
          />
        </div>
      </div>

      <div className="nav-right">
        <button className="nav-btn-icon">
          <BellIcon />
          <span className="notification-badge"></span>
        </button>
        <div className="user-profile-placeholder"></div>
      </div>
    </nav>
  );
};

export default TopNav;
