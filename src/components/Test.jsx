import { Component } from "react";
import ReactDOM from "react-dom";
import TestService from "../api/TestService";
import parse from 'html-react-parser'
import babel from 'babel-core'
import Test2 from './Test2'

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
        this.getTreeWalkerObject=this.getTreeWalkerObject.bind(this)
    }
    getTreeWalkerObject(){
        var treeWalker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
            false
          );
          
        //   var nodeList = [];
        //   var currentNode = treeWalker.currentNode;
        return treeWalker
        
    }
    getButton(){
            // if(this.state.target===''){
            //     console.log("Target not set yet")
            //     this.setState
            // }
          var treeWalker = this.getTreeWalkerObject()
          var nodeList = [];
          var currentNode = treeWalker.currentNode;
          console.log("Testing....")
          while(treeWalker.nextNode()) {
            if(treeWalker.currentNode.textContent.trim().length<1) {
                continue;
              }
            nodeList.push(treeWalker.currentNode.textContent);
            
          }
let i=0;

          TestService.getTranslatedValue(nodeList,this.state.target,this.state.source)
          .then(response=>{
              var treeWalker = this.getTreeWalkerObject()
              var nodeList = [];
              var currentNode = treeWalker.currentNode;
              console.log("Testing....")
              while(treeWalker.nextNode()) {
                if(treeWalker.currentNode.textContent.trim().length<1) {
                    continue;
                  }
            
              treeWalker.currentNode.textContent= response.data[i]
                i++
            
               
               
              }
          })

          if(this.state.target==='JA'){
              console.log("Target EN found")
            this.setState({
                target:'EN',
                source:'JA'
            })
        }else{
            console.log("Target JA found")
            this.setState({
                target:'JA',
                source:'EN'
            })
        }
       
        console.log("Status: "+this.state.target)
        console.log("Target: "+this.state.source)
        
       
    }
    calculate(){
        let a=3*5
        console.log("calculate:"+a)
        alert("Hello, this is me!")
    }
    parsing(){
       
    }
    render(){
        return  (<div id="test">
            <h1>Testing by raihan</h1>
            <button onClick={this.getButton}>show</button>
            <button onClick={this.calculate}>Calculate</button>
            <Test2/>
   
        </div>)
    }
}
export default Test;