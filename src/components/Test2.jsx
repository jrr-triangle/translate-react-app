import { Component } from "react";
import ReactDOM from "react-dom";
import TestService from "../api/TestService";
import parse from 'html-react-parser'
import babel from 'babel-core'
import Test3 from './Test3'

class Test2 extends Component{
   
    render(){
        return  (<div>
           
           <div>
             <p>The data structure name indicates itself that organizing the data</p></div> 
             <Test3/>
   
        </div>)
    }
}
export default Test2;