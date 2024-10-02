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
                    ${getTemplateCategories(content)}            
                    </div>
                    <div class="dishes container">
                    ${getTemplateDishesCategorie(content)}            
                    </div>
                  </div>`;

  return template;
}

function getTemplateCategories(arrayOfCategories) {
  let template = `<div class="container categoriesList">`;

  for (let i = 0; i < arrayOfCategories.length; i++) {
    template += `<a href="#category${arrayOfCategories[i].category}">${arrayOfCategories[i].category}</a>`;
  }

  template += `</div>`;
  return template;
}

function getTemplateDishesCategorie(arrayOfCategories) {
  let template = ``;
  for (let i = 0; i < arrayOfCategories.length; i++) {
    template += `<h2 id="category${arrayOfCategories[i].category}" class="dishesCategorie">${arrayOfCategories[i].category}</h2>`;
    for (let iDine = 0; iDine < arrayOfCategories[i].dine.length; iDine++) {
      template += ` <div class="containerDish" onclick="addToBasket('${
        arrayOfCategories[i].dine[iDine].id
      }')">
        ${getTemplateDish(arrayOfCategories[i].dine[iDine])}`;
      template += `</div>`;
    }
  }
  return template;
}

function getTemplateDish(dine) {
  let template = `<h3>${dine.name}</h3>
                  <img
                    class="dishAddToBasket"
                    src="./assets/icons/plus-solid.svg"
                    alt="AddToBasket"
                  />
                  <p class="containerDishIngredient">
                    mit ${formatIngredient(dine.ingredient)}
                  </p>
                  <p class="containerDishPrice">${formatPrice(
                    dine.price
                  )} €</p>`;
  return template;
}

/**
 *
 * @param {[string]} ingredient Array with all ingredients
 * @returns a String with all ingredients
 */
function formatIngredient(ingredient) {
  let ingredientList = ingredient[0];
  for (let i = 1; i < ingredient.length; i++) {
    ingredientList += ", " + ingredient[i];
  }
  return ingredientList;
}
