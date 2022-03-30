// Burger
const burger = document.getElementById("switch");
const nav = document.getElementById("navigation");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("open-menu");
});

// Animation Of the Description Text

let index = 0;
const animation = () => {
  let descriptionText =
    "Hey, I am evil coder. In this blog you can see my Journey";
  let descriptionEl = (document.getElementById("description").innerHTML =
    descriptionText.slice(0, index));
  index += 1;
  if (index > descriptionText.length) {
    index = 0;
  }
};

let setIntervalAnimation = setInterval(animation, 100);
