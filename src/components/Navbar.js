import React from 'react'

function Navbar() {
return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/products">MyMakeUp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/About">About <span className="sr-only"></span></a>
      </li>
    </ul>
    <div className="topnav-right">
        <a href="/" className="color-me"><i className=" fa fa-sign-out" style={{color : "white"}}></i>Sign Out</a>
    </div>
  </div>
</nav>
);
}

export default Navbar;