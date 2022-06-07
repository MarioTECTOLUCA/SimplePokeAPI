/* Getting components by ID using jQuery */
const pokedex = $("#btnPokedex");
const pokedex_image = $("#image");
const pokedex_name = $("#name");
const pokedex_type_list = $("#type");

/* Using the fetch method obtains the pokemon corresponding to the generated index  */
function setPokemon() {
    const rand = getRndInteger(1,898);
    let url = "https://pokeapi.co/api/v2/pokemon/" +rand;
    fetch(url)
    .then(data => data.json())
    .then(res => {
        const {name:nom, sprites:image, types:types} = res;
        pokedex_name.text(nom);
        pokedex_type_list.empty();
        pokedex_type_list.append(`li`).text("TIPO:")
        $.each(types, function (index, type) { 
            pokedex_type_list.append(`<li>${this.type.name}</li>`);
        }); 
        pokedex_image.attr('src',image.front_default);
    });
};

/* Get random intger from 1 to 898 correspondent to actual numbers of pokemons in PokeApi*/ 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
};

/* Set execution interval to 30s (30000) and click function to button in PokedexCard */
$(document).ready(function () {
    setInterval("setPokemon()", 30000);
    pokedex.click(function() {
        setPokemon();
    });
});

