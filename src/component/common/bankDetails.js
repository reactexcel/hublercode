import React from "react";

function BankDetails(props) {
  const {BankDetail}=props
  return (
    <div>
      <h5 class="text-xl mt-10 mb-10 ml-10 flex flex-start font-bold dark:text-white">
        Bank Details
      </h5>
      <div className="ml-10 flex flex-row flex-wrap gap-10">
        {BankDetail.map((value, index) => {
          return (
            <div className="min-w-[40%] flex flex-wrap flex-row">
              <label
                htlmFor="first_name"
                className="block mb-2 text-sm flex flex-start font-medium text-gray-900 dark:text-white"
              >
                {value.title}
                {value.required && <span className="text-red-500 text-xl">*</span>}
              </label>
              <input
                type={value.type}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={value.placeholder}
                required
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BankDetails;
