//Magic 8 Ball by Naazpreet Giani

//BUTTON EVENT LISTENER
document.getElementById("8Ball").addEventListener("click", btnClicked);

let outputEl = document.getElementById("ques-out");

function btnClicked() {
  let input = document.getElementById("ques-in").value;
  //  let output = document.getElementById("ques-out").value;

  let num = Math.random();
  if (num < 0.2) {
    outputEl.innerHTML = "Without a Doubt.";
  } else if (num < 0.4) {
    outputEl.innerHTML = "As I see it, yes.";
  } else if (num < 0.6) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (num < 0.8) {
    outputEl.innerHTML = "Don't count on it.";
  } else if (num < 1.0) {
    outputEl.innerHTML = "Outlook not so good.";
  }
  if (input == "") {
    outputEl.innerHTML = "Please ask a question...";
  } else if (input == "Does a magic 8 ball actually work?") {
    outputEl.innerHTML = "How dare you doubt me!";
  } else if (input == "Is JavaScript awesome?") {
    outputEl.innerHTML = "Of Course!";
  }
}
