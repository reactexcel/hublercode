import React from "react";
import logo from "../icon/edit.svg";
import document from "../icon/document.svg";
import download from "../icon/download.svg";
import basicDetail from  "../icon/basicDetail.svg";
import bankDetail from "../icon/bankDetail.svg"
import taxDetail from "../icon/taxDetail.svg";
import PdfDocument from "./pdfDocument";

function ReviewDetails(props) {
  const { BasicDetails, BankDetail, taxInput, DocumentDetail } = props;

          
  return (
    <div className="h-full mb-80 overflow-auto  ">
      <h3 className="text-xl mt-10 flex ml-10 flex-start font-bold dark:text-white ">
        Review
      </h3>
      <div className="h-full overflow-auto  ">
      <div>
        <div className="border-2  mt-2 border-solid border-gray-200 flex flex-row justify-between">
          <h5 className="text-x   h-14 flex  ml-10 pt-3 flex-start font-medium dark:text-white ">
          <img src={basicDetail}></img>BASIC DETAILS
          </h5>
          <img className="text-x   h-14 flex  ml-10 pt-3 flex-start font-medium dark:text-white" src={logo}/>
        </div>
        {BasicDetails.map((val) => {
          return (
            <div className="flex flex-start ml-10">
              <p className=" text-sm block flex flex-start mt-2 flex-col">
                {val.title} :
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="border-2 mt-2 border-solid border-gray-200 flex flex-row justify-between">
          <h1 className="text-x ml-10 pt-3 h-14 flex flex-start font-medium dark:text-white ">
          <img src={taxDetail}></img>TAX DETAILS
          </h1>
          <img className="text-x   h-14 flex  ml-10 pt-3 flex-start font-medium dark:text-white" src={logo}/>
        </div>
        {taxInput.map((val) => {
          return (
            <div className="flex flex-start ml-10">
              <p className="block flex text-sm flex-start mt-2 flex-col">
                {val.title} :
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="border-2 mt-2 border-solid border-gray-200 flex flex-row justify-between">
          <h1 className="text-x ml-10 pt-3 h-14 flex  flex-start font-medium dark:text-white ">
          <img src={bankDetail}></img>BANK DETAILS
          </h1>
          <img className="text-x   h-14 flex  ml-10 pt-3 flex-start font-medium dark:text-white" src={logo}/>
        </div>
        {BankDetail.map((val) => {
          return (
            <div className="flex flex-start ml-10">
              <p className="block flex text-sm flex-start mt-2 flex-col">
                {val.title} :
              </p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="border-2 mt-2 border-solid border-gray-200 flex flex-row justify-between">
          <h1 className="text-x ml-10 pt-3 h-14 flex  flex-start font-medium dark:text-white ">
            <img src={document}></img>Documents
          </h1>
          <div className="flex flex-row ">
          <img className="text-x   h-14 flex  ml-10 pt-3 flex-start font-medium dark:text-white" src={download} />
          <img className="text-x   h-14 flex ml-5 pt-3 flex-start font-medium dark:text-white" src={logo}/>
          </div>
        </div>
        <div className="flex flex-row flex-wrap">
          <PdfDocument />
          <PdfDocument />
          <PdfDocument />
          <PdfDocument />
          <PdfDocument />
          <PdfDocument />
          <PdfDocument />
        </div>
      </div>
      </div>
    </div>
  );
}

export default ReviewDetails;
