import React, { useState } from "react";
import "./style.css";
import { Nav } from "react-bootstrap";
import { FaBars, FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import the necessary icons

export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle the sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  return (
    <div className="col-3">
      <div className="text-dark p-3">
        <div
          className="bg-success text-light"
          style={{ border: "1077px", borderTopColor: "black" }}
        >
          <h4>
            {/* Hamburger Icon */}
            <FaBars
              onClick={toggleSidebar}
              style={{
                cursor: "pointer",
                marginRight: "10px",
                fontSize: "24px", // Adjust icon size
              }}
            />
            Sidebar
            {/* Arrow Icon that changes based on the sidebar state */}
            {isSidebarOpen ? (
              <FaChevronDown
                onClick={toggleSidebar}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  fontSize: "20px",
                }}
              />
            ) : (
              <FaChevronUp
                onClick={toggleSidebar}
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  fontSize: "20px",
                }}
              />
            )}
          </h4>
        </div>
        {isSidebarOpen && (
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link className="nav-link text-dark" to="/">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-dark" to="/about">
                About
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-dark" to="/services">
                Services
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="nav-link text-dark" to="/contact">
                Contact
              </Nav.Link>
            </li>
          </ul>
        )}
      </div>
      <div className="flex-grow-1 p-3">{/* Content will go here */}</div>
    </div>
  );
}
