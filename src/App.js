import "./App.css";
import input from "./input.json";
import { Fragment, useEffect, useReducer, useState } from "react";
import Input from "./component/input";
import Dropdown from "./component/dropdown";
import Repeating from "./component/repeating";
import BasicDetails from "./component/basicDetails";
const initalState = {};
const reducer = (state, action) => {
  return { ...state, [action.type]: action.data };
};
function App() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const [tableData,setTableData]=useState([])
  const fieldTypes = ["repeating", "dropdown"];

  const buttonHandler = (e) => {
    e.preventDefault();
    postData(state);
    // getTableData()
  };

 

  const postData = (state) => {
    console.log(state, "state");
    fetch("https://sandapps.hubblerapp.com/testrest/srinivas/", {
      method: "POST",
      body: JSON.stringify({
        state,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json())
    .then((data)=>{
      if(data.success){
       setTableData(prevState=>[...prevState,data.result.state])

      }
    })
  };

  return (
   <>      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={buttonHandler}>
          {input.result[0].configuration.map((i, index) => {
            return (
              <Fragment key={index}>
                {!fieldTypes.includes(i.type) && (
                  <Input
                    dispatch={dispatch}
                    item={i}
                    key={i._id}
                    state={state}
                  />
                )}
                {i.type === "dropdown" && (
                  <Dropdown
                    options={i.options}
                    label={i}
                    selectHandler={(seleted) => dispatch({type:i.label, data: seleted})}
                    required={i.required}
                  />
                )}
                {i.type === "repeating" && (
                  <Repeating
                    dispatch={dispatch}
                    options={i.fields}
                    state={state}
                    title={i.label}
                    required={i.required}
                  />
                )}
              </Fragment>
            );
          })}

          <button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 mt-6 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
          
        </form>
      </div>
        */}
      <BasicDetails/>
      </>


  );
}

export default App;
