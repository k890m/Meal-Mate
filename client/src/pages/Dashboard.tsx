import React from "react";
import NavBar from "../components/NavBar"; // Import NavBar

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <NavBar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <p className="text-lg text-gray-700">
          Welcome to your dashboard! From here, you can manage your meal prep, plan your meals for the week, and generate grocery lists automatically.
        </p>
        {/* Add dashboard widgets or components here, like meal plan summary, grocery list preview, etc. */}
      </div>
    </div>
  );
};

export default Dashboard;
