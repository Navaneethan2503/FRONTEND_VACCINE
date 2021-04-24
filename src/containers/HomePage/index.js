import React,{Component} from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import { MaterialButton } from "../../components/MaterialUI";
import covidbanner1 from "../../images/covidbanner.jfif";
import './style.css'
import Header1 from "../../components/Tracker/Tracker";
import { Route , useHistory} from 'react-router-dom';

/**
* @author
* @function HomePage
**/
const HomePage = (props) => {

	let history = useHistory();

	function handleClick() {
        history.push("/checkout");
    }

 

  return(
    <Layout>
      <div className = "banner" >
         <div className="banner_img" > 
         <img src={covidbanner1} className="logoimage" alt="" />
         </div>
         
         <div className="flexRow"   >
         <div className="marquee" style={{ width: "1200px" }}>
             <marquee direction="left">
               The coronavirus COVID-19 pandemic is the defining global health crisis of our time and the greatest challenge we have faced since World War Two. Since its emergence in Asia in 2019, the virus has spread to every continent except Antarctica.

We have now reached the tragic milestone of more than two million deaths, and the human family is suffering under an almost intolerable burden of loss.

“The climbing death toll is staggering, and we must work together to slow the spread of this virus.” - UNDP Administrator Achim Steiner. But the pandemic is much more than a health crisis, it's also an unprecedented socio-economic crisis. Stressing every one of the countries it touches, it has the potential to create devastating social, economic and political effects that will leave deep and longstanding scars. UNDP is the technical lead in the UN’s socio-economic recovery, alongside the health response, led by WHO, and the Global Humanitarian Response Plan, and working under the leadership of the UN Resident Coordinators. Every day, people are losing jobs and income, with no way of knowing when normality will return. Small island nations, heavily dependent on tourism, have empty hotels and deserted beaches. The International Labour Organization estimates that 400 million jobs could be lost.

The World Bank projects a US$110 billion decline in remittances this year, which could mean 800 million people will not be able to meet their basic needs. 
             </marquee>
         </div>
         <div className="button" style={{ width: "250px" }} >

         <MaterialButton
                title="BOOK A VACCINE"
                onClick={handleClick}
              />
        </div>
         </div>
        
    </div>
    <div  className="tracker" >
       <h1 >COVID19 TRACKING</h1>
       <Header1 />
    </div>
      Home Page
      Home Page
    </Layout>
   )

 }

export default HomePage

  