import React, { useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
 import "./Navbar.css";
 
 const Navbar = ({ setSearchQuery }) => {
   const [query, setQuery] = useState("");
   const navigate = useNavigate();
 
   const handleSubmit = (event) => {
     event.preventDefault();
     setSearchQuery(query);
     navigate("/");
   };
 
   return (
     <nav className="navbar">
       <div className="navbar-container">
         <Link to="/" className="logo">
           MovieDB
         </Link>
         <ul className="nav-links">
           <li>
             <Link to="/">Popular</Link>
           </li>
           <li>
             <Link to="/toprated">Top Rated</Link>
           </li>
           <li>
             <Link to="/upcoming">Upcoming</Link>
           </li>
         </ul>
         <form className="search-bar" onSubmit={handleSubmit}>
           <input
             type="text"
             placeholder="Movie Name"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
           />
           <button type="submit" className="button">
             Search
           </button>
         </form>
       </div>
     </nav>
   );
 };
 
 export default Navbar;