
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
const alien1 = new ship("Aorg", 6, 2, 0.8);
const alien2 = new ship("Borg", 3, 4, 0.7);
const alien3 = new ship("Corg", 3, 3, 0.6);
const alien4 = new ship("Dorg", 4, 2, 0.8);
const alien5 = new ship("Eorg", 5, 4, 0.6);



function startGame() {

    startBtn.addEventListener('click', () => {
        
        if(Math.random() < UssAssembly.accuracy) {

	         console.log('You score a direct hit on the alien!');
        
        
            }

});}

startGame();
