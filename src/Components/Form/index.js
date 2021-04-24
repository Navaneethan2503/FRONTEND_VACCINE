import React , {  useState } from 'react';
import Axios from 'axios';
import "./style.css";
import { MaterialButton, MaterialInput } from "../MaterialUI";
import { Route , useHistory} from 'react-router-dom';


function PostForm(props) {
	const url = "http://localhost:8000/api/addbooking"
	const [data , setData] = useState({
		age: "",
		gender: "",
		coronaAffected: "",
		notimes: "",
		currentstatus: "",
		workingtype: "",
		problems: ""

	})

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

  let history = useHistory();

  function handleClick() {
        history.push("/");
    }



	return (
		<div>
		    <form onSubmit = {(e) => submit(e)} >
                  <div className="age">
      <label>
          AGE:
          <input id="age" type="text" placeholder="25 or 65" value={data.value} onChange = {(e) => handle(e)} />
        </label>
       </div>
      <div className="flexRow" >
       <div className="gender" >
        <label>
          GENDER:
          <select id="gender" value={data.value} onChange = {(e) => handle(e)}>
            <option value=" ">SELECT</option>
            <option value="Male">MALE</option>
            <option value="Female">FEMALE</option>
          </select>
        </label>
        </div>
       
        <div className="coronaAffected" >
        <label>
          IN PAST CAUSED BY CORONA :
         
          <select id="coronaAffected" value={data.value} onChange = {(e) => handle(e)}>
            <option value=" ">SELECT</option>
            <option value="1">YES</option>
            <option value="0">NO</option>
          </select>
        </label>
       </div>
      </div>
      <div className="flexRow" >
       <div className="notimes" >
        <label>
          IF CORONA PATIENT , HOW MANY TIMES ATTACKED :
          <input id="notimes" type="text" placeholder="0 OR 1" value={data.value} onChange = {(e) => handle(e)} />
        </label>
       </div>

       
       <div className="currentstatus">
      <label>
          ARE YOU CURED FROM CORONA :
          <select id="currentstatus" value={data.value} onChange = {(e) => handle(e)}>
            <option value=" ">SELECT</option>
            <option value="1">YES</option>
            <option value="0">NO</option>
          </select>
        </label>
       </div>
       </div>
      <div className="flexRow" >
        <div className="workingtype">
      <label>
          WHAT TYPE OF PASSION ARE YOU :
          <select id="workingtype" value={data.value} onChange = {(e) => handle(e)}>
            <option value=" ">SELECT</option>
            <option value="1">FRONTLINE WORKER</option>
            <option value="2">CROWD BASED</option>
            <option value="3">OTHERS</option>
          </select>
        </label>
       </div>
     
       <div className="problems">
      <label >
          ARE YOU CAUSED FROM ANY DISEASE :
          <select id="problems" value={data.value} onChange = {(e) => handle(e)}>
            <option value=" ">SELECT</option>
            <option value="1">HEART ATTACK</option>
            <option value="1">BLOOD PRESSURE / SUGAR</option>
            <option value="1">OTHERS</option>
          </select>
        </label>
       </div>
      </div>


             <div className="submit_btn">
             <MaterialButton
            title="SUBMIT AND CONTINUE"
           
            style={{
              width: "250px",
              margin: "20px 0",
            }}
            onClick={handleClick}
            

          />

		        

            </div>

		    </form>
		</div>
		)
}

export default PostForm;