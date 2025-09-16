
import { createSlice } from '@reduxjs/toolkit';
import initialData from '../data.json';
import { v4 as uuidv4 } from 'uuid'; 

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: initialData,
    searchTerm: '',
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widgetName, widgetText } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push({
          id: uuidv4(),
          name: widgetName,
          content: widgetText
        });
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
});

export const { addWidget, removeWidget, setSearchTerm } = dashboardSlice.actions;

export default dashboardSlice.reducer;