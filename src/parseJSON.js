var assertEquals = function(expected, actual, testName){
  if (expected === actual) {
    console.log('Passed');
  } else {
    console.log('FAILED: ' + testName + ', EXPECTED: ' + expected + ', but got ACTUAL: ' + actual);
  }
}

// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:

var parseJSON = function(json) {
  //parses a JSON string, constructing the JavaScript value or object described by the string
  if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (!isNaN(parseInt(json, 10)) && (typeof parseInt(json, 10) === "number")) {
    return Number(json);
  } else if (json[0] === '[' && json[json.length - 1] === ']' ) {
    console.log('JSON: ' + json);
    var arrWithSpaces = json.replace(/\s+/g, '');
    console.log('JSON without spaces: ' + json);


    var arrWithoutSpaces = arrWithSpaces.slice(1, arrWithSpaces.length - 1).split(',');


    var arr = arrWithoutSpaces.map(function(el){
      if (el[0] === "\"") {
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

// } else if (json[0] === '{') {
//   var arrWithSpaces = json.replace(/\s+/g, '');
//   var arrWithoutSpaces = arrWithSpaces.slice(1, arrWithSpaces.length - 1).split(',');
//   var arrayOfArrays = arrWithoutSpaces.map(function(el){
//     return el.split(':');
//   });
//   var output = {};
//   arrayOfArrays.forEach(function(el){
//     output[parseJSON(el[0])] = parseJSON(el[1]);
//   });
//   return output;


//DONE
// JSON.parse('null');            // null
assertEquals(parseJSON('null'), JSON.parse('null'), 'should parse null');
//boolean
// JSON.parse('true');            // true
assertEquals(parseJSON('true'), JSON.parse('true'), 'should parse true');
assertEquals(parseJSON('false'), JSON.parse('false'), 'should parse false');
//string
// JSON.parse('"foo"');           // "foo"
assertEquals(parseJSON('foo'), JSON.parse('"foo"'), 'should parse string');
//Array.isArray
// JSON.parse('[1, 5, "myString", false]');
assertEquals(  JSON.stringify(parseJSON('[1, 5, "my  String", false]'))  , JSON.stringify(JSON.parse('[1, 5, "myString", false]')), 'should parse array'  );

//Fails to work, need to changbe white space 
assertEquals(  JSON.stringify(parseJSON('[1,2,3,4, "he      llo"]'))  , JSON.stringify(JSON.parse('[1,2,3,4, "he      llo"]')), 'should parse array'  );




























// var testFunc = function(json) {
//   //take out spaces
//   var arrWithSpaces = json.replace(/\s+/g, '');
//   console.log('ArrWSpaces: ' + arrWithSpaces);
//   var arrWithoutSpaces = arrWithSpaces.slice(1, arrWithSpaces.length - 1).split(',');
//   console.log('ArrWoutSpaces: ' + arrWithoutSpaces);
//   var arrayOfArrays = arrWithoutSpaces.map(function(el){
//     return el.split(':');
//   });
//   var output = {};
//   arrayOfArrays.forEach(function(el){
//     output[parseJSON(el[0])] = parseJSON(el[1]);
//   });
//   return output;
// }