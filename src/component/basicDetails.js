import React from "react";
import HeadingTitle from "./common/headingTitle";
import ProgressBar from "./common/progressBar";
import BasicDetailForm from "./common/basicDetailForm";
import Footer from "./common/footer";
function BasicDetails() {
  return (
    <div>
      <div>
        <HeadingTitle />
        <div className="flex flex-row  ">
          <div className="basis-1/6">
            <ProgressBar />
          </div>
          <div className="basis-5/6">
            <BasicDetailForm />
            <Footer/>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default BasicDetails;
