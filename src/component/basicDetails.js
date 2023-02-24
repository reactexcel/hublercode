import React ,{useState} from "react";
import HeadingTitle from "./common/headingTitle";
import ProgressBar from "./common/progressBar";
import BasicDetailForm from "./common/basicDetailForm";
import Footer from "./common/footer";
import TaxDetails from "./common/taxDetails";
import BankDetails from "./common/bankDetails";
import DocumentUpload from "./common/documentUpload";
import ReviewDetails from "./common/reviewDetails";
function BasicDetails() {
  const [count,setCount]=useState("")
  const [num, setNum]=useState(1)

  const [progress,setProgress] = useState([{title:"Basic Details", completed: true},
  {title:"Tax Details", completed:false}, 
  {title:"Bank Details",completed:false }, 
  {title:"Documents", completed:false} ,
  {title:"Review and Create",completedS:false}]
)
  const BasicDetails = [
    {
      title: "Landlord Name",
      reuired: true,
      type: "text",
      placeholder: "Enter Landlord Name",
    },
    {
      title: "Owner category",
      reuired: true,
      type: "select",
      placeholder: "Select",
    },
    {
      title: "Vendor code",
      reuired: true,
      type: "text",
      placeholder: "Enter Vendor code",
    },
    {
      title: "Email",
      reuired: true,
      type: "email",
      placeholder: "Enter Email",
    },
    {
      title: "Mobile Number",
      reuired: true,
      type: "number",
      placeholder: "Enter Mobile number",
    },
    {
      title: "Location Pin",
      reuired: false,
      type: "number",
      placeholder: "Enter Location pin",
    },
    {
      title: "State",
      reuired: false,
      type: "select",
      placeholder: "Enter state",
    },
    { title: "City", reuired: false, type: "text", placeholder: "Enter city" },
    {
      title: "Address",
      reuired: false,
      type: "textarea",
      placeholder: "Enter Address",
    },
  ];

  const BankDetail = [
    {
      title: "Bank Name",
      type: "text",
      required: true,
      placeholder: "Enter bank name",
    },
    {
      title: "Bank Branch",
      type: "text",
      required: true,
      placeholder: "Enter bank name",
    },
    {
      title: "Bank Account No",
      type: "number",
      required: true,
      placeholder: "Enter bank account no.",
    },
    {
      title: "Renter Bank A/C No",
      type: "number",
      required: true,
      placeholder: "Renter bank account no",
    },
    {
      title: "MSME No",
      type: "text",
      required: true,
      placeholder: "Enter MSME No",
    },
  ];

  const DocumentDetail = [
    { title: "PAN", required: true, type: "file" },
    { title: "Upload VRF", required: false, type: "file" },
    { title: "Upload GST", required: false, type: "file" },
    { title: "Upload MSME", required: false, type: "file" },
    { title: "Cancelled cheque", required: true, type: "file" },
    { title: "Upload Form 13", required: false, type: "file" },
  ];

  const taxInput = [
    { title: "PAN", required: true, type: "text",placeholder:"Enter PAN" },
    { title: "Lower rate of TDS", required: false, type: "select"  },
    { title: "Lower rate of TDS rate", required: false, type: "text",placeholder:"Enter Lower rate of TDS rate" },
    { title: "TDS Rate", required: false, type: "text", placeholder:"Enter rate" },
    { title: "GST Registration", required: true, type: "select" , },
    { title: "GSTIN", required: true, type: "text", placeholder:"Enter GSTIN" },
  ];
  const progressHandler =(id)=>{
    setCount(id)
    setNum(id+1)
   const updatedProgress  = progress.map((val,index)=>{
      if(index==id){
        return(
          val.completed=true
        )
      }else{
        return( val.completed=false)
      }
    })
  }
  return (
  
      <div className="flex flex-col h-screen">
        <HeadingTitle />
        <div className="flex flex-row h-full">
          <div className="basis-1/6 h-full">
            <ProgressBar progress={progress} progressHandler={progressHandler} num={num} />
          </div>
          <div className="basis-5/6 h-full mt-10">
            <div className="h-full overflow-scroll ">
            {count==0? 
            <BasicDetailForm  BasicDetails={BasicDetails}/>: count==1?
            <TaxDetails bac taxInput={taxInput}/>:
            count ==2 ? <BankDetails BankDetail={BankDetail}/>: count==3 ?
            <DocumentUpload DocumentDetail={DocumentDetail}/>:
            <ReviewDetails BasicDetails={BasicDetails} BankDetail={BankDetail} taxInput={taxInput} DocumentDetail={DocumentDetail} />
            }
            </div>
            <Footer/>
          </div>
        </div>
      </div>

  );
}

export default BasicDetails;
