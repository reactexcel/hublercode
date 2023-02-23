import React from "react";

function ProgressBar() {
  return (
    <div>
      <aside
        id="default-sidebar"
        class="absolute   left-0 z-40 w-64 border-r-2 border-solid border-gray-300 h-full transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full w-500 border border-r-2 border-solid px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
        <div className="ml-8 ">
          <h5 class="text-x flex flex-start font-medium dark:text-white">
            New Landlord Progress
          </h5>
          <span className="text-[12px] text-gray-500 mt-3 flex flex-start">Step 1/5</span>
          <div>
            <ol class="mt-10  relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-4 flex flex-start">
                <div class="absolute w-3 h-3 bg-gray-300 rounded-full   -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  Basic Details
                </time>
              </li>
              <li class="mb-10 ml-4 flex flex-start">
                <div class="absolute w-3 h-3 bg-gray-300 rounded-full   -left-1.5 border border-gray dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  Tax Details
                </time>
              </li>
              <li class="mb-10 ml-4 flex flex-start">
                <div class="absolute w-3 h-3 bg-gray-300 rounded-full  -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  Bank Details
                </time>
              </li>
              <li class="mb-10 ml-4 flex flex-start">
                <div class="absolute w-3 h-3 bg-gray-300 rounded-full   -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  Documents
                </time>
              </li>
              <li class="ml-4 flex flex-start">
                <div class="absolute w-3 h-3 bg-gray-300 rounded-full   -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  Review and Create
                </time>
              </li>
            </ol>
          </div>
        </div>

        </div>
      </aside>
    </div>
  );
}

export default ProgressBar;
