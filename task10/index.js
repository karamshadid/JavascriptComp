
 let trans= ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];


 let result= trans.filter(function(a){
   return a.indexOf("line") > -1
 });

 console.log(result);
 result.sort();
 console.log(result);
