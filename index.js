import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

//API INTEGRATION - FETCH DATA

async function fetchCharacters() {
  try {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  
  if (response.ok) {
  const data = await response.json();
  const characters = data.results
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


