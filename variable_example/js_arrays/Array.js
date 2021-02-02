let array = [ 'RED', 'GREEN', 'BLUE', 'WHITE', 'BLACK','ORANGE', 'YELLOW'];

// petlje
for(let i=0; i<array.length;i++) {
    console.log(array[i]);

}
console.log('-------------');

array.forEach(item => console.log(item));

//rotiranje

function rotateArray(array) {
    let temp_array = [];
    
    for(let i = array.length-1;i>=0;i--) {
        temp_array.push(array[i]);
    }
return temp_array;
}

let rotated_array = rotateArray(array);
console.log('----ROTATED ARRAY------');
rotated_array.forEach(item => console.log(item));

let nummber_array = [1,2,3,4];
let sum = nummber_array.reduce((sum,item)=> sum+item,50);
console.log(sum);

//kreiranje niza inkrementalno,pa dekrementalno 
function createArray(length) {
    let temp_array = [0];
    let help_flag = false;

    for(let i=1; i<=length;i++) {
   
           temp_array.push(temp_array[i-1]+1);
            
    }
    for(let i=length;i>0;i--) {
        temp_array.push(temp_array[i]-1);
    }
    return temp_array;
}

let inc_dec_array = createArray(3);
console.log('--------INC_DEC_ARRAY------');
inc_dec_array.map(item => console.log(item));

//kreiranje funkcije zooInventory

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

function flatten(array) {
    let temp_array= [];
        array.forEach(current => {
        if(Array.isArray(current)) {
           
           temp_array=temp_array.concat(flatten(current));

        } else {
            temp_array.push(current);
            
        }});
        
        return temp_array;
     
    }
    

 function zooInventory(myZoo) {

      return  myZoo.map(function(item) {
            let temp_array = flatten(item);
            let str = "";
            temp_array.forEach(element => {
                str += element + " ";
            });
            return str;
          
                
        });
    }
   
   

let myZooString = zooInventory(myZoo);
console.log('----ZOO ARRAY------');
myZooString.map(item=>console.log(item));