/**
 * Creates the Template of the Basket
 * @param {[]} basket Array of Dine in the Basket
 * @returns HTML Template for Basket
 */
function getTemplateBasketDesktop(basket, delivery) {
  let template = "";
  if (basket.length > 0) {
    template = `<div class="sticky">
                  <h2>Warenkorb</h2>
                  ${getButtonDelivery(delivery)}
                  <div class="seperator"></div>
                  ${getCardsBasket(basket)}
                  ${getPrices(basket, delivery)} 
                  ${getButtonOrder()} 
                </div>`;
  } else {
    template = `<div class="sticky">
                  <h2>Warenkorb</h2>
                  ${getButtonDelivery(delivery)}
                  <div class="seperator"></div>
                  ${getEmptyBasket()}
                </div>`;
  }
  return template;
}

function getTemplateBasketMobile(basket, delivery) {
  let template = "";
  if (basket.length > 0) {
    template = `<div
                class="btnBasketMobile"
                onclick="toggelBasketMobile()"      >
                  <h1>Warenkorb</h1>
                  <div class="basketMobileImg">
                    <img src="./assets/icons/cart-shopping-solid.svg" alt="" />
                    <p class="basketMobileImgCounter">${getCounterBasket(
                      basket
                    )}</p>
                  </div>
                </div>
                ${getButtonDelivery(delivery)}
                <div class="seperator"></div>
                <div class="containerBasket">${getCardsBasket(basket)}</div>
                ${getPrices(basket, delivery)} ${getButtonOrder()}`;
  } else {
    template = `<div class="btnBasketMobile" onclick="toggelBasketMobile()">
                  <h1>Warenkorb</h1>
                </div>
                ${getButtonDelivery(delivery)}
                <div class="seperator"></div>
                ${getEmptyBasket()}`;
  }
  return template;
}

function getPrices(basket, delivery) {
  let shippingCosts = 5;
  if (!delivery) {
    shippingCosts = 0;
  }
  let subtotal = calculatSubtotal(basket);
  let total = subtotal + shippingCosts;
  return `<div class="seperator"></div>
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
          </div>`;
}

function getEmptyBasket() {
  return `<div class="emptyBasket">
            <img
              src="./assets/icons/bag-shopping-solid.svg"
              alt="ShoppingBag"
            />
            <p>Wähle leckere Gerichte aus der Karte und bestelle dein Menü</p>
          </div>`;
}

function getButtonDelivery(delivery) {
  let classSlider = "sliderChangeDelivery";
  if (!delivery) {
    classSlider += " sliderChangeDeliveryActive";
  }

  return `<div class="changeDelivery">
            <div class="btnChangeDelivery" onclick="changeDelivery()">
              <div class="${classSlider}"></div>
              <p class="btnChangeDeliveryText btnChangeDeliveryTextFirst">Lieferung</p>
              <p class="btnChangeDeliveryText btnChangeDeliveryTextLast">Abholen</p>
            </div>
          </div>`;
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
                    <p>${calculatPriceDine(
                      basket[i].price,
                      basket[i].quanty
                    )} €</p>
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

function getButtonOrder() {
  return `<div class="orderBasket">
            <div class="btnOrderBasket" onclick="sendOrder()">
              <p>Bestellung abschicken</p>
            </div>
          </div>`;
}

/**
 * Calculate the total price of dines
 * @param {Number} price Price of the Dine
 * @param {Number} quanty Quanty of the Dine
 * @returns The total Price of Dines
 */
function calculatPriceDine(price, quanty) {
  let priceDine = price * quanty;
  return formatPrice(priceDine);
}

/**
 * Calculate the total price of basket
 * @param {[]} basket Array of Basket
 * @returns the total price of basket
 */
function calculatSubtotal(basket) {
  let priceSubtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    priceSubtotal += basket[i].price * basket[i].quanty;
  }
  return priceSubtotal;
}

/**
 * Adds the number of all dishes to a total number
 * @param {[]} basket Array of Basket
 * @returns count of dine in Basket
 */
function getCounterBasket(basket) {
  let counter = 0;
  for (let i = 0; i < basket.length; i++) {
    counter += basket[i].quanty;
  }
  return counter;
}
