const press = document.getElementById("press");
const img = document.getElementById("img");
const num = document.getElementById("num");

press.onclick = () => {
   setInterval(() => { 
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    num.innerHTML = random;
    if (random == 0) {
      img.src = "./res/img/one.jfif";
    }
    if (random == 1) {
      img.src = "./res/img/two.jfif";
    }
    if (random == 2) {
      img.src = "./res/img/three.jfif";
    }
    if (random == 3) {
      img.src = "./res/img/four.jfif";
    }
    if (random == 4) {
      img.src = "./res/img/main.jfif";
    }
   /* if (random == 5) {
      clearInterval(change);
      press.style.display = "block";
      img.src = "";
    }*/
  }, 1000);
  press.style.display = "none";
};
