// class TranslationUtility{
    
//     getTreeWalkerNodeList(){
        
//         var treeWalker = getTreeWalkerObject()
//         var nodeList = [];
//         var currentNode = treeWalker.currentNode;
//         console.log("Testing....")
//         var i=0
//         while(treeWalker.nextNode()) {
//           if(treeWalker.currentNode.textContent.trim().length<1) {
//               continue;
//             }
//           nodeList.push(treeWalker.currentNode.textContent);
          
//         }
//         return nodeList;
//     }

//     getTreeWalkerContent(response){
//         var treeWalker = getTreeWalkerObject()
//         var nodeList = [];
//         var currentNode = treeWalker.currentNode;
//         console.log("Testing....")
//         var i = 0;
//         while(treeWalker.nextNode()) {
//           if(treeWalker.currentNode.textContent.trim().length<1) {
//               continue;
//             }
      
//         treeWalker.currentNode.textContent= response.data[i]
//           i++          
//         }
//     }
// }

// function getTreeWalkerObject() {
//     var treeWalker = document.createTreeWalker(
//         document.body,
//         NodeFilter.SHOW_TEXT,
//         { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
//         false
//       );
//     return treeWalker
// }

// export default new TranslationUtility()