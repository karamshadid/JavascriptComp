window.onscroll=function(){
  scrollFunction()
};

function scrollFunction(){
if(document.body.scrollTop>100 || document.documentElement.scrollTop>100 ){
  document.getElementById("popup").style.display="block";
}


else{
  document.getElementById("popup").style.display="none";
}
}
