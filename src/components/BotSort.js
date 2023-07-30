// components/BotSort.js
import React from 'react'; // Import the React library to define React components

const BotSort = ({ filterBy, sortBy, onFilterChange, onSortChange }) => {
  // Define a functional component called BotSort that receives four props: filterBy, sortBy, onFilterChange, and onSortChange
  return (
    // Render the following JSX code when the BotSort component is used
    <div className="bot-filter-sort">
      {/* Filter by Class label */}
      <label htmlFor="filter">Filter by Class:</label>

      {/* Dropdown select for filtering bots by class */}
      <select
        id="filter" // Set the ID for the select element
        value={filterBy} // Set the selected value based on the 'filterBy' prop
        onChange={(e) => onFilterChange(e.target.value)} // Call the 'onFilterChange' function with the selected value when the select value changes
        multiple // Allow multiple selections (multiple attribute in the select element)
      >
        {/* Dropdown options for filtering */}
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Witch">Witch</option>
        <option value="Defender">Defender</option>
        <option value="Assault">Assault</option>
      </select>

      {/* Sort by label */}
      <label htmlFor="sort">Sort by:</label>

      {/* Dropdown select for sorting bots */}
      <select
        id="sort" // Set the ID for the select element
        value={sortBy} // Set the selected value based on the 'sortBy' prop
        onChange={(e) => onSortChange(e.target.value)} // Call the 'onSortChange' function with the selected value when the select value changes
      >
        {/* Dropdown options for sorting */}
        <option value="name">Name</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
};

export default BotSort; // Export the BotSort component to be used in other parts of the application
