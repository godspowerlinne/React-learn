import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import Mentors from './pages/Mentors';
import Ordercomplete from './pages/Order-complete';
import OrdercompleteReview from './pages/Order-complete-review';
import Shoppingcart from './pages/Shopping-cart';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Homescreen />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Authenticated user routes  */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/order-complete" element={<Ordercomplete />} />
          <Route path="/order-complete-review" element={<OrdercompleteReview />} />
          <Route path="/shopping-cart" element={<Shoppingcart />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App