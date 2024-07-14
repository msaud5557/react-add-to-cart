import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import CartPage from "./component/CartPage";
import Login from "./component/Login";
import Signup from "./component/Signup";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }) => {
  const authenticate = useSelector((state) => state.auth.isAuthenticated);
  return authenticate ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ProductCard />} />
            <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
     </QueryClientProvider>
  );
};

export default App;
