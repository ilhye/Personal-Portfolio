import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        {/* For responsive navigation toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* All navigation items at the center */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto center-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/project" className="nav-link">
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="navbar-nav username">
            <p>@ilhye</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
