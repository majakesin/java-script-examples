var array = [2,4,6];

var array_example = array.map(function(item) { return Math.pow(item,2);});

var console_value = array.map(item => Math.pow(item,2));

console.log(array_example);
console.log(console_value);