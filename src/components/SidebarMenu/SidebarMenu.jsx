import React, { useState } from "react";
import categories from "../things";
import "./SidebarMenu.scss";

const SidebarMenu = ({ getSelectedCategory }) => {
  const [indexCategory, setIndexCategory] = useState("");
  const getIndexCategory = (index) => {
    setIndexCategory(index);
  };
  return (
    <section className="sidebar-container">
      <ul className="list">
        {categories.map((category, index) => (
          <li
            onClick={() => {
              getSelectedCategory(category.name);
              getIndexCategory(index);
            }}
            key={index}
            className={indexCategory === index ? "active" : ""}
          >
            <span className="icon">{category.icon}</span>
            <span className="name">{category.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SidebarMenu;
