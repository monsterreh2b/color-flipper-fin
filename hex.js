const btn = document.getElementById("btn");
console.log(btn);

const color= document.querySelector(".color");
console.log(color);

const backy = document.querySelector(".backy");
console.log(backy);

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function randomGuy() {
    return hex[Math.floor((Math.random() * hex.length))];
}

btn.addEventListener("click", function(){
    // console.log("Hi");
 
   //console.log(randomColor());
   let tempGuy = randomGuy();
   console.log(tempGuy);
   let hexFin = "#";
   let tempArray = [];
   for (i = 0; i < 6; i++) {
      tempArray.push(randomGuy());
   }

   console.log(tempArray);
   tempArray.join("");
   console.log(tempArray.join(""));
   //backy.style.backgroundColor = tempColor;
   //color.innerHTML = tempColor;
   console.log(hexFin + tempArray.join(""));
   backy.style.backgroundColor = hexFin + tempArray.join("");
   color.innerHTML = hexFin + tempArray.join("");
 });