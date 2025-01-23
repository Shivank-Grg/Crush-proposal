function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "px"; // Corrected the unit to 'px'
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "px"; // Corrected the unit to 'px'
  }
  
  const moveRandom = document.querySelector("#move-random"); // Assuming the element has the ID "move-random"
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });