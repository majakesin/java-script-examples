class Character {
    
    constructor() {
        this.x = Math.floor(Math.random() * 11); 
        this.y = Math.floor(Math.random() * 11); 
        this.id = ++Character.counter;
        if (this.constructor === Character) {
            throw new TypeError('Abstract class "Character" cannot be instantiated directly.');
        }
    }
    
   
     
    changePosition(x,y) {
        if(x>10 || y>10 ) {
            throw TypeError("x or y is grater then 10.");
        }
        thix.x=x;
        this.y=y;
    }
}

class PlayerCharacter extends Character {

    constructor() {
        super();
        
    }
}

class NoPlayerCharacter extends Character {
    constructor() {
        super();
        
    }
}
Character.counter = 0;
let pc = new PlayerCharacter();

console.log(pc);
let pc1 = new PlayerCharacter()
console.log(pc1);


