import React,{Component} from 'react';
import './App.css';
import Header from './Components/header';
import Body from './Components/body';
import {totalData} from './Components/Api/index';
import HomePage from './Homepage';
import Register from './Components/Register';

class App extends Component {
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
     <HomePage />
     <div className="headlines" >
     <h1>GET IMMUNITY , STOP CORONITY</h1>
     <h1>BY REGISTERING FOR VACCINE </h1>
     </div>
           <div>
      <Header totalConfirmed={this.state.totalConfirmed} 
              totalDeath={this.state.totalDeath} 
              totalRecovered={this.state.totalRecovered}/>
      </div>

     
      <div>

        <Body />
        <Register />
      </div>
    </div>
  );
  }
}

export default App;
