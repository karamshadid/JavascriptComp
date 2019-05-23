function myAnimation() {
  let elem = document.getElementById("demo");
  let position = 0;
  let timerId = setInterval(frame, 10);



  function frame() {
    if (position === 300) {
      clearInterval(timerId);
    } else {
      position++;
      elem.style.left = position + "px";
    }
  }
}
