const randomNumer = Math.floor( Math.random()*100 + 1)
const guessNumber = document.querySelector('.guessNumber')
const submitBtn = document.querySelector('#guessSubmit')
const userInput = document.querySelector('.guessField')
const result = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guesses')
const remainig = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1

let playGame = true
if(playGame){
    guessSubmit.addEventListener('click',function(e){
        e.preventDefault();
        const input=parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Enter a valid number');
    }
    else if(guess<1){
        alert('Enter no. more than 1')
    }
    else if(guess>100){
        alert('Enter no. more than 100')
    }else{
        prevGuess.push(guess)
    }

}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMsg(msg){

}

function endGame(game){

}

function newGame(game){
    
}
