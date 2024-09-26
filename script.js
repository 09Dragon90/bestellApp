let basketIfOpen = true;
let basket = [];

function init() {
  renderContent();
  renderBaskets();
}

function renderBaskets() {
  renderBasketDestop();
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

/**
 * Open and Close the Basket
 */
function toggelBasket() {
  let sectionContentRef = document.getElementById("sectionContent");
  let sectionBasketRef = document.getElementById("sectionBasketDesktop");

  if (basketIfOpen) {
    sectionBasketRef.classList.add("dNone");
    sectionContentRef.classList.add("fullContent");
    basketIfOpen = false;
  } else {
    sectionBasketRef.classList.remove("dNone");
    sectionContentRef.classList.remove("fullContent");
    basketIfOpen = true;
  }
}

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

function dineDeleteFromBasket(id) {
  let indexOfDine = basket.findIndex((dine) => dine.id === id);
  basket.splice(indexOfDine, 1);
  renderBaskets();
}

// TODO Basket speichern
// TODO Basket laden
// TODO Basket umschalter Liefern/Abholen
