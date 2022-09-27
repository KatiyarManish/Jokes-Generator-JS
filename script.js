const jokeText = document.getElementById("joke");
const Btn = document.getElementById("jokeBtn");

window.addEventListener("DOMContentLoaded", getRandomJokes);
Btn.addEventListener("click", getRandomJokes);

async function getRandomJokes() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  jokeText.textContent = data.joke;
}
