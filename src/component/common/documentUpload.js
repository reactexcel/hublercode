import React, { Fragment } from "react";

function DocumentUpload(props) {
  const {DocumentDetail}=props
  return (
    <div className="ml-10">
        <h5 class="text-xl mt-10 mb-5 flex flex-start font-bold dark:text-white">
        Documents
      </h5>
      {DocumentDetail.map((title, index) => {
        return (
          <Fragment className="ml-10">
            <label
              class="block mb-2 text-sm flex flex-start font-medium text-gray-400 dark:text-white"
              for="small_size"
            >
              {title.title}{title.required && <span className="text-red-500 text-xl">*</span>}
            </label>
            <input
              class="block w-80 mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="small_size"
              type="file"
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default DocumentUpload;
