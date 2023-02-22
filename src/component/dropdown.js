import React, { useState } from "react";

export default function Dropdown({ options, selectHandler, label,required }) {
  const [select, setSelected] = useState(options[0].label);
  return (
    <div className="grid gap-6 mb-6 mt-6 md:grid-cols-3">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       {label.label}
      </label>
      <select
        id="countries"
        className="bg-white border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setSelected(e.target.value);
          selectHandler(e.target.value);
        }}
        value={select}
        required={required}
      >
        {options.map((o, i) => (
          <>
          <option key={i} value={o._id}>
            {o.label}
          </option>
          </>
        ))}
      </select>
    </div>
  );
}
