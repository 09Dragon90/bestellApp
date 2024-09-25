let basketIfOpen = true;

function init() {
  renderContent();
}

function renderContent() {
  let sectionContentRef = document.getElementById("sectionContent");
  sectionContentRef.innerHTML = "";
  sectionContentRef.innerHTML = getTemplateContent(dishes);
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
