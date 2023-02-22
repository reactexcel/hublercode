import React from "react";

function Input({item, dispatch, state}) {
  return (
    <>
      <div className="grid gap-6 mb-6 mt-6 md:grid-cols-3">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {item.label}
        </label>
        <input
          className="bg-white border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required={item.required}
          type={item?.type}
          value={state[item.label]}
          onChange={(e) => dispatch({ type: item.label, data: e.target.value })}
          min={item?.min}
          max={item?.max}
          minLength={item?.minLength}
          maxLength={item?.maxLength}
          id={item?.id}
          placeholder={item.label}
        />
      </div>
    </>
  );
}

export default Input;
