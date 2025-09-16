import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "./Category";
import TopNav from "./TopNav";
import "./Dashboard.css";

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const ListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const DotsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

const Dashboard = () => {
  const { categories, searchTerm } = useSelector((state) => state.dashboard);

  const filteredCategories = categories
    .map((category) => {
      const filteredWidgets = category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          widget.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...category, widgets: filteredWidgets };
    })
    .filter((category) => category.widgets.length > 0);

  return (
    <div className="dashboard-page">
      <TopNav />
      <div className="dashboard-content">
        <div className="main-header">
          <h1 className="dashboard-title">CNAPP Dashboard</h1>
          <div className="dashboard-actions">
            <button className="dashboard-btn-icon">
              <ListIcon />
            </button>
            <button className="dashboard-btn-icon">
              <DotsIcon />
            </button>
            <button className="dashboard-add-widget-btn">
              Add Widget <PlusIcon />
            </button>
            <button className="dashboard-btn-dropdown">Last 2 days</button>
          </div>
        </div>
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <div className="no-results">
            No categories or widgets match your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
