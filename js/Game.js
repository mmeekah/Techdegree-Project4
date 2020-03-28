/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js
 *  Mereilim Aitassova */




 //////////Create the Game class in the Game.js

 class Game{



    //Constructing a game and initializing its properties with default values
    constructor(){
        this.missed=0;
        this.phrases=this.createPhrases();
        this.activePhrase=null;
    }


     //function to create phrases to use in game
     createPhrases(){

        const phrases=[
            new Phrase("Hands Down"),
            new Phrase("There’s no I in team"),
            new Phrase("Jumping the gun"),
            new Phrase("A piece of cake"),
            new Phrase("Driving me nuts")
        ]

        return phrases;
     }



     //Selecting random phrase from phrases property
     getRandomPhrase(){
        const randomIndex=Math.floor((Math.random()*this.phrases.length));
        return this.phrases[randomIndex];
     }

     //Begins game by selecting a random phrase and displaying it to user
     startGame(){


        //resets gameboard display before start
        this.resetGameboard();

        //hide overlay display
        const overlayDiv=document.querySelector('#overlay');
        overlayDiv.style.visibility="hidden";


        //choose random phrase from collection and add it to display
        const phrase=this.getRandomPhrase();
        phrase.addPhraseToDisplay();
        this.activePhrase=phrase;
     }


     //This method checks to see if the player has revealed all of the letters in the active phrase.
        checkForWin(){

            //select all list items that contains the letters in the phrase
            const phraseLis =document.querySelectorAll('div#phrase > ul > li');


            //search for a letter that is still hidden

            for(let i=0; i<phraseLis.length; i++){

                let charClass =phraseLis[i].className;
                if(charClass.slice(0,4)==="hide")
                    return false;

            }


            //Usen won if hidden letter isn't found
                this.gameOver(true);
                return true;

        }




    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */

     removeLife(){

        //select heart oimages
        const heartImages=document.querySelectorAll('div#scoreboard > ol > li > img');
        const MAX_LIVES =heartImages.length;


        //update an image lost heart display
        heartImages[MAX_LIVES - 1 - this.missed].setAttribute('src', "images/lostHeart.png");


        //update wrong user guesses counter
        this.missed++;

        //check if the user lost the game
        if(this.missed===MAX_LIVES)
         this.gameOver(false);

     }








     ///Displays game over message 

     gameOver(gameWon){

        //freeze the screen for a second so that the user can see the entire phrase uncovered.
        setTimeout(function(){
            
            
            //display win/lose message
            const message=(gameWon) ? "Congratulations, You Win!" : "You lost, better luck next time!";
            const gameOverH1=document.querySelector('h1#game-over-message');
            gameOverH1.textContent=message;


            //change class of the overlay div element
            const updatedClassName=(gameWon) ? 'win' : 'lose';
            const overlayDiv=document.querySelector('#overlay');
            overlayDiv.setAttribute('class', updatedClassName);
            overlayDiv.style.visibility="";

        },1000);
     }



     //handleInteraction, handles onscreen keyboard button clicks
        handleInteraction(button){
            const letter =button.textContent;

            //if the button hasn't been clicked
            if(!(this.isAlreadyClicked(button))){
                
                if(!this.activePhrase.checkLetter(letter)){
                    button.classList.add("wrong");
                    this.removeLife();
                }  else {
                    button.classList.add("chosen");
                    this.activePhrase.showMatchedLetter(letter);
                    if(this.checkForWin())
                    this.gameOver(true);
                    
                }

            }
        }



        //method that checks if a button has been clicked
        isAlreadyClicked(button){
            const btnClass=button.classList[1];
            return (btnClass ==="chosen" || btnClass==="wrong");
        }


        //method that clears the screen and display a new gameboard
        resetGameboard(){


            //clear phrase letters from display
            const phraseDiv=document.querySelector('#phrase');
            const currUl=document.querySelector('#phrase > ul');
            const emptyUl=document.createElement('ul');
            phraseDiv.replaceChild(emptyUl,currUl);

            //enable onscreen keyboard buttons
            const letterButtons=document.querySelectorAll('div#qwerty > div.keyrow > button.key');
            letterButtons.forEach(function(letterButton){
                letterButton.classList.remove("chosen");
                letterButton.classList.remove("wrong");
                const btnClass =letterButton.classList;
             });

             //reset heart images
             const heartImages=document.querySelectorAll('div#scoreboard> ol > li > img');
             heartImages.forEach(function(image){
                 image.setAttribute('src', "images/liveHeart.png");
             });

        }
 }