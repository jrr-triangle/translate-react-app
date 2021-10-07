import { Component } from "react";
import TestService from "../api/TestService";
import Test from "./Test";

class TestingComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return  (<>
          
           <div className="container">
             <p>This is testing content</p>
            
             <form onSubmit="">
        <label>
          Email:{"              "}
          <input type="text" value="" onChange="" />
        </label><br/>
        <label>
          First Name:{"              "}
          <input type="text" value="" onChange="" />
        </label>
        <br/>
        <label>
          Last Name:{"              "}
          <input type="text" value="" onChange="" />
        </label>
        <br/>
        <label>
          Phone number:{"              "}
          <input type="text" value="" onChange="" />
        </label><br/>
        <input type="submit" value="Submit" /><br/>
      </form>      

            </div> 
           <div>
           
           </div>
        </>)
    }
}
export default TestingComponent;