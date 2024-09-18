import React from "react";
import NavBar from "../components/NavBar";

const GroceryList: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <NavBar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Grocery List</h2>
        <p className="text-lg text-gray-700">
          Here is your grocery list based on your meal plan.
        </p>
      </div>
    </div>
  );
};

export default GroceryList;
