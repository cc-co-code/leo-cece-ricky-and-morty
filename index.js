import { createCharacterCard } from "./components/card/card.js";
import { createNavPagination } from "./components/nav-pagination/nav-pagination.js";
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

// Nav Pagination

createNavPagination(onClickPrev, onClickNext, page, maxPage)
const pagination = document.querySelector('[data-js="pagination"]');

function onClickPrev(event) {
  event.preventDefault();
  if ( page > 1 ){
    page -- ;
    fetchCharacters()
  }
}

function onClickNext(event) {
  event.preventDefault();
  if( page < maxPage ){ 
    page ++ ;   
    fetchCharacters()
  }
}

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
    cardContainer.innerHTML=`
    <div style="padding:2em; margin-top:3em; background-color:var(--background-color-primary); text-transform: uppercase">
      <h1>Character doesn't exist</h1>
    </div>`
    console.error("Bad Response: Character doesn't exist");
  }} 
  catch (error) {
    console.error("Network Error", error);
  }
}

fetchCharacters()



