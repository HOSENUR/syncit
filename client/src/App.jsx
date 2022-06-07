import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Playground from "./pages/Playground";
import { DataProvider } from "../src/contexts/DataContext";
export default function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/playground/:id" element={<Playground />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}
