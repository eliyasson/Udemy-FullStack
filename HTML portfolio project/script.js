document.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").style.color = "red";
  document.querySelector("h1").style.fontSize = "6rem";
  document.querySelector("h2").style.visibility = "hidden";

}





/*
function diceRoller() {
  let number = Math.floor(Math.random() * 6) + 1;
  let number1 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("diceImage1").src = "./assets/images/dice" + number + ".png";
  document.getElementById("diceImage2").src = "./assets/images/dice" + number1 + ".png";

  if (number > number1) {
    document.getElementById("diceResult").innerHTML = "Player 1 wons";
  } else if (number < number1) {
    document.getElementById("diceResult").innerHTML = "Player 2 wons";
  } else {
    document.getElementById("diceResult").innerHTML = "Try again";
  }
}

function findEvenNumbers(...n) {
   let outPuts = [];
   
    for (let i = 0; i < n.length; i++) {
        if ( n[i] % 2 === 0) {
          outPuts.push(n[i]);
        }
    }
    return outPuts;
}
let evenNum = findEvenNumbers(2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(evenNum);

function findAvarageNumber(...n) {
    let num = 0;
    for (let i = 0; i < n.length; i++) {
         num = num + i;
    }
    return num / 2;
}
let output = findAvarageNumber(2, 3, 4, 5, 6);
console.log(output);


function findMiddleNumber(...n) {
    let num = Math.floor(n.length / 2);
    return n[num];
}
let result = findMiddleNumber(2, 3, 4, 5, 6);
console.log(result);



function fibonacciCalculator() {
    let sequenceNumbers = [];
    let inputValue = parseInt(document.getElementById("fname").value);
    for (let i = 0; i <= inputValue; i++) {
      
      if (i === 0) {
        sequenceNumbers.push(0);
        
      } else if (i === 1) {
        sequenceNumbers.push(1);
      } else {
        sequenceNumbers.push(sequenceNumbers[i - 1] + sequenceNumbers[i - 2]);
      }
     
    }
    document.getElementById("values").innerHTML = sequenceNumbers.join(", ");
}

function fibonacciGenerator(n) {
    var fibona = [];
    for (let i = 0; i < n; i++) {
        if(i === 0) {
            fibona.push(0);
        } else if (i === 1){
            fibona.push(1)
        } else {
            fibona.push(fibona[i-1] + fibona[i-2]);
        }
       
    } 
    return fibona;
}
output = fibonacciGenerator(9);
console.log(output);
function whosPaying(names) {
    var randomNumber = Math.floor(Math.random() * names.length);
    let randomPayer = names[randomNumber]
    
    return randomPayer + " is going to buy lunch today!";
  
}
const lunchPayer = whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
console.log(lunchPayer);
function whosPay() {
      let lists = document.getElementById("inputNames").value;
      let listName = lists.split(" ");
      let randomNumber = Math.floor(Math.random() * listName.length);
      document.getElementById("payList").innerHTML = listName[randomNumber] + " is today lunch payer!";
    }
     
    let num = [];
    let i = 1;
    function calculateFizz() {
      if (i % 3 === 0 && i % 5 === 0){
        document.getElementById("fizzNum").innerHTML += " FizzBuzz<br> ";
      } else if (i % 3 === 0) {
        document.getElementById("fizzNum").innerHTML += " Fizz<br> ";
      } else if (i % 5 === 0) {
        document.getElementById("fizzNum").innerHTML += " buzz<br> ";
      } else {
        document.getElementById("fizzNum").innerHTML += i + "<br>";
      }
      i++;
    }
    
     
    var name = ["eliyas", "bonu", "esayas", "amanuel"];
    var userName = prompt("enter name: ");
    if (name.includes(userName)) {
      alert("hey, Welcom");
    } else {
      alert("you are not in our list");
    }
    
    
    function loveCalculator() {
      var person1 = document.getElementById("person1Input").value;
      var person2 = document.getElementById("person1Input").value;
      if (person1 == "" || person2 == ""){
        alert ("Please enter both names");
        } else {
          var loveScore = Math.random() * 100;
          loveScore = (loveScore + 1).toFixed();
          document.getElementById("result").innerHTML = "Love score: "+loveScore+"%";
        

        }

function bmiCalculator(weight, height) {
    const interpretation = weight / Math.pow(height, 2);
    if (interpretation < 18.5) {
        return "Your BMI is " + interpretation + " so you are underweight."
    }else if (interpretation > 18.5 && interpretation < 24.9) {
        return "Your BMI is " + interpretation + " so you have a normal weight."
    } else if(interpretation > 24.9) {
        return "Your BMI is " + interpretation + " so you are overweight."
    }
    return interpretation;
}
var bmi = bmiCalculator(100, 2);
console.log(bmi);
 

function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "The year is leap year";
            }
        } else if(year % 100 !== 0){
            return "The year is leap year";
        }
        
    }  else  {
        return "The year is not Leap year"
    }

}
var result = leapYear(2020);
console.log(result);




/* 
//BMI calculator
function bmiCalculator(weight, height) {
    const BMI = Math.round(weight / Math.pow(height, 2));
    return BMI
}
 var bmi = bmiCalculator(65, 1.8);
console.log("Your BMI is: " + bmi);


function changeLight(status){
      const bulb = document.getElementById("bulb");
      if (status === 'on'){
        bulb.src = "./assets/images/bulb on.png";
      } else if (status === 'off') {
        bulb.src = "./assets/images/bulb off.png";
      }
}

function getMilk(money, price) {   
    console.log("leave House");
    console.log("I can buy " + calcBottles(money, price) + " bottles of milk");
    console.log("Hello master, here is your " + calChange(money, price) + " change") ;
}

function calcBottles(money, price) {
    var numberOfBottle = Math.floor(money / price);
    return numberOfBottle;
}
function calChange(money, price) {
    var leftoverMoney = money % price;
    return leftoverMoney;
}
  
getMilk(10, 3);
*/