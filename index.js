let players = JSON.parse(localStorage.getItem("players")) || {};

let player = document.querySelector(".player");
document
  .getElementById("playercolorInput")
  .addEventListener("change", function () {
    player.style.backgroundColor =
      document.getElementById("playercolorInput").value;
  });

let submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  let playernameInput = document.getElementById("playernameInput");
  let playercolorInput = document.getElementById("playercolorInput");

  players[playernameInput.value] = {
    color: playercolorInput.value,
  };
  localStorage.setItem("players", JSON.stringify(players));
  playernameInput.value = "";
  playercolorInput.value = "";
  player.style.backgroundColor = "transparent";
});

// players = JSON.parse(localStorage.getItem("players"));
