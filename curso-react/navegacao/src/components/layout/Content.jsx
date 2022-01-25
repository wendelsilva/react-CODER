import React from "react";

import { Routes, Route } from "react-router-dom";
import { About } from "../../views/examples/About";
import { Home } from "../../views/examples/Home";
import { NotFound } from "../../views/examples/NotFound";
import { Param } from "../../views/examples/Param";

import './Content.css';

export function Content() {
  return (
      <div className="content">
        <Routes >
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/param/:id" element={<Param/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
  )
}