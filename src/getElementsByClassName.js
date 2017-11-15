// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var node = document.body;
  function domTraversal(node) {
    var classList = node.classList;
    var childNodes = node.childNodes;
    if (classList && classList.contains(className)) {
      output.push(node);
    }
    if (childNodes.length > 0) {
      for (var i = 0; i < childNodes.length; i++) {
        domTraversal(childNodes[i]);
      }
    }
  }
  domTraversal(node);
  return output;
};
