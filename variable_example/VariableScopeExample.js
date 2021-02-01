function varVariableExample() {
    var example_fun_var = 1;  
    
    console.log("VAR IN FUN:" + example_fun_var);

    for(let i=0;i<2;i++) {
        var for_example = 5;
    }

    console.log("VAR INSADE FOR: " + for_example);
    console.log("VAR OUTSIDE FUN: " + example_in_var);
}

function letVariableExample () {
    let example_fun_let = 1;
    console.log("LET IN FUN:" + example_fun_let);s

    for(let i=0;i<2;i++) {
        let for_example = 3;
    }
    console.log("LET INSADE FOR: " + for_example);
    console.log("LET OUTSIDE FUN: " + example_in_let);
}

var example_in_var=3;
let example_in_let=3;

varVariableExample();
letVariableExample();s