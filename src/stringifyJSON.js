// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "undefined") {
    return undefined;
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === "function") {
    return undefined;
  } else if (typeof obj === "boolean") {
    return obj.toString();
  } else if (typeof obj === "number") {
    return obj.toString();
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    var output = "[";
    obj.forEach(function(el, index) {
      index < obj.length - 1
        ? (output += stringifyJSON(el) + ",")
        : (output += stringifyJSON(el));
    });
    output += "]";
    return output;
  } else if (typeof obj === Symbol) {
    return Symbol.toString();
  } else {
    var keys = Object.keys(obj);
    var vals = Object.values(obj);
    var output = "{";
    for (var i = 0; i < keys.length; i++) {
      if (typeof vals[i] !== "function" && vals[i] !== undefined) {
        i < keys.length - 1
          ? (output +=
              stringifyJSON(keys[i]) + ":" + stringifyJSON(vals[i]) + ",")
          : (output += stringifyJSON(keys[i]) + ":" + stringifyJSON(vals[i]));
      }
    }
    return (output += "}");
  }
};
