import React,{Component} from 'react';
import {topCountries} from './Api/index';
import Graph from './graph.js'
import "./header.css";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query : '',
            date : '',
            LStat : '',
            Country: [],
            countryName: [],
            selectedCountry: ''
         }
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async() => {
        await topCountries().then(res => {
            const Todays = res.data.Global  
            const today = new Date();
            const date = today.toLocaleDateString()

            const LatestStat = {
                confirmed : Todays.NewConfirmed,
                death : Todays.NewDeaths,
                recovered : Todays.NewRecovered
            }

            const CountryData = res.data.Countries;
            
            const country = CountryData.filter(ele => {
                return ele.Country
            })
            
            this.setState({
                date:date,
                LStat:LatestStat,
                Country: CountryData,
                countryName: country,
            })          
        })
    }



    handleInputChange = event => {
        const query = event.target.value;
        this.setState({
            query:query
        })
    }    

    handleSubmit = event => {
        const query = this.state.query;
        event.preventDefault();
        this.setState({
            selectedCountry: query,
            query: ""
        })
    }


    render() { 
        return ( 
            <div className="container">
            <h1 style={{color:"#008080"}}>COUNTRY WISE COVID19 STASTICS</h1>
                <div className="flexRow" id="graph">
                    <div className = "part" >
                        <div className="py-3">
                        <div className="container h-100">
                        <div className="d-flex justify-content-center h-100">
                        <form class="form-inline" onSubmit={this.handleSubmit}>
                            <input class="form-control form-control-sm mr-3 w-75" 
                            list="datalist" 
                            onChange={this.handleInputChange} 
                            type="text" 
                            placeholder="Search"
                            aria-label="Search"/>
                            <i class="fa fa-search fa-lg" aria-hidden="true"></i>
                        </form>  
                        </div>

                        <datalist id="datalist"> 
                        {this.state.Country.map(i =><option className="bg-primary" value={i.Country}></option>)}
                        </datalist>
                        </div>
                        </div>

                        <div>
                            <div className="list-group">
                                <div className="list-group-item-primary pl-1"><b>DATE : </b><b className="pl-4">{this.state.date}</b></div>
                                <div className="list-group-item-primary"><b>TODAYS STATISTICS</b></div>
                                <div className="list-group-item-primary pl-1"><b>CONFIRMED : </b><b className="pl-4">{this.state.LStat.confirmed}</b></div>
                                <div className="list-group-item-primary pl-1"><b>DEATHS : </b><b className="pl-4">{this.state.LStat.death}</b></div>
                                <div className="list-group-item-primary pl-1"><b>RECOVERED : </b><b className="pl-4">{this.state.LStat.recovered}</b></div>
                            </div> 
                        </div>
                    </div>
                   
                   
                    <div className="col-12 col-md-9 backgraph">
                        <Graph selectedCountry={this.state.selectedCountry}/>
                    
                    </div>

                </div>
            </div>
         );
    }
}
 
export default Body;