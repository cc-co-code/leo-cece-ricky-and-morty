import { createNavButton } from "../nav-button/nav-button.js";

export function createNavPagination(
  onClickPrev,
  onClickNext,
  page,
  maxPage,
  createNavButtton
) {
  const footer = document.querySelector('[data-js="footer"]');
  const navPagination = document.createElement("nav");
  footer.append(navPagination);
  //document.body.append(navPagination);
  navPagination.classList.add("navigation");
  navPagination.setAttribute("data-js", "navigation");

  const buttonPrevious = createNavButton("previous", "prev");
  const buttonNext = createNavButton("next", "next");

  navPagination.append(buttonPrevious);

  const pagination = document.createElement("span");
  navPagination.append(pagination);
  pagination.classList.add("navigation__pagination");
  pagination.setAttribute("data-js", "pagination");
  pagination.textContent = `${page} / ${maxPage}`;

  navPagination.append(buttonNext);

  const prevButton = document.querySelector('[data-js="button-prev"]');
  const nextButton = document.querySelector('[data-js="button-next"]');

  prevButton.addEventListener("click", onClickPrev);
  nextButton.addEventListener("click", onClickNext);
}
