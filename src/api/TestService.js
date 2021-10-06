import axios from "axios"
import {api_url} from './ApiConstant'
class TestService{
    getButton(){
        
        return axios.get(`${api_url}/test`)
        
    }

    getTranslatedValue(body,target,source){
        return axios.post(`${api_url}/translate/newtext2?target=${target}&source=${source}`,body)
    }

    //translation related functions

    getTreeWalkerNodeList(){
        
        var treeWalker = getTreeWalkerObject()
        var nodeList = [];
        var currentNode = treeWalker.currentNode;
        console.log("Testing....")
        var i=0
        while(treeWalker.nextNode()) {
          if(treeWalker.currentNode.textContent.trim().length<1) {
              continue;
            }
          nodeList.push(treeWalker.currentNode.textContent);
          
        }
        return nodeList;
    }

    getTreeWalkerContent(response){
        var treeWalker = getTreeWalkerObject()
        var nodeList = [];
        var currentNode = treeWalker.currentNode;
        console.log("Testing....")
        var i = 0;
        while(treeWalker.nextNode()) {
          if(treeWalker.currentNode.textContent.trim().length<1) {
              continue;
            }
      
        treeWalker.currentNode.textContent= response.data[i]
          i++          
        }
    }


    translateLanguage(target,source){    
        var nodeList = getTreeWalkerNodeList()
        getTranslatedValue(nodeList,target,source)
          .then(response=>{
             getTreeWalkerContent(response)
          })

        console.log("target: "+target)
        console.log("source: "+source)  
    }
   



}

function getTranslatedValue(body,target,source){
    return axios.post(`${api_url}/translate/newtext2?target=${target}&source=${source}`,body)
}

//translation related functions

function getTreeWalkerNodeList(){
    
    var treeWalker = getTreeWalkerObject()
    var nodeList = [];
    var currentNode = treeWalker.currentNode;
    console.log("Testing....")
    var i=0
    while(treeWalker.nextNode()) {
      if(treeWalker.currentNode.textContent.trim().length<1) {
          continue;
        }
      nodeList.push(treeWalker.currentNode.textContent);
      
    }
    return nodeList;
}

function getTreeWalkerContent(response){
    var treeWalker = getTreeWalkerObject()
    var nodeList = [];
    var currentNode = treeWalker.currentNode;
    console.log("Testing....")
    var i = 0;
    while(treeWalker.nextNode()) {
      if(treeWalker.currentNode.textContent.trim().length<1) {
          continue;
        }
  
    treeWalker.currentNode.textContent= response.data[i]
      i++          
    }
}
function getTreeWalkerObject() {
    var treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
        false
      );
    return treeWalker
}


export default new TestService()