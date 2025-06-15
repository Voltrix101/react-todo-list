import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ filter, setFilter, sortBy, setSortBy }) => {
  return (
    <div className="todo-filter">
      <div className="filter-section">
        <label>Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="sort-section">
        <label>Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter; 