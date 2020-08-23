setTimeout(slideBars, 2000);
setTimeout(function(){
  document.getElementsByTagName("body")[0].style.overflow = "visible";
}, 2000);

function slideBars() {
  var x = document.getElementsByClassName("bar");
  for(var i = 0; i < x.length; i++) {
    x[i].style.width = "0%";
  }
}

function enableOverflow() {

}
