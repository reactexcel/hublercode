import React from "react";

function TaxDetails(props) {
  const {taxInput}=props
  return (
    <div className="ml-10 mt-10">

<h5 class="text-xl flex flex-start font-bold dark:text-white">
              Tax Details
            </h5>
    <div className="flex flex-wrap flex-row gap-10 mt-10">
      {taxInput.map((value, index) => {
          return(
            <>
             {value.type=="text" &&
            <div className="min-w-[40%]">
                 <label for="first_name" class="block mb-2 text-sm flex flex-start font-medium text-gray-900 dark:text-white">{value.title}{value.required&& <span className="text-red-500 text-xl">*</span>}</label>
                 <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={value.placeholder} required/>
             </div>
             }
             {value.type=="select" && 
             <div className="min-w-[40%]">
             <label for="countries" class="block mb-2 flex flex-start
              text-sm font-medium text-gray-900 dark:text-white">{value.title}{value.required&& <span className="text-red-500 text-xl">*</span>}</label>
             <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option selected>select</option>
               <option value="US">United States</option>
               <option value="CA">Canada</option>
               <option value="FR">France</option>
               <option value="DE">Germany</option>
             </select>
             </div>
             }
                </>

        )
      })}
    </div>
    </div>

  );
}

export default TaxDetails;
