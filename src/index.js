import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import Custom_page from './pages/Custom_page'
import Recommand_page from "./pages/Recommand_page";
import Result_page from "./pages/Result_page";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="custom" element={<Custom_page />} />
        <Route path="result" element={<Result_page />} />
        <Route path="recommand" element={<Recommand_page />} />
        {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
