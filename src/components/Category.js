import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Widget from './Widget';
import AddWidgetModal from './AddWidgetModal';
import { addWidget } from '../features/dashboardSlice';
import './Category.css'; 

const Category = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddWidget = (data) => {
    dispatch(addWidget(data));
  };

  return (
    <div className="category-container">
      <div className="category-header">
        <h2 className="category-title">{category.title}</h2>
      </div>

      <div className="widgets-grid">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}
        <div className="add-widget-placeholder">
          <button
            onClick={() => setIsModalOpen(true)}
            className="add-widget-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-1"
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
            <span>Add Widget</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <AddWidgetModal
          onAdd={handleAddWidget}
          onClose={() => setIsModalOpen(false)}
          categoryId={category.id}
        />
      )}
    </div>
  );
};

export default Category;
