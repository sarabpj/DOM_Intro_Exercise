//Change the greeting from "Hello, There!" to "Hello, World!".
var newGreet = document.getElementById('greeting');
newGreet.innerText = "Hello, World!";

//Set the background color of each <li> to yellow.
var li = document.getElementsByTagName('li');
for(var i= 0; i < li.length; i++){
  li[i].style.backgroundColor = "yellow";
}

//Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div
var img = document.createElement("img");
img.src= "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
greeting.appendChild(img);

//Add the class of selected to an <li> when it is clicked. Remove it from any other lis as well
//Change the image to be the most recently clicked food item.

var ul = document.getElementsByTagName('ul');
var imageArray=['images/milk.jpeg', 'images/honey.jpeg', 'images/water.jpeg', 'images/wine.jpeg', 'images/beer.jpeg'];
var body = document.getElementsByTagName('body')[0];

ul[0].addEventListener('click', function(event){
  for(var j =0; j < li.length; j++){
          li[j].className = "";
          body.children[4].children[0].src = './images/' + event.target.innerText + '.jpeg';
  }
  event.target.className = 'selected';
});

//When the gray div is moused over, it's removed from the DOM
var grey = document.getElementById('ghosting');

grey.addEventListener('mouseenter', function (){
   grey.style.display = "none";
  }

);

//When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size
var orange = document.getElementById('resize');

orange.addEventListener('mouseenter', function(){
 orange.style.width = "400px";
});

orange.addEventListener('mouseleave', function(){
 orange.style.width = "200px";
});

//When the reset button is clicked - remove the selected class from each <li> and change the image to panic.jpeg.
var input = document.getElementsByTagName('input');

input[0].addEventListener('click', function(){
  body.children[4].children[0].src = './images/panic.jpeg';
    for(var k= 0; k < li.length; k++){
      li[k].classList.remove("selected");
    }
});



//When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
// var numberListener = 

window.addEventListener('keypress',function(event){
  if (event.keyCode >= 0 && event.keyCode <= 9){
    alert('BALLLLLLZ');
  }
});

//function(){ alrert "I HATE NUMBERZZZ!"};

document.onkeypress = function(event) {
   evt = evt || window.event;
   var charCode = evt.which || evt.keyCode;
   var charStr = String.fromCharCode(charCode);
   if (/[0-9]/i.test(charStr)) {
       alert("I HATE NUMBERZZZ!");
   }
};




