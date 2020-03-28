/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js
 * Mereilim Aitassova
 *  */


 /////////////////////////Creating the Phrase class 
 class Phrase  {

    constructor (phrase){

        this.phrase=phrase.toLowerCase();

    }
   
//Displaying phrase on game board
   addPhraseToDisplay(){

        //replace existing unordered list with a new empty one.
        const phraseDiv = document.querySelector('#phrase');
        const currUl = document.querySelector('#phrase > ul');
        const newPhraseUl = document.createElement('ul');
        phraseDiv.replaceChild(newPhraseUl,currUl);




         //Appending characters of new phrase to unordered list
         for(let i=0; i<this.phrase.length; i++)
         {   

            //creates a list item to hold the character.
             const currLi = document.createElement('li'); 

            //current character of phrase
             const phraseChar = this.phrase.charAt(i);  
 
             //add a new class with respect to the current character's content.
             if (phraseChar === ' '){
                 currLi.setAttribute('class',"space");

             }else
                 currLi.setAttribute('class',`hide letter ${phraseChar}`);
 
             //add the character to the unordered list.    
             currLi.textContent = `${phraseChar}`;
             newPhraseUl.appendChild(currLi);
         } 


   }



  //checks to see if the letter selected by the player matches a letter in the phrase.
   checkLetter(letter){
        //set booleand to false initially
         let foundMatch=false;


          //check the matching letter in the phrase
          for(let i=0; i<this.phrase.length; i++) {
           const phraseChar = this.phrase.charAt(i);   
             if (phraseChar === letter){
              foundMatch = true;  
                break;  
              }    
           }
    
           return (foundMatch) ? true : false; 

   }


    

   //showMatchedLetter(): reveals the letter(s) on the board that matches the player's selection.
    showMatchedLetter(letter){

        //select list items which contains the letter in their text content
        const letterClass=`${letter}`;
        const matchedLis=document.getElementsByClassName(letterClass);

        //turn off "hide" class and turn on "show" class for every list item in that list.
        for(let i=0; i<matchedLis.length; i++){
            matchedLis[i].classList.toggle("hide");
            matchedLis[i].classList.toggle("show");
        }         

    }

 
 }