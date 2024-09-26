/**
 * Creates the Template of the Basket
 * @param {[]} basket Array of Dine in the Basket
 * @returns HTML Template for Basket
 */
function getTemplateBasketDesktop(basket) {
  let subtotal = calculatSubtotal(basket);
  let shippingCosts = 5;
  let total = subtotal + shippingCosts;
  let template = "";
  if (basket.length > 0) {
    template = `<div class="sticky">
          <h2>Warenkorb</h2>
          <div class="seperator"></div>
          ${getCardsBasket(basket)}
          
          <div class="seperator"></div>
          <div class="priceBasket">
            <div class="priceBasketRow">
              <p>Zwischensumme</p>
              <p>${formatPrice(subtotal)} €</p>
            </div>
            <div class="priceBasketRow">
              <p>Lieferung</p>
              <p>${formatPrice(shippingCosts)} €</p>
            </div>
            <div class="priceBasketRow fontWeightBold">
              <p>Gesamt</p>
              <p>${formatPrice(total)} €</p>
            </div>
          </div>
        </div>`;
  } else {
    template = `<div class="sticky">
    <h2>Warenkorb</h2>
    <div class="seperator"></div>
    <div class="emptyBasket">
            <img
              src="./assets/icons/bag-shopping-solid.svg"
              alt="ShoppingBag"
            />
            <p>Wähle leckere Gerichte aus der Karte und bestelle dein Menü</p>
          </div>
        </div>`;
  }
  return template;
}

function getCardsBasket(basket) {
  let template = "";
  for (let i = 0; i < basket.length; i++) {
    template += `<div class="cardBasket">
            <h4>${basket[i].name}</h4>
            <div class="cardBasketMenue">
              <div class="cardBasketNumbers">
                <div class="basketMenueIcons" onclick="changeDineQuanty('${
                  basket[i].id
                }', false)">
                  <img
                    src="./assets/icons/minus-solid.svg"
                    alt="Button Minus"
                  />
                </div>
                <p class="cardBasketQuanty">${basket[i].quanty}x</p>
                <div class="basketMenueIcons" onclick="changeDineQuanty('${
                  basket[i].id
                }', true)">
                  <img src="./assets/icons/plus-solid.svg" alt="Button Plus" />
                </div>
              </div>
              <p>${calculatPriceDine(basket[i].price, basket[i].quanty)} €</p>
              <div class="basketMenueIcons" onclick="dineDeleteFromBasket('${
                basket[i].id
              }')">
                <img src="./assets/icons/trash-can-regular.svg" alt="Trash" />
              </div>
            </div>
          </div>`;
  }
  return template;
}

function calculatPriceDine(price, quanty) {
  let priceDine = price * quanty;
  return formatPrice(priceDine);
}

function formatPrice(price) {
  return Number(price).toFixed(2).toString().replace(".", ",");
}

function calculatSubtotal(basket) {
  let priceSubtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    priceSubtotal += basket[i].price * basket[i].quanty;
  }
  return priceSubtotal;
}
