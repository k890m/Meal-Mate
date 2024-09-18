import React from "react";
import NavBar from "../components/NavBar";

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <NavBar />
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Settings</h2>
        <p className="text-lg text-gray-700">
          Manage your account settings and preferences here.
        </p>
      </div>
    </div>
  );
};

export default Settings;
