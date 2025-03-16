import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuBar from "../assets/icons/menu.svg";
import { AnimatePresence, motion } from "framer-motion";

function ClientNavBar() {
  const [menu, setMenu] = useState(false);
  
  const openMenu = (e) => {
    e.stopPropagation();
    setMenu((prev) => !prev);
  };

  return (
    <>
      <nav>
        <label className="font-semibold mx-5">IN-SPIRE CNAHS Research Journal</label>
        <ul className="menu-ul2">
                <NavLink to="/"><li>Home</li></NavLink>
               <NavLink to="/#board"onClick={(e) => {
    e.preventDefault(); // Prevent full reload
    document.getElementById("board")?.scrollIntoView({ behavior: "smooth" });
  }}><li>Editorial Board</li></NavLink>
              <NavLink to="/clientContact"><li className="nav-button">Contact Us</li></NavLink>
              </ul>
        <img src={MenuBar} alt="Menu" onClick={openMenu}  className="lg:hidden"/>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ scaleX: 0,opacity:0 }}
            animate={{ scaleX: 1, opacity:1 }}
            exit={{ scaleX: 0,opacity:0 }}
            transition={{ duration: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="menu-nav"
          >
            
              <ul className="menu-ul">
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/#board"onClick={(e) => {
    e.preventDefault();
    setMenu(false) // Prevent full reload
    document.getElementById("board")?.scrollIntoView({ behavior: "smooth" });
  }}><li>Editorial Board</li></NavLink>
                <NavLink to="/clientContact"><li className="nav-button">Contact Us</li></NavLink>
              </ul>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ClientNavBar;
