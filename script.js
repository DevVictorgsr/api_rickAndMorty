const btnGo = document.getElementById("btnGo");
const input = document.getElementById("input");
const content = document.getElementById("content");
const image = document.getElementById("img");

const url = "https://rickandmortyapi.com/api/character";

function callApi() {
  const characterId = input.value;
  document.body.classList.add("transparent-background");

  fetch(`${url}/${characterId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const numberOfEpisodes = data.episode.length;

      image.style.display = "block";
      image.setAttribute("src", data.image);
      content.textContent = `Nome: ${data.name}\nEspécie: ${data.species}\nPlaneta de origem: ${data.origin.name}\nEpisódios em que aparece: ${numberOfEpisodes}`;
    });
}

btnGo.addEventListener("click", callApi);
