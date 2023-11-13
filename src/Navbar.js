import React from 'react';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">UBERMEALS</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/services">Signup</a></li>
        <li><a href="/HomePage">HomePage</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
