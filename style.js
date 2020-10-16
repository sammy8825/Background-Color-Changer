var color = document.getElementById("colorinput");

var username = document.getElementById("inputuser");

document.querySelector("button").addEventListener("click",function (){
  if(username.value != ""){
    document.getElementById("username").innerHTML = ("Hi " + username.value + " !!!");
    username.value = "";
  } document.querySelector("body").style.backgroundColor = color.value;
});
