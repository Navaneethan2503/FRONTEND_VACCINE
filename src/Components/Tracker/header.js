import React, {Component} from 'react';
import "./header.css";

class Header1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div  className="flexRow">
                      
                    <div className="card" id="card1" style={{backgroundColor: "#0073e6"}}  >
                        <div >
                            Total Infected
                        </div>
                        <div className="card-body">
                            {this.props.totalConfirmed}
                        </div>
                    </div>


                    <div className="card" style={{backgroundColor: "#ff1a1a"}} >
                        <div >
                            Total Death
                        </div>
                        <div className="card-body">
                            {this.props.totalDeath}
                        </div>
                    </div>


                    <div className="card" style={{backgroundColor: "#1aff1a"}} >
                        <div>
                            Recovered Patients
                        </div>
                        <div className="card-body">
                            {this.props.totalRecovered}
                        </div>
                    </div>
                
       
        </div> 

        );
    }
}
 
export default Header1;
