

class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
      let currentTime = new Date(Date.now());
      this.hours = currentTime.getHours();
      this.minutes = currentTime.getMinutes();
      this.seconds = currentTime.getSeconds();
      this.printTime();
      let bindTick = this._tick.bind(this);
      setInterval(()=>{
        bindTick()
      }, 1000);
    }

    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      this.seconds += 1;
      if(this.seconds === 60){
        this.seconds = 0;
        this.minutes += 1;
      }
      if(this.minutes === 60){
        this.minutes = 0;
        this.hours += 1;
      }
      if(this.hours === 24){
        this.hours = 0
      }
      this.printTime();
    }
  }

  // const clock = new Clock();


const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers (sum, numsLeft, completionCallback) {
  if (numsLeft > 0 ) {
    reader.question("Enter the number", (number) => {
      sum += parseInt(number);
      console.log(sum);
      numsLeft -= 1;
      addNumbers (sum, numsLeft, completionCallback)
    });
  }
  if (numsLeft === 0) {
    reader.close();
    completionCallback(sum);
  }
}
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context){
    return ()=>{this.apply(context)}
}
class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }

  const turnOn = function() {
    console.log("Turning on " + this.name);
  };

  const lamp = new Lamp();

//   turnOn(); // should not work the way we want it to

  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);

//   boundTurnOn(); // should say "Turning on a lamp"
//   myBoundTurnOn(); // should say "Turning on a lamp"

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    // Prompt user to tell you whether el1 > el2; pass true back to the
    // callback if true; else false.
    reader.question(`Is ${el1} greater than ${el2}?`, (answer)=>{
        callback(answer)
        reader.close()
    })
  }

  // Once you're done testing askIfGreaterThan with dummy arguments, write this.
  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    // Do an "async loop":
    // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
    //    know whether any swap was made.
    // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
    //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
    //    continue the inner loop. You'll want to increment i for the
    //    next call, and possibly switch madeAnySwaps if you did swap.
    if(i === (arr.length - 1)){
        outerBubbleSortLoop(madeAnySwaps)
    }
    if(i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan)=>{

        })
    }
  }

  // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
  // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

  function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
    }

    // Kick the first outer loop off, starting `madeAnySwaps` as true.
  }

//   absurdBubbleSort([3, 2, 1], function(arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
//   });
