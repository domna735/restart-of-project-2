function comma(noStr){
 var x=noStr.toString();
 var y=noStr.toString();
 for (var i=1;i<x.length/3;i++){
   var y=y.substr(0,y.length-(4*i-1))+","+y.substr(y.length-(4*i-1));
 }
 return y;
}
