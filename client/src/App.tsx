// src/App.tsx
import React, { useState } from 'react';
import './index.css'; // Ensure Tailwind styles are imported

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // To toggle between Login and Sign Up forms

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between the forms
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Landing Section */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Meal Mate</h1>
        <p className="text-lg text-gray-600 mb-4">Delicious and healthy meal prep, delivered to your door.</p>
        <button
          onClick={toggleForm}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </section>

      {/* Login / Sign Up Section */}
      <section className="bg-white p-6 rounded-lg shadow-lg w-96">
        {isLogin ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
      </section>
    </div>
  );
};

// Login Form Component
const LoginForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Log In</h2>
    <form className="flex flex-col space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
      <button type="submit" className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600">
        Log In
      </button>
    </form>
    <p className="text-sm text-gray-600 mt-4">
      Don't have an account?{' '}
      <span className="text-blue-500 cursor-pointer hover:underline" onClick={toggleForm}>
        Sign Up
      </span>
    </p>
  </div>
);

// Sign Up Form Component
const SignUpForm: React.FC<{ toggleForm: () => void }> = ({ toggleForm }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h2>
    <form className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
      <button type="submit" className="p-3 bg-green-500 text-white rounded-md hover:bg-green-600">
        Sign Up
      </button>
    </form>
    <p className="text-sm text-gray-600 mt-4">
      Already have an account?{' '}
      <span className="text-blue-500 cursor-pointer hover:underline" onClick={toggleForm}>
        Log In
      </span>
    </p>
  </div>
);

export default App;
