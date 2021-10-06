import React,{Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom"
import TestService from "../api/TestService";
import parse from 'html-react-parser'
import babel from 'babel-core'
import Test2 from './Test2'
import TranslationUtility from "../utilities/TranslationUtility";
import TestingComponent from "./TestingComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            btn:'',
            cal:'',
            target:'JA',
            source:'EN',
            prevTarget:'',
            prevSource:'',
            status:false
        }
        this.translateLanguage = this.translateLanguage.bind(this)
        this.calculate = this.calculate.bind(this)
        this.parsing=this.parsing.bind(this)
    }
    // componentDidMount(){
    //     this.translateLanguage()
    //     //this.updateTargetSource(this.state.target)
    // }
   fullTranslate(){
    TestService.translateLanguage(this.state.target,this.state.source);
    this.updateTargetSource(this.state.target)
   }
    translateLanguage(){    
        var nodeList = TestService.getTreeWalkerNodeList()
        TestService.getTranslatedValue(nodeList,this.state.target,this.state.source)
          .then(response=>{
            TestService.getTreeWalkerContent(response)
          })

        this.updateTargetSource(this.state.target)
        console.log("Updated target: "+this.state.target)
        console.log("updated source: "+this.state.source)  
    }
    updateTargetSource(target){
        console.log("update method: "+target)
        if(this.state.target==="JA"){
            console.log("Target JA found")
          this.setState({
              target:'EN',
              source:'JA',
              prevTarget:'JA',
              prevSource:'EN'
          })
      }else{
          console.log("Target EA found")
          this.setState({
              target:'JA',
              source:'EN',
              prevTarget:'EN',
              prevSource:'JA'
          })
      }

      console.log("update method end: "+this.state.target)
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
               <HeaderComponent/>
               <button onClick={()=>{this.translateLanguage()}}>Translate</button>
               <Link to={`/${this.state.target}/testing`}>Calculate</Link>
               <Switch>
                 <Route path="/" exact component={Test2} />
                 <Route path="/:lg/testing" exact component={TestingComponent}/>
                </Switch>
                <FooterComponent/>
               </>
            </Router>  
            </div>    
        )
    }
}
export default Test;