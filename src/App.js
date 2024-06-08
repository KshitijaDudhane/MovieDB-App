import { useState } from "react";
 import "./App.css";
 import Home from "./Components/Home.js";
 import Navbar from "./Components/Navbar.js";
 import Toprated from "./Components/Toprated.js";
 import Upcoming from "./Components/Upcoming.js";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Moviedetail from "./Components/Moviedetail.js";
 
 function App() {
   const [searchQuery, setSearchQuery] = useState("");
 
   return (
     <div className="App">
       <Router>
         <Navbar setSearchQuery={setSearchQuery} />
         <div className="div">
           <Routes>
             <Route path="/" element={<Home searchQuery={searchQuery} />} />
             <Route
               path="/toprated"
               element={<Toprated searchQuery={searchQuery} />}
             />
             <Route
               path="/upcoming"
               element={<Upcoming searchQuery={searchQuery} />}
             />
             <Route path="/movie/:id" element={<Moviedetail />} />
           </Routes>
         </div>
       </Router>
     </div>
   );
 }
 
 export default App;