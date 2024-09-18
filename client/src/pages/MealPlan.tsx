import React from "react";
import NavBar from "../components/NavBar";

const MealPlans: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <NavBar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Meal Plans</h2>
        <p className="text-lg text-gray-700">
          Here you can plan your meals for the week.
        </p>
      </div>
    </div>
  );
};

export default MealPlans;
