import React,{Component} from 'react';
import './Tracker.css';
import Header from './header';
import Body from './body';
import Graph from "./graph";
import {totalData} from './Api/index';

class Tracker extends Component {
  state = 
    {
    totalConfirmed : '',
    totalDeath : '',
    totalRecovered : ''
  }

  componentDidMount = async() => {
    await totalData().then(res => {
      this.setState({
        totalConfirmed : res.data.TotalConfirmed,
        totalDeath : res.data.TotalDeaths,
        totalRecovered : res.data.TotalRecovered   
      })
    })
    .catch(err => {
      console.log("error = ", err);
    })
  }


  render() {
  return (

    <div className="App">
           <div>
      <Header totalConfirmed={this.state.totalConfirmed} 
              totalDeath={this.state.totalDeath} 
              totalRecovered={this.state.totalRecovered}/>
      </div>

     
      <div>

                <Body />
  
      </div>
    </div>
  );
  }
}

export default Tracker;
