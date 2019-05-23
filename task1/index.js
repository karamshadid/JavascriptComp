

let count=0;

let timer = setInterval(myCount, 150);// setInterval already acts like a loop so for loop not needed.

function myCount() {
  if (count<=100) {
    count++;
  } else {
    count=0;

  }

      console.log(count);
    }
