import { Component } from "react";
import ReactDOM from "react-dom";
import TestService from "../api/TestService";
import parse from 'html-react-parser'
import babel from 'babel-core'
import AlertTest from "./AlertTest";

class Test3 extends Component{
   
    render(){
        return  (<div>
           
           <div>
           <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/test.jpg`} 
     alt="logo"/>
             </div> 
            <div>
                <h3>I love this job</h3>
            </div>
            <AlertTest/>
        </div>)
    }
}
export default Test3;