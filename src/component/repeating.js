import React, { Fragment, useState } from "react";
import Formula from "./formula";

const InputGroup = ({ label, ...rest }) => (
  <>
    <label htmlFor={label}>{label}</label>
    <input {...rest} />
    <br />
    <br />
  </>
);

function Repeating({ title, options, dispatch, state }) {
  return (
      <fieldset    >
        <legend className="text-xl font-medium">{title}</legend>
      {options.map((option, i) => (
        <Fragment key={i} >
          {option.type!=="formula" && 
          <div className="grid gap-6 mb-6 mt-6 md:grid-cols-3">
              <InputGroup
                className=" bg-white border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                label={option.label}
                placeholder={option.label}
                type={option.type}
                required={option.required}
                value={state[option.label]}
                onChange={(e) =>
                  dispatch({ type: option.label, data: e.target.value })
                }
                />
          </div>
                }
          {
            option.type==="formula" && <div className="flex "><Formula options={option.formula} label={option.label} dispatch={dispatch}/></div>
          }
        </Fragment>
      ))}
    </fieldset>
  );
}

export default Repeating;
