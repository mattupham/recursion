// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


// var getElementsByClassName = function(className) {
//   //method returns a collection of all elements in the document with the specified class name
//   var documentBody = document.body;
//   //document.body;     //returns body node of current document
//   //node.childNodes;  //returns live collection of child nodes at given element
//   //node.classList;  //collection of class attributes of an elements
  
//   //stores classes
//   var output = [];
  

//   function findAndPush(node, className){
//     for (var i = 0; i < node.children.length; i++) {
//       if (node.children[i].classList.contains(className)){
//         output.push(node.children[i]);
//       }
//     }
//     return output;
//   }
  



//   //pick out documentBody children using document.body.children
//     //[div.targetClassName, div.otherClassName.targetClassName, div, div, div, div, div]  
//   //loop through document.body.children[x].classlist to pull up classLists
//   //loop thourgh children[x].classlist to see if contains "className"
//     //if so, push to []
//   //access children[x].children
// };

// var getElementsByClassName1 = function(className) {
//   var docBody = document.body;
//   var classes = [];

//   var walk = function (node, func) {
//     func(node);
//     //steps into first child of node
//     node = node.firstChild;
//     //while first child exists
//     while (node) {
//       //walk node of first childe
//       walk(node, func);
//       //node is now next sibling
//       node = node.nextSibling;
//       //continuously step until no more nodes are found
//     }
//   }

//   walk(docBody, function(node) { 
//     //if node.classList exists & it contains className
//     if (node.classList && node.classList.contains(className)) {
//       //add the node to the classes array
//       classes.push(node)
//     }
//   });

//   return classes;
// };


//getElementsByClassName1("targetClassName");









  //NODE
  //Node.childNodes
    //returns NodeList containing all children
  //Node.firstChild
    //return direct child of node
  //Node.lastChild
    //return last direct child of node
  //Node.nextSibling
    //return a node w/next in tree, or null if none
  //Node.hasChildNodes()
    //Returns a Boolean indicating if the element has any child nodes
  //Node.contains()
    //returns a Boolean value indicating whether a node is a descendant of a given node or not.
  //Elemenet.classList
    //const elementClasses = elementNodeReference.classList;

    
// You should use: 
// document.body
// element.childNodes
// element.classList

// var Element = function(value) {
//   this.children = [];
//   this.value = value;
// }
// Element.prototype.addChild = function(value) {
//   this.children.push(new Element(value));
// }
// var document = new Element(div);


// var html = new Element(5);
// html.addChild(3);
// console.log(html.children);
//element comes between <div> ELEMENT </div> tags
//




// <!DOCTYPE HTML>
// <html>
// <head></head>
// <body>
//     <div class="targetClassName">target</div>
//     <div class="otherClassName targetClassName"></div>
//     <div>
//         <div class="targetClassName"></div>
//     </div>
//     <div>
//         <div class="targetClassName">
//             <div class="targetClassName">target</div>
//         </div>
//     </div>
//     <div>
//         <div></div>
//         <div>
//             <div class="targetClassName">target</div>
//         </div>
//     </div>
//     <div>
//         <div class="targetClassName">target</div>
//         <div class="targetClassName">target</div>
//     </div>
//     <div>
//         <div class="somediv">
//             <div class="innerdiv">
//                 <span class="targetClassName">yay</span>
//             </div>
//         </div>
//     </div>
// </body>
// </html>

var getElementsByClassName = function(className) {
  //method returns a collection of all elements in the document with the specified class name
  var output = [];
  var node = document.body;
//  node ? node : document.body;
  //document.body;     //returns body node of current document
  //node.childNodes;  //returns live collection of child nodes at given element
  //node.classList;  //collection of class attributes of an element  
  //1.) find className, if we do find it, push element to output
  	//our recursive function
  //<body class: targetName>
    //<txt>
        //<mocha>
        //<div class: targetName>
    //<#mocha>
    //<class: targetName>
  function domTraversal (node) {
    //node = <div>
    var classList = node.classList;
    //targetName
    var childNodes = node.childNodes;
    //0
    if(classList && classList.contains(className)) {
      output.push(node);
      //output = [body, div];
    }
  //2.) check to see if element has children
  	//2.1.) if yes, iterate through the children to see if any one of them has the class name
      //2.2)chekc again to see if each children has children
   if(childNodes.length > 0) {
     //2
      for(var i = 0; i < childNodes.length; i++) {
      //childNodes[1] = <mocha>
      domTraversal(childNodes[i])
       }
     }
  //pick out documentBody children using document.body.children
    //[div.targetClassName, div.otherClassName.targetClassName, div, div, div, div, div]  
  //loop through document.body.children[x].classlist to pull up classLists
  //loop thourgh children[x].classlist to see if contains "className"
    //if so, push to []
  //access children[x].children
  }
  domTraversal(node);
  return output;
     //document.getElementsByClassName("targetClassName");
     //(9) [div.targetClassName.1, div.otherClassName.targetClassName.2]
};
