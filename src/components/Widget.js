import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../features/dashboardSlice";
import ChartWidget from "./ChartWidget";
import "./Widget.css";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  const hasChart = widget.type && widget.data && widget.data.length > 0;

  return (
    <div className="widget-container">
      <div className="widget-header">
        <h3 className="widget-name">{widget.name}</h3>
        <button onClick={handleRemove} className="widget-remove-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="widget-body">
        {hasChart ? (
          <ChartWidget widget={widget} />
        ) : widget.data && widget.data.length === 0 ? (
          <div className="widget-placeholder">
            <svg
              className="placeholder-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 12h18M12 3v18"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{widget.content}</span>
          </div>
        ) : (
          <p className="widget-content">{widget.content}</p>
        )}
      </div>
    </div>
  );
};

export default Widget;
