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
             <p>The data structure name indicates itself that organizing the data in memory. There are many ways of organizing the data in the memory as we have already seen one of the data structures, i.e., array in C language. Array is a collection of memory elements in which data is stored sequentially, i.e., one after another. In other words, we can say that array stores the elements in a continuous manner. This organization of data is done with the help of an array of data structures. There are also other ways to organize the data in memory. Let's see the different types of data structures.</p>
             </div> 
             <Test3/>
   
        </div>)
    }
}
export default Test2;