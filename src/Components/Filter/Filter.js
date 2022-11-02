import React, { useContext } from "react";
import { FilterDispath } from "../Hooks/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button
          onClick={() => dispath({ type: "Winter" })}
          className="filter_btn"
        >
          Winter
        </button>
        <button
          onClick={() => dispath({ type: "Spring" })}
          className="filter_btn"
        >
          Spring
        </button>
        <button
          onClick={() => dispath({ type: "Summer" })}
          className="filter_btn"
        >
          Summer
        </button>
        <button
          onClick={() => dispath({ type: "Autumn" })}
          className="filter_btn"
        >
          Autumn
        </button>
      </div>
    </div>
  );
}
