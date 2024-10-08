let basketDestopIfOpen = true;
let basketMobileIfOpen = false;
let basket = [];
let delivery = true;

function init() {
  renderContent();
  renderBaskets();
}

function renderBaskets() {
  renderBasketDestop();
  renderBasketMobile();
}

function renderContent() {
  let sectionContentRef = document.getElementById("sectionContent");
  sectionContentRef.innerHTML = "";
  sectionContentRef.innerHTML = getTemplateContent(dishes);
}

function renderBasketDestop() {
  let sectionBasketDesktopRef = document.getElementById("sectionBasketDesktop");
  sectionBasketDesktopRef.innerHTML = "";
  sectionBasketDesktopRef.innerHTML = getTemplateBasketDesktop(
    basket,
    delivery
  );
}

function renderBasketMobile() {
  let sectionBasketMobileRef = document.getElementById("sectionBasketMobile");
  sectionBasketMobileRef.innerHTML = "";
  sectionBasketMobileRef.innerHTML = getTemplateBasketMobile(basket, delivery);
}

function changeDelivery() {
  let buttonsDeliveryRef = document.getElementsByClassName(
    "sliderChangeDelivery"
  );
  if (delivery) {
    for (let i = 0; i < buttonsDeliveryRef.length; i++) {
      buttonsDeliveryRef[i].classList.add("sliderChangeDeliveryActive");
    }
    delivery = false;
  } else {
    for (let i = 0; i < buttonsDeliveryRef.length; i++) {
      buttonsDeliveryRef[i].classList.remove("sliderChangeDeliveryActive");
    }
    delivery = true;
  }

  setTimeout(function () {
    renderBaskets();
  }, 300);
}

/**
 * Format the Price
 * @param {Number} price Price to Formated
 * @returns Price in fomrat xx,xx
 */
function formatPrice(price) {
  return Number(price).toFixed(2).toString().replace(".", ",");
}

/**
 * Open and Close the Destop Basket with Button
 */
function toggelBasket() {
  if (basketDestopIfOpen) {
    addClass("sectionBasketDesktop", "dNone");
    addClass("sectionContent", "fullContent");
    basketDestopIfOpen = false;
  } else {
    removeClass("sectionBasketDesktop", "dNone");
    removeClass("sectionContent", "fullContent");
    basketDestopIfOpen = true;
  }
}

/**
 * Open and Close the Mobile Basket with Button
 */
function toggelBasketMobile() {
  if (!basketMobileIfOpen) {
    addClass("sectionBasketMobile", "sectionBasketMobileOpen");
    addClass("body", "noScrollbar");
    basketMobileIfOpen = true;
  } else {
    removeClass("sectionBasketMobile", "sectionBasketMobileOpen");
    removeClass("body", "noScrollbar");
    basketMobileIfOpen = false;
  }
}

function removeClass(idRef, nameClass) {
  let ref = document.getElementById(idRef);
  ref.classList.remove(nameClass);
}

function addClass(idRef, nameClass) {
  let ref = document.getElementById(idRef);
  ref.classList.add(nameClass);
}

/**
 * Close the Mobile Basket if the View bigger than 650px
 */
function resizeBody(event) {
  if (event.target.innerWidth > 650) {
    closeMobileBasket();
  }
}

/**
 * Close the Mobile Basket
 */
function closeMobileBasket() {
  let sectionBasketMobileRef = document.getElementById("sectionBasketMobile");
  let bodyRef = document.getElementById("body");
  sectionBasketMobileRef.classList.remove("sectionBasketMobileOpen");
  bodyRef.classList.remove("noScrollbar");
  basketMobileIfOpen = false;
}

/**
 * Add or increas the dine in Basket
 * @param {string} id Id of the Dine
 */
function addToBasket(id) {
  if (basket.some((dine) => dine.id === id)) {
    changeDineQuanty(id, true);
  } else {
    let dine = findDine(id);
    let dineWithQuanty = { ...dine, quanty: 1 };
    basket.push(dineWithQuanty);
  }
  renderBaskets();
}

/**
 *
 * @param {string} id Id of the Dine
 * @returns The Obj of Dine
 */
function findDine(id) {
  let idCategorie = id.slice(0, 3);
  let indexOfCategorie = dishes.findIndex((x) => x.id === idCategorie);
  let idNumber = id.slice(3, 7);
  let indexOfDine = Number.parseInt(idNumber) - 1;
  let dine = dishes[indexOfCategorie].dine[indexOfDine];
  return dine;
}

/**
 * Change the Quanty of the Dine
 * @param {string} id Id of the Dine
 * @param {boolean} increase Increase = True, Decrease = False
 */
function changeDineQuanty(id, increase) {
  let indexOfDine = basket.findIndex((dine) => dine.id === id);
  if (increase) {
    basket[indexOfDine].quanty++;
  } else {
    basket[indexOfDine].quanty--;
    if (basket[indexOfDine].quanty < 1) {
      dineDeleteFromBasket(id);
    }
  }
  renderBaskets();
}

/**
 * Delet the Dine from the Basket
 * @param {string} id Id of the Dine
 */
function dineDeleteFromBasket(id) {
  let indexOfDine = basket.findIndex((dine) => dine.id === id);
  basket.splice(indexOfDine, 1);
  renderBaskets();
}

function sendOrder() {
  basket = [];
  delivery = true;
  closeMobileBasket();
  dialogOrder.showModal();
}

/**
 * close the dialog if clicked
 */
function closeDialog() {
  dialogOrder.close();
  renderBaskets();
}
