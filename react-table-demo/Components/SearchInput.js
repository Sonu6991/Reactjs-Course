import React, { useState } from "react";
import { useAsyncDebounce } from "react-table/dist/react-table.development";
import "regenerator-runtime/runtime";

const SearchInput = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value);
    console.log("?????", value);
  }, 1000);
  return (
    <>
      Search :{" "}
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(e) => {
          setFilter(e.target.value);
          onChange(e.target.value);
        }}
      />
    </>
  );
};

export default SearchInput;
