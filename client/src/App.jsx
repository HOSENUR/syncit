import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Playground from "./pages/Playground";
import { DataProvider } from "../src/contexts/DataContext";
import { ClerkProvider } from "@clerk/clerk-react";
export default function App() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      frontendApi="clerk.warm.slug-70.lcl.dev"
      navigate={(to) => navigate(to)}
    >
      <DataProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/playground/:id" element={<Playground />} />
        </Routes>
      </DataProvider>
    </ClerkProvider>
  );
}
