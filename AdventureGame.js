/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Include readline for player input
const readline = require("readline-sync");

// Game stat variables
let playerName = "";
let playerHealth = 100
let playerGold = 20
let currentLocation = "village";
let gameRunning = true;
let inventory = [];

// Display the game title
console.log("Welcome to the Adventure Game");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

// Display welcome message and starting stats
playerName = readline.question("What is your name, brave adventurer? ");
console.log(`Welcome, ${playerName}! Your journey begins now.`);
console.log(`You start with ${playerGold} gold. Use it wisely on your adventure!`);

// Create variables for player stats
console.log(`Player Stats: 
Name: ${playerName}
Health: ${playerHealth}
Gold: ${playerGold}
Location: ${currentLocation}`);