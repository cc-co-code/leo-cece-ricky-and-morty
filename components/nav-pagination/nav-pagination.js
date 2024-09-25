export function createNavPagination(onClickPrev, onClickNext, page, maxPage) {

  const navPagination = document.createElement("nav")
  navPagination.classList.add("navigation")
  navPagination.setAttribute('data-js',"navigation")

  navPagination.innerHTML = `<button class="button button--prev" data-js="button-prev">
          previous
        </button>
        <span class="navigation__pagination" data-js="pagination">${page} / ${maxPage}</span>
        <button class="button button--next" data-js="button-next">next</button>
      `
  document.body.append(navPagination)

  const prevButton = document.querySelector('[data-js="button-prev"]');
  const nextButton = document.querySelector('[data-js="button-next"]');

  prevButton.addEventListener("click", onClickPrev)
  nextButton.addEventListener("click", onClickNext)
  
  return navPagination
}
