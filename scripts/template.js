/**
 * Creates the Template of the Dishes
 * @param {[]} content Array of Dishes
 * @returns HTML Template for Content
 */
function getTemplateContent(content) {
  let template = `<div class="contentHeader">
          <div class="contentHeaderImgWrapper">
            <img
              class="contentHeaderImg"
              src="./assets/img/pizzaria-header.jpg"
              alt="Header Bild"
            />
            <img
              class="contentHeaderLogo"
              src="./assets/img/pizzarie-logo.png"
              alt="Header Logo"
            />
          </div>
          <div class="container">
            <h2 class="contentHeaderName">Pizzaria Delizioso</h2>
            <p class="textEvaluation">Bewertung (4,3 von 5 Sternen)</p>
          </div>
          <div class="categories">
            <div class="container categoriesList">
              <a href="#">Pizza</a>
              <a href="#">Pasta</a>
              <a href="#">Salat</a>
              <a href="#">Dessert</a>
            </div>
          </div>
          <div class="dishes container">
            <h2 class="dishesCategorie">Pizza</h2>
            <div class="containerDish">
              <h3>Pizza Salamie</h3>
              <img
                class="dishAddToBasket"
                src="./assets/icons/plus-solid.svg"
                alt="AddToBasket"
              />
              <p class="containerDishIngredient">
                mit "Tomatensoße", "Salamie", "Käse"
              </p>
              <p class="containerDishPrice">11,99 €</p>
            </div>
          </div>
        </div>`;

  return template;
}
