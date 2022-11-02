import React, { createContext, useReducer } from "react";
// import allProducts from "../../Data";
import {useFetch} from "react-fetch-hook";

function ContextFilter({ children }) {
  const [state, dispath] = useReducer(filterReduce, initialFilterState);

  const { isLoading, data, error } = useFetch(
    "https://fruits-api-project.herokuapp.com/fruits"
  );

  const initialFilterState = {
    filteredItems: [...data],
    searchKey: "",
  };

  const filterItemsHandler = (key) => {
    const filteredItems = data.filter((product) => {
      return product.category === key;
    });

    return { filteredItems };
  };

  const filterReduce = (state, action) => {
    switch (action.type) {
      case "SEARCH_KEYWORD":
        state.searchKey = action.payload;
        return {
          ...state,
        };
      case "ALL":
        state.filteredItems = [...data];
        return {
          ...state,
        };
      case "Winter":
        return {
          ...filterItemsHandler("Winter"),
        };
      case "Spring":
        return {
          ...filterItemsHandler("Spring"),
        };
      case "Summer":
        return {
          ...filterItemsHandler("Summer"),
        };
      case "Autumn":
        return {
          ...filterItemsHandler("Autumn"),
        };
      default:
        return state;
    }
  };

  return (
    <FilterContext.Provider value={{ state }}>
      <FilterDispath.Provider value={{ dispath }}>
        {children}
      </FilterDispath.Provider>
    </FilterContext.Provider>
  );
}

export const FilterContext = createContext();
export const FilterDispath = createContext();

export default ContextFilter;
