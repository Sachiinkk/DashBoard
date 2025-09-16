import React, { useState } from 'react';
import './AddWidgetModal.css'; 

const AddWidgetModal = ({ onAdd, onClose, categoryId }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName.trim() && widgetText.trim()) {
      onAdd({ categoryId, widgetName, widgetText });
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Add Widget</h2>
          <button onClick={onClose} className="modal-close-btn">&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Widget Name</label>
            <input
              type="text"
              className="form-input"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Widget Text</label>
            <textarea
              className="form-textarea"
              rows="3"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="cancel-btn"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="confirm-btn"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;