var XMLParser = require('react-xml-parser');
var xml = new XMLParser().parseFromString();    // Assume xmlText contains the example XML



console.log(xml);
console.log(xml.getElementsByTagName('Name'));
