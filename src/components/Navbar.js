import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = props => {

  const links = [
    { bind: { to: "/", exact: true }, label: "Home" },
    { bind: { to: "/about", exact: false }, label: "Information" },
  ]

  const renderLinks = links => {
      return links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink {...link.bind} >{link.label}</NavLink>
          </li>
        )
      })
  }

return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        Github Search
      </div>
      <ul className="navbar-nav">
        {renderLinks(links)}
      </ul>
    </nav>
    )
}

export default Navbar