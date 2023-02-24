import React, { Fragment } from "react";

function BasicDetailForm(props) {
  const {BasicDetails}=props
const typeValue =["text", "email","number"]
  return (
    <div className="ml-10 mt-10 h-full   ">
      <h3 className="text-xl flex flex-start font-bold dark:text-white ">
        Basic details
      </h3>
      <div className=" mt-5 flex flex-row flex-wrap gap-10">
      {BasicDetails.map((title, index) => {
        return (
          <>
            {typeValue.includes(title.type)  && (
              <div className="min-w-[40%] flex flex-wrap flex-row">
                <label
                  htmlFor="first_name"
                  className="block text-sm flex flex-start font-medium text-gray-900 dark:text-white"
                  >
                  {title.title}
                  {title.reuired && <span className="text-red-500 text-xl">*</span>}
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={title.placeholder}
                  required ={title.reuired}
                  />
              </div>
            )}

            {title.type == "select" && (
              <div className=" min-w-[40%]  flex flex-wrap flex-row">
                <label for="countries" class="block  text-sm font-medium flex flex-start text-gray-900 dark:text-white">{title.title}{title.reuired && <span className="text-red-500 text-xl">*</span>}</label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                  <option selected>{title.type}</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            )}
            {title.type=="textarea"  && 
            <div class=" min-w-[84%] ">
            <label for="large-input" class="block flex flex-start text-sm font-medium text-gray-900 dark:text-white">{title.title}</label>
            <textarea type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={title.placeholder}/>
        </div>
            
          }
          </>
          
        );
      })}
      </div>
    </div>
  );
}

export default BasicDetailForm;
