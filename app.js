
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

           alien1.hull = alien1.hull - UssAssembly.firepower;

           console.log(alien1.hull);
            
	         console.log('You score a direct hit on the alien!');

             if(alien1.hull <= 0) {
                console.log("Alien1 destroyed! Retreat or fight next alien?")
            };

           }
        else{
                if(Math.random() < alien1.accuracy) {

                    UssAssembly.hull = UssAssembly.hull - alien1.firepower;

                    console.log('The alien has damaged your ship!')

                    console.log(UssAssembly.hull);

                    if(UssAssembly.hull <= 0) {
                        console.log("You have been destroyed. Game Over!")
                    };
                }
            }
    
            
});}








// this function retreats
function retreat (){
    console.log('You retreat back to homebase, where you live to fight amother day.');
}







// this function fights the second alien
function fightAlien2(){
   
        
    if(Math.random() < UssAssembly.accuracy) {

        alien1.hull = alien2.hull - UssAssembly.firepower;

        console.log(alien2.hull);
         
          console.log('You score a direct hit on the alien!');

          if(alien2.hull <= 0) {
             console.log("Alien2 destroyed! Retreat or fight next alien?")
         };

        }
     else{
             if(Math.random() < alien2.accuracy) {

                 UssAssembly.hull = UssAssembly.hull - alien2.firepower;

                 console.log('The alien has damaged your ship!')

                 console.log(UssAssembly.hull);

                 if(UssAssembly.hull <= 0) {
                     console.log("You have been destroyed. Game Over!")
                 };
             }
         }
 
         

            
};




// this function fights the third alien
function fightAlien3(){
    
        
    if(Math.random() < UssAssembly.accuracy) {

        alien3.hull = alien3.hull - UssAssembly.firepower;

        console.log(alien3.hull);
         
          console.log('You score a direct hit on the alien!');

          if(alien3.hull <= 0) {
             console.log("Alien3 destroyed! Retreat or fight next alien?")
         };

        }
     else{
             if(Math.random() < alien3.accuracy) {

                 UssAssembly.hull = UssAssembly.hull - alien3.firepower;

                 console.log('The alien has damaged your ship!')

                 console.log(UssAssembly.hull);

                 if(UssAssembly.hull <= 0) {
                     console.log("You have been destroyed. Game Over!")
                 };
             }
         }
 
         
};






// this function fights the fourth alien
function fightAlien4(){
    
        
    if(Math.random() < UssAssembly.accuracy) {

        alien4.hull = alien4.hull - UssAssembly.firepower;

        console.log(alien4.hull);
         
          console.log('You score a direct hit on the alien!');

          if(alien4.hull <= 0) {
             console.log("Alien4 destroyed! Retreat or fight next alien?")
         };

        }
     else{
             if(Math.random() < alien4.accuracy) {

                 UssAssembly.hull = UssAssembly.hull - alien4.firepower;

                 console.log('The alien has damaged your ship!')

                 console.log(UssAssembly.hull);

                 if(UssAssembly.hull <= 0) {
                     console.log("You have been destroyed. Game Over!")
                 };
             }
         }
 
         
};







// this function fights the fifth alien 
function fightAlien5(){
    
        
    if(Math.random() < UssAssembly.accuracy) {

        alien5.hull = alien5.hull - UssAssembly.firepower;

        console.log(alien5.hull);
         
          console.log('You score a direct hit on the alien!');

          if(alien5.hull <= 0) {
             console.log("Alien5 destroyed! Retreat or fight next alien?")
         };

        }
     else{
             if(Math.random() < alien5.accuracy) {

                 UssAssembly.hull = UssAssembly.hull - alien5.firepower;

                 console.log('The alien has damaged your ship!')

                 console.log(UssAssembly.hull);

                 if(UssAssembly.hull <= 0) {
                     console.log("You have been destroyed. Game Over!")
                 };
             }
         }
 
         
};
startGame();
