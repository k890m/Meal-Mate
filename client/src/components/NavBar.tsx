import React from "react";
import { NavLink } from "react-router-dom"; // If using React Router for navigation

const NavBar: React.FC = () => {
  return (
    <nav className="bg-green-200 p-4 text-green-700 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MealPrepPro</h1>
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/dashboard"
            className="hover:text-green-700"
            activeClassName="text-green-600 font-semibold"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/meal-plans"
            className="hover:text-green-900"
            activeClassName="text-green-600 font-semibold"
          >
            Meal Plans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/grocery-list"
            className="hover:text-green-900"
            activeClassName="text-green-600 font-semibold"
          >
            Grocery List
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="hover:text-green-900"
            activeClassName="text-green-600 font-semibold"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <button
            className="bg-red-500 hover:bg-red-100 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert("Logging out")}
          >
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
