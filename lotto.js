/* Creating Winning Lottery Numbers */

var winlotto = new Array(5);
for (i = 0; i < winlotto.length; i++)
{
   winlotto[i] = Math.ceil((Math.random() * 47)) + 1;
}
winlotto.sort();

/* Creating Lucky Ball Number */

var luckyBall = Math.ceil((Math.random() * 17)) + 1;

/* Display the Winning Numbers & the Lucky Ball Number */

document.write("Winning Lottery Numbers are " + "<br>");
for (n = 0; n < winlotto.length; n++)
{
   document.write(winlotto[n] + "<br>");
}

document.write("Luck Ball number is " + luckyBall + "<br>");

/* Getting the User's Numbers */

var userNumbers, userLB;
userNumbers = prompt("Enter Your Five Lottery numbers");
userLB = prompt("Enter your Lucky Ball Number");

userNumbers = userNumbers.split(" ", 5);

for (n = 0; n < userNumbers.length; n++)
{
   userNumbers[n] = parseInt(userNumbers[n]);
}

//document.write(" your number array is size " + userNumbers.length + "<br>");

/* Display the Users Lottery & Lucky Ball Numbers */

document.write(" Your Numbers are <br>");

for (n = 0; n < userNumbers.length; n++)
{
   document.write(userNumbers[n] + "<br>");
}

document.write("Your Luck Ball number is " + userLB + "<br>");


//Check for matches
var lucky_match;


    if (luckyBall == userLB)
    {
        lucky_match = 1;
        document.write("Your Lucky Ball number matches with the Lottery's <br>");
    }else{
        lucky_match = 0;
        document.write("Your Lucky Ball number did not match with the Lottery's <br>");
    }


document.write("You have " + numMatches(userNumbers,winlotto) + " lottery match(es) <br>");


//function to check how many matches I got

function numMatches(arr1,arr2)
{
    var numMatches = 0;
    for (i = 0; i < 5; i++){
        for (z = 0; z < 5; z++){
            if (arr1[i] == arr2[z]){
                numMatches++;
            }
        }
    }
    return numMatches;
}


//Dealing with prize distribution if the lucky ball numbers match,
// enter first switch statement. if not, enter latter
if (lucky_match)
{
    switch (numMatches(userNumbers,winlotto)) {
      case 5:
        document.write("You won $7,000 a WEEK for LIFE <br>");
        break;
      case 4:
        document.write("You won $5,000 <br>");
        break;
      case 3:
        document.write("You won $150 <br>");
        break;
      case 2:
        document.write("You won $25 <br>");
        break;
      case 1:
        document.write("You won $6 <br>");
        break;
      case 0:
        document.write("You won $4 <br>");
        break;
      default:
        text = "Thanks for playing!";
    }

}else{
    switch (numMatches(userNumbers,winlotto)) {
      case 5:
        document.write("You won $25,000 a Year for LIFE <br>");
        break;
      case 4:
        document.write("You won $200 <br>");
        break;
      case 3:
        document.write("You won $20 <br>");
        break;
      case 2:
        document.write("You won $3 <br>");
        break;
      case 1:
        document.write("You won $0 <br>");
        break;
      case 0:
        document.write("You won $0 <br>");
        break;
      default:
        text = "Thanks for playing!";
    }
}
