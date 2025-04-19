"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [ShowNav, setShowNav] = useState(false);
  const handNavShow = () => setShowNav(!ShowNav);
  const handlCloseNav = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={handNavShow} />
      <MobileNavbar showNav={ShowNav} closeNav={handlCloseNav} />
    </div>
  );
};

export default ResponsiveNavbar;
