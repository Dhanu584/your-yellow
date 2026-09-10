import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

import FinalLogo from "../assets/logo1.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* LEFT SIDE TRIGGER */}
      <aside className="side-trigger">
        <button
          className={`side-menu-button ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          data-cursor-color="#df9aaa"
        >
          <span className="menu-lines">
            <i />
            <i />
          </span>

          <span className="menu-word">
            {open ? "Close" : "Menu"}
          </span>
        </button>

        <Link
          to="/"
          className="side-mini-brand"
          data-cursor-color="#9da9d4"
        >
          ✦
        </Link>
      </aside>

      {/* TOP BAR */}
      <header className="top-bar">
        {!isHome && (
          <Link
            to="/"
            className="top-logo"
            data-cursor-color="#097261"
          >
            <img
              src={FinalLogo}
              alt="Echoriah"
            />
          </Link>
        )}

        <Link
          to="/contact"
          className="top-contact"
          data-cursor-color="#df9aaa"
        >
          Let's Talk ↗
        </Link>
      </header>

      {/* MENU OVERLAY */}
      <div
        className={`side-overlay ${open ? "show" : ""}`}
      >
        <nav className="side-navigation">
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            <span>01</span>
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            <span>02</span>
            About
          </NavLink>

          <NavLink
            to="/skills"
            onClick={closeMenu}
          >
            <span>03</span>
            What We Do
          </NavLink>

          <NavLink
            to="/work"
            onClick={closeMenu}
          >
            <span>04</span>
            Our Work
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            <span>05</span>
            Contact
          </NavLink>
        </nav>

        <div className="side-footer">
          <p>Creative ideas, digital experiences.</p>

          <span>ECHORIAH © 2026</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;