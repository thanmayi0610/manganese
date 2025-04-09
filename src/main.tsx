// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.tsx'

// // import Home from './Home.tsx'

// // createRoot(document.getElementById('root')!).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )
// // import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './main.css';
// import Home from "./pages/Home/Home";
// import Developers from "./pages/developer/Developers";
// import { BrowserRouter } from "react-router";
// import Product from "./pages/product/Product";
// // import App from './App.tsx';

// // import Home from './pages/Home.tsx';

// // Call the max function


// createRoot(document.getElementById('root')!).render(
// //   <>
// //   <Home />
// //  {/* <App />  */}
// //   </>
//   <BrowserRouter>
//   <Router>
//     <Route path="/" element={<Home />} />
//     <Route path="/product" element={<Product />} />
//     <Route path="/developers" element={<Developers />} />
//   </Router>


//   </BrowserRouter>

// );
import { createRoot } from "react-dom/client";
import "./main.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router";
import Product from "./pages/product/Product";
import Developers from "./pages/developer/Developers";
import Pricing from "./pages/pricing/pricing";
import Enterprise from "./pages/enterprise/enterprise";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);