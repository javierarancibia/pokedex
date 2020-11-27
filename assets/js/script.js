const search = (event) => {
    event.preventDefault();
    const pokenumber = document.getElementById("pokenumber").value;
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";
    $.get(baseURL + pokenumber, (pokemon) => {
      document.getElementById("pokename").innerHTML = pokemon.name;
      document.getElementById("pokeimage").src = pokemon.sprites.front_default;
    });
  }
  document.getElementById("pokeform").addEventListener('submit', search);