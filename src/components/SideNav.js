import React, { useState } from "react";
import { FaBars, FaChevronUp, FaChevronDown } from "react-icons/fa";
import "./style.css";

export default function SideNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const categories = [
    "Fresh Meat",
    "Vegetables",
    "Fruit & Nut Gifts",
    "Fresh Berries",
    "Ocean Foods",
    "Butter & Eggs",
    "Fastfood",
    "Fresh Onion",
    "Papayaya & Crisps",
    "Oatmeal",
    "Fresh Bananas",
  ];

  return (
    <div className="bg-white border rounded-bottom ">
      {/* Green Header */}
      <div className="bg-success text-light px-3 py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center mx-auto">
          <FaBars
            onClick={toggleSidebar}
            style={{ cursor: "pointer", marginRight: "10px" }}
          />
          <div className="fw-bold">All departments</div>
        </div>
        {isSidebarOpen ? (
          <FaChevronDown
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FaChevronUp onClick={toggleSidebar} style={{ cursor: "pointer" }} />
        )}
      </div>

      {/* Category List */}
      {isSidebarOpen && (
        <ul className="list-unstyled m-0 px-3 py-2">
          {categories.map((cat, index) => (
            <li key={index} className="py-2 " style={{ cursor: "pointer" }}>
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
