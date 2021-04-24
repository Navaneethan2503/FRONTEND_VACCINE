import React, { useState } from "react";
import { MaterialButton, MaterialInput } from "../../components/MaterialUI";
import Axios from 'axios';

/**
 * @author
 * @function AddressForm
 **/

const VaccineForm = (props) => {
  const [data , setData] = useState({
    age: "",
    gender: "",
    coronaAffected: "",
    notimes: "",
    currentstatus: "",
    workingtype: "",
    problems: ""

  });

  const inputContainer = {
    width: "100%",
    marginRight: 10,
  };

  const url = "http://localhost:8000/api/addbooking"

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      age: parseInt(data.age),
      gender: data.gender,
      coronaAffected: parseInt(data.coronaAffected),
      notimes: parseInt(data.notimes),
      currentstatus: parseInt(data.currentstatus),
      workingtype: parseInt(data.workingtype),
      problems: parseInt(data.problems)
    }

      )
    .then(res => {
      console.log(res.data)
    })

  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)

  }
 

  return (
      <>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="Age"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="Gender"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="coronaAffected"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="notimes"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
        </div>
        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="currentstatus"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
        </div>

        <div className="flexRow">
          <div style={inputContainer}>
            <MaterialInput
              label="workingtype"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
          <div style={inputContainer}>
            <MaterialInput
              label="problems"
              value={data.value}
              onChange = {(e) => handle(e)}
            />
          </div>
        </div>
        <div className="flexRow">
          <MaterialButton
            title="SAVE AND CONTINUE"
            onClick={submit}
            style={{
              width: "250px",
              margin: "20px 0",
            }}
          />
        </div>
      </>
    );
}

export default VaccineForm;
