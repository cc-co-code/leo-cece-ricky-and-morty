import { createCharacterCard } from "./components/card/card.js";
import { createNavPagination } from "./components/nav-pagination/nav-pagination.js";

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


//API INTEGRATION - FETCH DATA

async function fetchCharacters() {
  cardContainer.innerHTML = ``
  try {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
  
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


