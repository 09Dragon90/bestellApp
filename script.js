let basketDestopIfOpen = true;
let basketMobileIfOpen = false;
let basket = [];

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
  sectionBasketDesktopRef.innerHTML = getTemplateBasketDesktop(basket);
}

function renderBasketMobile() {
  let sectionBasketMobileRef = document.getElementById("sectionBasketMobile");
  sectionBasketMobileRef.innerHTML = "";
  sectionBasketMobileRef.innerHTML = getTemplateBasketMobile(basket);
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
  let sectionContentRef = document.getElementById("sectionContent");
  let sectionBasketRef = document.getElementById("sectionBasketDesktop");

  if (basketDestopIfOpen) {
    sectionBasketRef.classList.add("dNone");
    sectionContentRef.classList.add("fullContent");
    basketDestopIfOpen = false;
  } else {
    sectionBasketRef.classList.remove("dNone");
    sectionContentRef.classList.remove("fullContent");
    basketDestopIfOpen = true;
  }
}

/**
 * Open and Close the Mobile Basket with Button
 */
function toggelBasketMobile() {
  let sectionBasketMobileRef = document.getElementById("sectionBasketMobile");
  let bodyRef = document.getElementById("body");

  if (!basketMobileIfOpen) {
    sectionBasketMobileRef.classList.add("sectionBasketMobileOpen");
    bodyRef.classList.add("noScrollbar");
    basketMobileIfOpen = true;
  } else {
    sectionBasketMobileRef.classList.remove("sectionBasketMobileOpen");
    bodyRef.classList.remove("noScrollbar");
    basketMobileIfOpen = false;
  }
}

/**
 * Close the Mobile Basket if the View bigger than 650px
 */
function resizeBody(event) {
  if (event.target.innerWidth > 650) {
    let sectionBasketMobileRef = document.getElementById("sectionBasketMobile");
    let bodyRef = document.getElementById("body");
    sectionBasketMobileRef.classList.remove("sectionBasketMobileOpen");
    bodyRef.classList.remove("noScrollbar");
    basketMobileIfOpen = false;
  }
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
  let sectionBasketMobileRef = document.getElementById("sectionBasketMobile");
  sectionBasketMobileRef.classList.remove("sectionBasketMobileOpen");
  dialogOrder.showModal();
}

/**
 * close the dialog if clicked
 */
function closeDialog() {
  dialogOrder.close();
  renderBaskets();
}

// TODO Basket umschalter Liefern/Abholen
