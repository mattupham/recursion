// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === "null") {
    return null;
  } else if (json === "true") {
    return true;
  } else if (json === "false") {
    return false;
  } else if (!isNaN(parseInt(json, 10)) && typeof parseInt(json, 10) === "number") {
    return Number(json);
  } else if (json[0] === "[" && json[json.length - 1] === "]") {
    var arrWithSpaces = json.replace(/\s+/g, "");
    var arrWithoutSpaces = arrWithSpaces
      .slice(1, arrWithSpaces.length - 1)
      .split(",");
    var arr = arrWithoutSpaces.map(function(el) {
      if (el[0] === '"') {
        return parseJSON(el.slice(1, el.length - 1));
      } else {
        return parseJSON(el);
      }
    });
    return arr;
  } else {
    return json;
  }
};
