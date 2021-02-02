//js
let jsPerson = {firstName : "Marko" , lastName: " Markovic", age: 23};
let jsonStrPerson = JSON.stringify(jsPerson);
//json
//parsirace se samo ako je string
let jsonPerson = '{"firstName": "Marko" , "lastName": "Markovic" , "age": "23"}';
let jsParsePerson = JSON.parse(jsonPerson);
console.log(jsPerson);

console.log(jsParsePerson);

let jsArray = [2,4,6,8];
let jsonArray = {"numbers": [ "2","4","6","8"]};

let jsArrayfromJson = [];
for(let i=0;i<jsonArray.numbers.length;i++) {

    jsArrayfromJson.push(jsonArray.numbers[i]);

}
console.log(jsArrayfromJson);

