



 var layout = 0;
 setInterval(function() {
   var pickList = ["url(runner1.png)","url(runner2.png)", "url(runner3.png)"];
   layout++;
    if (layout===pickList.length) layout=0;
     document.body.style.backgroundImage = pickList[layout];
 }, 50);
