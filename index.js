import { createCharacterCard } from "./components/card/card.js";
import { createSearchBar } from "./components/search-bar/search-bar.js"

// States
let maxPage = 1; /// should be updated according to API fetch
let page = 1; //should be increase - decrease with button addEventListener
let searchQuery = "";



const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

//Initialize components
createSearchBar(onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData)
    searchQuery = data.query
  
    cardContainer.innerHTML = ``;
    console.log("Submit:", searchQuery)
    fetchCharacters(searchQuery)
}

//API INTEGRATION - FETCH DATA

async function fetchCharacters() {
  cardContainer.innerHTML = ``
  try {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`)
  
  if (response.ok) {
  const data = await response.json();
  const characters = data.results
  maxPage = data.info.pages
  pagination.innerHTML = ` ${page} / ${maxPage}`   

  console.log("Characters Fetch - Complete")
  
  //Array Method for Character Card generation

  characters.forEach((character) => {
  createCharacterCard(character) 
  })

  return characters;
  
  }
  else {
    console.error("Bad Response");
  }} 
  catch (error) {
    console.error("Network Error", error);
  }
}

fetchCharacters()

// Nav Pagination

prevButton.addEventListener("click", () => {
  if ( page >= 1 ){
    page -- ;
    console.log("page:", page, "decrease")
    fetchCharacters()
  }
})

nextButton.addEventListener("click", () => {
  if( page < maxPage ){ 
    page ++ ;   
    console.log("page:", page, "increase")
    fetchCharacters()
  }
})


