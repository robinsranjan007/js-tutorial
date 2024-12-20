let guessedNumber = [];
let count = 10;

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  let enteredNumber = Number(document.querySelector("#guess-input").value);

  randomNumber = Math.round(Math.random() * 10);
  resultLabel(enteredNumber, randomNumber);
});

function resultLabel(val, randomNumber) {
  let existingTextLable = document.querySelector("#label");

  if (existingTextLable) {
    existingTextLable.remove();
  }

  let textLable = document.createElement("span");
  textLable.className = "winner";
  textLable.id = "label";
  textLable.style.fontSize = "20px";
  textLable.style.padding = "10px";
  document.querySelector(".container").appendChild(textLable);

  if (isNaN(val)) {
    textLable.style.color = "red";
    textLable.textContent = "Please enter a valid number between 1 and 10!";
  } else if (val > 10 && val !== randomNumber) {
    textLable.style.color = "blue";
    textLable.textContent = "enter number less than or eaqul to 10";
    storeGuess(val)
    

  } else if (val <= 10 && val !== randomNumber) {
    textLable.style.color = "Orange";
    textLable.textContent = `the number was ${randomNumber} please try again`;
     
    storeGuess(val)
  } else if (val === randomNumber) {
    textLable.style.color = "green";
    textLable.textContent =
      "Congratulations you have won the game, refresh to play again";
  } else {
    alert("something went wrong");
  }
}


function storeGuess(val)
{
    count--;
    if(count>0)
    {
        guessedNumber.push(val)
        console.log(guessedNumber)
    
        let stringVersionGuessedNumber=guessedNumber.join(',')
        console.log(stringVersionGuessedNumber)
    
        document.querySelector('.guess-box').textContent=`Previous Guesses: ${stringVersionGuessedNumber}`
        document.querySelector('.attempts-box').textContent=`Guesses Remaining: ${count}`
    }
  
    else
    {
        let button=document.querySelector('button')
        button.setAttribute('dissable','true')
        button.style.backgroundColor="grey"
        
        let existingTextLable = document.querySelector("#label");

        if (existingTextLable) {
          existingTextLable.remove();
        }
        
  let textLable = document.createElement("span");
  textLable.className = "winner";
  textLable.id = "label";
  textLable.style.fontSize = "20px";
  textLable.style.padding = "10px";
  document.querySelector(".container").appendChild(textLable);
  textLable.style.color = "Red";
    textLable.textContent =
      "Oh Oh no my friend please refresh again to play the game";
    }
}
