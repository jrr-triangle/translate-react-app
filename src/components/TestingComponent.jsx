import { Component } from "react";
import TestService from "../api/TestService";
import Test from "./Test";

class TestingComponent extends Component{
    constructor(props){
        super(props)
    }
//    componentDidMount(){
//        console.log("Target props: "+this.props.target)
//        console.log("Source props: "+this.props.source)
//        TestService.translateLanguage(this.props.target,this.props.source)
//    }
  
    render(){
        return  (<>
          
           <div>
             <p>This is testing content</p>
            </div> 
            {TestService.translateLanguage(this.props.target,this.props.source)}
        </>)
    }
}
export default TestingComponent;