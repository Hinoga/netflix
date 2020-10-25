import React from "react";
import "./components.css";

const IconWrapper = ({ icon, name, selected }) => {
  return (
    <div className={`icon ${selected ? "icon--active" : ""}`}>
      {icon}
      <p>{name}</p>
    </div>
  );
};

export default IconWrapper;
