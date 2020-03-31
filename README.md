# Techdegree-Project4

"Phrase Hunter Game"

In this project, I created a browser-based, word guessing game. 
I used JavaScript and OOP (Object-Oriented Programming) to select a random,
hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

Using JavaScript, I created two JavaScript classes with specific properties and methods: 
Phrase.js(to create an array of phrases) and Game.js to manage the game.

The task was to write a code that chooses a random phrase, split the phrase into letters, and put those letters onto the gameboard.

Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase.
If the letter is in the phrase, the gameboard displays the chosen letters on the screen.

A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose).

If the player completes the phrase before they run out of guesses, a winning screen appears. 
If the player guesses incorrectly five times, a losing screen appears.

A player can guess a letter only once. After they’ve guessed a letter, the program will be disable that letter on the onscreen keyboard.

