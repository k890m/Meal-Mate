import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './pages/Dashboard';
import MealPlans from './pages/MealPlan';
import GroceryList from './pages/GroceryList';
import Settings from './pages/Settings';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meal-plans" element={<MealPlans />} />
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Dashboard />} /> {/* Redirect to dashboard by default */}
      </Routes>
    </Router>
  </React.StrictMode>,
);
