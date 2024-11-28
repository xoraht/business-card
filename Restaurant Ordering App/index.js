import menuArray from "./data.js";

document.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.dataset.id) {
    renderOrder(e.target.dataset.id);
  }
  else if (e.target.classList.contains('complete-button')) {
    renderCompleteOrder();
  }
});

function renderMenu(menuArray) {
  const mainContainer = document.getElementById("main-container");
  const itemsArr = menuArray
    .map((item) => {
      return `<section class="main-container-item">
            <p class="main-section-product-image">${item.emoji}</p>
            <div class="main-section-product-details">
                <h3 class="main-section-product-details-title">${item.name}</h3>
                <p class="main-section-product-details-description">${item.ingredients.join(
                  ", "
                )}</p>
                <p class="main-section-product-details-price">$${item.price}</p>
            </div>
            <button type="button" class="main-section-product-button" data-id="${
              item.id
            }">+</button>
        </section>`;
    })
    .join("");
  mainContainer.innerHTML = itemsArr;
}

function renderOrder(id) {
  const orderContainer = document.getElementById("footer-container");
  orderContainer.innerHTML = `<section class="footer-container">
            <h2 class="footer-section-title">Your order</h2>
            <div class="footer-section-items">
                <div class="footer-section-item">
                    <h3 class="main-section-product-details-title">${menuArray[id].name}</h3>
                    <button type="button" class="footer-section-item-remove">remove</button>
                    <p class="main-section-product-details-price">${menuArray[id].price}</p>
                </div>
            </div>
            <div class="footer-section-complete">
                <div class="complete-total">
                    <h3 class="main-section-product-details-title">Total price:</h3>
                    <p class="main-section-product-details-price">${menuArray[id].price}</p>
                </div>
                <button type="button" class="complete-button">Complete order</button>
            </div>
        </section>`;
}

renderMenu(menuArray);
