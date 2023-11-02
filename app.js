const btn = document.getElementById("btn");
console.log(btn);

const color= document.querySelector(".color");
console.log(color);

const backy = document.querySelector(".backy");
console.log(backy);



const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];



function randomColor() {
    return colors[Math.floor((Math.random() * colors.length))];
}

btn.addEventListener("click", function(){
   // console.log("Hi");

  //console.log(randomColor());
  let tempColor = randomColor();
  backy.style.backgroundColor = tempColor;
  color.innerHTML = tempColor;
  
});


