

import "./App.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

// Import the component from Aceternity UI
import { GridBackgroundDemo } from "./Pages/Home/GridBackgroundDemo";

// function App() {
//   return (
//     <div className="App relative">
//       {/* Grid background from Aceternity UI */}
//       <GridBackgroundDemo/>

//       {/* Your app content */}
//       <div className="relative z-10">
//         <Router>
//           <AnimatePresence mode="wait">
//             <div>
//               <Navbar />
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="*" element={<div>404 Not Found</div>} />
//               </Routes>
//             </div>
//           </AnimatePresence>
//         </Router>
//       </div>
//     </div>
//   );
// }

// export default App;



function App() {
  return (
    <div className="App relative">
      {/* Grid background fixed behind everything */}
      <GridBackgroundDemo />

      {/* App content always above background */}
      <div className="relative z-10">
        <Router>
          <AnimatePresence mode="wait">
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<div>404 Not Found</div>} />
              </Routes>
            </div>
          </AnimatePresence>
        </Router>
      </div>
    </div>
  );
}

export default App;
