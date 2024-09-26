let basketIfOpen = true;
let basket = [
  {
    id: "PIZ003",
    name: "Pizza Funghi",
    price: 12.49,
    ingredient: ["Tomatensoße", "Pilze", "Käse"],
    quanty: 3,
  },
  {
    id: "PIZ004",
    name: "Pizza Diavolo",
    price: 13.99,
    ingredient: ["Tomatensoße", "Peperoni", "Chili", "Käse"],
    quanty: 1,
  },
  {
    id: "PIZ005",
    name: "Pizza Quattro Stagioni",
    price: 14.49,
    ingredient: ["Tomatensoße", "Schinken", "Pilze", "Artischocken", "Oliven"],
    quanty: 2,
  },
];

function init() {
  renderContent();
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
  let sectionBasketRef = document.getElementById("sectionBasket");

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
    let indexOfDine = basket.findIndex((dine) => dine.id === id);
    basket[indexOfDine].quanty++;
  } else {
    let dine = findDine(id);
    let dineWithQuanty = { ...dine, quanty: 1 };
    basket.push(dineWithQuanty);
  }
  renderBasketDestop();
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

// TODO Basket speichern
// TODO Basket laden
// TODO Basket umschalter Liefern/Abholen
// TODO Basket plus/minus Gericht
// TODO Basket Gericht löschen
