
let startBtn = document.getElementById("start");

// this creates the class of ship
class ship{
    constructor(name, hull, firepower, accuracy){
       this.name = name;
       this.hull = hull;
       this.firepower = firepower;
       this.accuracy = accuracy;
    }
}

// this creates the UssAssembly ship
const UssAssembly = new ship("UssAssembly", 20, 5, 0.7);

//this creates the alien ships from alien1 to alien5
const alien1 = new ship("Aorg", 4, 2, 0.8);
const alien2 = new ship("Borg", 3, 4, 0.7);
const alien3 = new ship("Corg", 3, 3, 0.6);
const alien4 = new ship("Dorg", 4, 2, 0.8);
const alien5 = new ship("Eorg", 5, 4, 0.6);

if(UssAssembly.hull <= 0) {
    console.log("You have been destroyed. Game Over!")
};

if(alien1.hull <= 0) {
    console.log("Alien destroyed!")
};

if(alien2.hull <= 0) {
    console.log("Alien destroyed!")
};

if(alien3.hull <= 0) {
    console.log("Alien destroyed!")
};

if(alien4.hull <= 0) {
    console.log("Alien destroyed!")
};

if(alien5.hull <= 0) {
    console.log("Alien destroyed!")
};











function startGame() {

    startBtn.addEventListener('click', () => {
        
        if(Math.random() < UssAssembly.accuracy) {

	         console.log('You score a direct hit on the alien!');
           }
        else{
                if(Math.random() < alien1.accuracy) {
                    console.log('The alien has damaged your ship!')
                }
            }
    
            
});}








// this function retreats
function retreat (){
    console.log('You retreat back to homebase, where you live to fight amother day.');
}







// this function fights the second alien
function fightAlien2(){
    console.log("You engage in combat with the second alien ship!");
        
        if(Math.random() < UssAssembly.accuracy) {

	         console.log('You score a direct hit on the alien!');
           }
        else{
                if(Math.random() < alien2.accuracy) {
                    console.log('The alien has damaged your ship!')
                }
            }
    
            
};




// this function fights the third alien
function fightAlien3(){
    console.log("You engage in combat with the third alien ship!");
        
        if(Math.random() < UssAssembly.accuracy) {

	         console.log('You score a direct hit on the alien!');
           }
        else{
                if(Math.random() < alien3.accuracy) {
                    console.log('The alien has damaged your ship!')
                }
            }
    
            
};






// this function fights the fourth alien
function fightAlien4(){
    console.log("You engage in combat with the fourth alien ship!");
        
        if(Math.random() < UssAssembly.accuracy) {

	         console.log('You score a direct hit on the alien!');
           }
        else{
                if(Math.random() < alien4.accuracy) {
                    console.log('The alien has damaged your ship!')
                }
            }
    
            
};







// this function fights the fifth alien 
function fightAlien5(){
    console.log("You engage in combat with the fifth alien ship!");
        
        if(Math.random() < UssAssembly.accuracy) {

	         console.log('You score a direct hit on the alien!');
           }
        else{
                if(Math.random() < alien5.accuracy) {
                    console.log('The alien has damaged your ship!')
                }
            }
    
            
};



startGame();


if(alien1.hull <= 0) {
    console.log("Alien destroyed!")
};