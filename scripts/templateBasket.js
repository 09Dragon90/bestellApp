function getTemplateBasketDesktop(basket) {
  let template = `<div class="sticky">
          <h2>Warenkorb</h2>
          <div class="seperator"></div>
          <div class="cardBasket">
            <h4>Pizza Salamie</h4>
            <div class="cardBasketMenue">
              <div class="cardBasketNumbers">
                <div class="basketMenueIcons">
                  <img
                    src="./assets/icons/minus-solid.svg"
                    alt="Button Minus"
                  />
                </div>
                <p class="cardBasketQuanty">7x</p>
                <div class="basketMenueIcons">
                  <img src="./assets/icons/plus-solid.svg" alt="Button Plus" />
                </div>
              </div>
              <p>41,23 €</p>
              <div class="basketMenueIcons">
                <img src="./assets/icons/trash-can-regular.svg" alt="Trash" />
              </div>
            </div>
          </div>
          <div class="cardBasket">
            <h4>Pizza Salamie</h4>
            <div class="cardBasketMenue">
              <div class="cardBasketNumbers">
                <div class="basketMenueIcons">
                  <img
                    src="./assets/icons/minus-solid.svg"
                    alt="Button Minus"
                  />
                </div>
                <p class="cardBasketQuanty">7x</p>
                <div class="basketMenueIcons">
                  <img src="./assets/icons/plus-solid.svg" alt="Button Plus" />
                </div>
              </div>
              <p>41,23 €</p>
              <div class="basketMenueIcons">
                <img src="./assets/icons/trash-can-regular.svg" alt="Trash" />
              </div>
            </div>
          </div>
          <div class="seperator"></div>
          <div class="priceBasket">
            <div class="priceBasketRow">
              <p>Zwischensumme</p>
              <p>412,23 €</p>
            </div>
            <div class="priceBasketRow">
              <p>Versand</p>
              <p>0,00 €</p>
            </div>
            <div class="priceBasketRow fontWeightBold">
              <p>Gesamt</p>
              <p>412,23 €</p>
            </div>
          </div>
        </div>`;
  return template;
}
