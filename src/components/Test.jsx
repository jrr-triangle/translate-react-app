import React,{Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import TestService from "../api/TestService";
import parse from 'html-react-parser'
import babel from 'babel-core'
import Test2 from './Test2'
import TranslationUtility from "../utilities/TranslationUtility";
import TestingComponent from "./TestingComponent";

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            btn:'',
            cal:'',
            target:'JA',
            source:'EN',
            status:false
        }
        this.getButton = this.getButton.bind(this)
        this.calculate = this.calculate.bind(this)
        this.parsing=this.parsing.bind(this)
    }
    componentDidMount(){
        this.getButton()
    }
    getButton(){    
        var nodeList = TestService.getTreeWalkerNodeList()
        TestService.getTranslatedValue(nodeList,this.state.target,this.state.source)
          .then(response=>{
            TestService.getTreeWalkerContent(response)
          })

          if(this.state.target==='JA'){
              console.log("Target JA found")
            this.setState({
                target:'EN',
                source:'JA'
            })
        }else{
            console.log("Target EA found")
            this.setState({
                target:'JA',
                source:'EN'
            })
        }
        console.log("target: "+this.state.target)
        console.log("source: "+this.state.source)  
    }
    calculate(){
        let a=3*5
        console.log("calculate:"+a)
        alert("Hello, this is me!")
    }
    parsing(){
       
    }
    render(){
        return  (

            <div>
            <Router> 
               <>
               <button onClick={this.getButton}>show</button>
               <button onClick={this.calculate}>Calculate</button>
               <Switch>
                 <Route path="/" exact component={Test2} />
                 <Route path="/testing" exact component={TestingComponent} />
                </Switch>
               </>
            </Router>  
            </div>    
        )
    }
}
export default Test;