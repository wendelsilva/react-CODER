import React from "react";
import { Content } from "../components/layout/Content";
import { Menu } from "../components/layout/Menu";

import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

export function App() {
  return (
      <div className="app">
          <Router>
            <Menu />
            <Content />
          </Router>
      </div>
  )
}