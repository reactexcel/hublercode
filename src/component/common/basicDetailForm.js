import React from "react";

function BasicDetailForm() {
  return (
    <div className="ml-10 mt-5 h-full   ">
      <h3 className="text-xl flex flex-start font-bold dark:text-white ">Basic details</h3>
      <div className=" mt-5   ">
        <div className="flex flex-column mb-5   gap-10">
          <div className="basis-1/3">
            <label
              for="first_name"
              className="block flex flex-start mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Landlord Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Landlord Name"
              required
            />
          </div>
          <div className="basis-1/3">
            <label
              for="countries"
              class="block mb-2 flex flex-start text-sm font-medium text-gray-400 dark:text-white"
            >
              Owner category
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>select</option>
              <option value="US">A</option>
              <option value="CA">B</option>
              <option value="FR">C</option>
              <option value="DE">D</option>
            </select>
          </div>
        </div>

        <div className="flex flex-column mb-5  gap-10">
          <div className="basis-1/3">
            <label
              for="first_name"
              class=" flex flex-start block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Vendor code<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Vendor code"
              required
            />
          </div>
          <div className="basis-1/3">
            <label
              for="first_name"
              class="block mb-2 flex flex-start text-sm font-medium text-gray-400 dark:text-white"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Email"
              required
            />
          </div>
        </div>


        <div className="flex flex-column mb-5   gap-10">
          <div className="basis-1/3">
            <label
              for="first_name"
              class="block mb-2 text-sm flex flex-start font-medium text-gray-400 dark:text-white"
            >
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Mobile Number"
              required
            />
          </div >
          <div className="basis-1/3">
            <label
              for="first_name"
              class="block mb-2 flex flex-start text-sm font-medium text-gray-400 dark:text-white"
            >
              Enter Location Pin
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Location Pin"
            />
          </div>
        </div>

        <div className="flex flex-column  mb-5   gap-10">
          <div className="basis-1/3">
            <label
              for="countries"
              class="block mb-2 text-sm flex flex-start font-medium text-gray-400 dark:text-white"
            >
              State
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a State</option>
              <option value="US">United </option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="basis-1/3">
            <label
              for="first_name"
              class="block mb-2 flex flex-start text-sm font-medium text-gray-400 dark:text-white"
            >
              City
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter City"
            />
          </div>
        </div>

        <div className="">
        <div className="w-[70%]">
            <label
              for="first_name"
              class="block mb-2 flex flex-start text-sm font-medium text-gray-400 dark:text-white"
            >
              Address
            </label>
            <textarea
            rows="4" 
            cols="30"
            type="textarea"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter full address"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicDetailForm;
