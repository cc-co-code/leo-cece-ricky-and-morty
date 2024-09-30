 const cardContainer = document.querySelector("[data-js='card-container']")

export function createCharacterCard(character) {
  const characterCard = document.createElement("li")
   characterCard.classList.add("card")
    characterCard.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src="${character.image}"
              alt="${character.name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${character.name}</h2>
            <ul class="card__info">
              <li class="card__info-title">Status</li>
              <li class="card__info-description">${character.status}</
                >
              <li class="card__info-title">Type</li>
              <li class="card__info-description">${character.type}</li>
              <li class="card__info-title">Occurrences</li>
              <li class="card__info-description">${character.episode.length}</li>
            </ul>
          </div>
    `
    cardContainer.append(characterCard)
}

