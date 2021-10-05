import { Component } from "react";
import ReactDOM from "react-dom";
import TestService from "../api/TestService";
import parse from 'html-react-parser'
import babel from 'babel-core'

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            btn:'',
            cal:''
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
          TestService.getTranslatedValue(nodeList)
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

       
        
       
    }
    calculate(){
        let a=3*5
        console.log("calculate:"+a)
    }
    parsing(){
       
    }
    render(){
        return  (<div id="test">
            <h1>Testing by raihan</h1>
            <button onClick={this.getButton}>show</button>
            {/* <div>{this.parsing()}</div> */}
            {/* <div dangerouslySetInnerHTML={{__html:this.state.btn}}></div> */}
            <div id="parsedText"></div>
            {/* { new DOMParser().parseFromString(this.state.btn,"text/html")} */}
   
        </div>)
    }
}
export default Test;