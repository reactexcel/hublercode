import React, { useState } from "react";

function Formula({ options, label, dispatch }) {
  const [values, setValues] = useState({});

  const formula = (operation) => {
    let final = 1;
    for (const property in values) {
      final = values[property] * final;
    }
    switch (operation) {
      case "*":
        return final;
      default:
        return final;
    }
  };

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <label className="text-xl font-semibold">{label}</label>
        <div className="flex justity-content-center items-center">
          {options.map((option, i) => {
            return (
              <div key={i}>
                {option.type === "field" && (
                  <>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      {option.value}
                    </label>
                    <input
                      className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="number"
                      id="a"
                      value={values[option.value]}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          [option.value]: e.target.value,
                        });
                        dispatch({ type: option.value, data: e.target.value });
                      }}
                      placeholder={option.value}
                    />
                  </>
                )}

                {option.type === "operator" && option.value}
              </div>
            );
          })}

          <>Total={formula(" ")}</>
        </div>
      </div>
    </>
  );
}

export default Formula;
