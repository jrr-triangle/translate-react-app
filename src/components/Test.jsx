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
        this.Observer= this.Observer.bind(this)
    }
   
    translateLanguage(){    
        var nodeList = TestService.getTreeWalkerNodeList()
        TestService.getTranslatedValue(nodeList,this.state.target,this.state.source)
          .then(response=>{
            TestService.getTreeWalkerContent(response)
              this.Observer(this.state.target,this.state.source)
              this.updateTargetSource(this.state.target)
          })

       
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


    Observer(target,source) {
        const mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                console.log(mutation)
                if(mutation.addedNodes.length>0) {
                    if(mutation.target.textContent.length>0) {
                        console.log(mutation.target.textContent)
                        mutationObserver.disconnect()
                        var treeWalker = document.createTreeWalker(
                            mutation.addedNodes[0],
                            NodeFilter.SHOW_TEXT,
                            { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
                            false
                        );
                        var nodeList = [];
                        var currentNode = treeWalker.currentNode;
                        console.log("Testing....")
                        var i = 0;
                        while(treeWalker.nextNode()) {
                            if(treeWalker.currentNode.textContent.trim().length<1) {
                                continue;
                            }
                            // treeWalker.currentNode.textContent = 'badsha'
                            nodeList.push(treeWalker.currentNode.textContent)
                            i++
                        }

                        TestService.getTranslatedValue(nodeList,target,source)
                            .then(response => {
                                var treeWalker2 = document.createTreeWalker(
                                    mutation.addedNodes[0],
                                    NodeFilter.SHOW_TEXT,
                                    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
                                    false
                                );
                                var nodeList2 = [];
                                var currentNode2 = treeWalker.currentNode;
                                console.log("Testing2....")
                                var i = 0;
                                while(treeWalker2.nextNode()) {
                                    if(treeWalker2.currentNode.textContent.trim().length<1) {
                                        continue;
                                    }
                                    treeWalker2.currentNode.textContent= response.data[i]
                                    i++
                                }
                            })

                        mutationObserver.observe(document.documentElement, {
                            attributes: true,
                            characterData: true,
                            childList: true,
                            subtree: true,
                            attributeOldValue: true,
                            characterDataOldValue: true
                        });

                    }
                }
            });
        });
        mutationObserver.observe(document.documentElement, {
            attributes: true,
            characterData: true,
            childList: true,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: true
        });
    }
    render(){
        
        return  (

            <div>
            <Router> 
               <>
               <HeaderComponent/>
               <button onClick={()=>{this.translateLanguage()}}>Translate</button>
               <Link to="/testing">Calculate</Link>
               <Switch>
                 <Route path="/" exact component={Test2} />
                 <Route path="/testing" exact component={TestingComponent}/>
                </Switch>
                <FooterComponent/>
               </>
            </Router>  
            </div>    
        )
    }
}
export default Test;
