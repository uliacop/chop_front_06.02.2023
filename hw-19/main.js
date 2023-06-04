const div = document.createElement("div");
div.classList.add("wrapper");
const product = document.createElement("div");
product.classList.add("product");
const list = document.createElement("div");
list.classList.add("list");
const priceInfo = document.createElement("div");
priceInfo.classList.add("price-info");
const body = document.body;
body.appendChild(div);
div.append(product, list, priceInfo);
const header = document.createElement("h1");
header.textContent = "Раді бачити в нашому магазині!";
div.insertAdjacentElement("beforebegin", header);
header.classList.add("title");
const ul = `
    <ul>
        <li><button class="btn" data-data-id="meat">Meat</button></li>
        <li><button class="btn" data-data-id="bread">Bread</button></li>
        <li><button class="btn" data-data-id="fish">Fish</button></li>
    </ul>
`;
product.innerHTML = ul;
const data = {
  meat: [
    { name: "bacon", count: 21, quality: "excellent" },
    { name: "beef", count: 12, quality: "excellent" },
    { name: "chicken", count: 7, quality: "excellent" },
  ],
  bread: [
    { name: "baguette", count: 23, quality: "excellent" },
    { name: "sponge cake", count: 20, quality: "excellent" },
    { name: "quiche", count: 41, quality: "excellent" },
    { name: "pitta bread", count: 7, quality: "excellent" },
  ],
  fish: [
    { name: "anchovy", count: 23, quality: "excellent" },
    { name: "cod", count: 20, quality: "excellent" },
    { name: "pilchard", count: 41, quality: "excellent" },
    { name: "plaice", count: 7, quality: "excellent" },
  ],
};
const buttons = document.querySelectorAll(".btn");
const myOrdersButton = document.createElement("button");
myOrdersButton.textContent = "Мої замовлення";
priceInfo.appendChild(myOrdersButton);
let myOrdersClicked = false; 
function handleDeleteButtonClick(event) {
  const productCard = event.target.closest(".product-card");
  if (productCard) {
    productCard.remove();
  }
}
function saveMyOrders() {
  localStorage.setItem("myOrdersContent", priceInfo.innerHTML);
}
function restoreMyOrders() {
  const storedOrdersContent = localStorage.getItem("myOrdersContent");
  if (storedOrdersContent) {
    priceInfo.innerHTML = storedOrdersContent;
    myOrdersClicked = true;
  }
}
function handleMyOrdersButtonClick() {
  if (!myOrdersClicked) {
    product.style.display = "none";
    list.innerHTML = "";
    myOrdersClicked = true;
  } else {
    product.style.display = "block";
    myOrdersClicked = false;
  }
}
myOrdersButton.addEventListener("click", handleMyOrdersButtonClick);
function saveMyOrders() {
  localStorage.setItem("myOrdersContent", priceInfo.innerHTML);
}
window.addEventListener("beforeunload", saveMyOrders);
window.addEventListener("DOMContentLoaded", restoreMyOrders);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.dataId;
    const productList = data[productId];
    const productNames = productList.map((product) => product.name);
    list.textContent = "";
    productNames.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      list.appendChild(li);
      const buyButton = document.createElement("button");
      buyButton.textContent = "Купити";
      buyButton.addEventListener("click", () => {
        const productInfo = productList.find(
          (product) => product.name === name
        );
        list.textContent = "";
        priceInfo.textContent = "";
        product.textContent = "";
        const cover = document.querySelector(".cover");
        cover.style.display = "block";
      });
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <h2>${name}</h2>
        <p>count: ${
          productList.find((product) => product.name === name).count
        }</p>
        <p>quality: ${
          productList.find((product) => product.name === name).quality
        }</p>`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Видалити";
      deleteButton.addEventListener("click", handleDeleteButtonClick);
      card.appendChild(deleteButton);
      card.appendChild(buyButton);
      li.addEventListener("click", () => {
        const existingCard = priceInfo.querySelector(".product-card");
        if (existingCard) {
          existingCard.remove();
        }
        priceInfo.appendChild(card);
      });
    });
  });
});
function handleMyOrdersButtonClick() {
  if (!myOrdersClicked) {
    product.style.display = "none";
    list.innerHTML = "";
    myOrdersClicked = true;
  } else {
    product.style.display = "block";
    myOrdersClicked = false;
  }
}
myOrdersButton.addEventListener("click", handleMyOrdersButtonClick);
function updateValue(value) {
  document.getElementById("i1").value = value;
}
function updateRange(value) {
  document.getElementById("r1").value = value;
}
function isValidPhoneNumber(phone) {
  const regex = /^\+?3?8?(0\d{9})$/;
  return regex.test(phone);
}
function isValidName(name) {
  const regex = /^[А-ЩЬЮЯІЇЄҐ][а-щьюяіїєґ']+(\s[А-ЩЬЮЯІЇЄҐ][а-щьюяіїєґ']+){2}$/;
  return regex.test(name);
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".error-message");
  errorMessage.textContent = message;
}
function validateInputs() {
  let isValid = true;
  if (!isValidName(nameInput.value)) {
    showError(
      nameInput,
      "Будь ласка, введіть коректне прізвище, ім'я та по батькові українською мовою"
    );
    isValid = false;
  } else {
    showError(nameInput, "");
  }
  if (!isValidPhoneNumber(phoneInput.value)) {
    showError(
      phoneInput,
      "Будь ласка, введіть коректний мобільний номер у форматі +380XXXXXXXXX або 0XXXXXXXXX"
    );
    isValid = false;
  } else {
    showError(phoneInput, "");
  }
  if (!isValidEmail(emailInput.value)) {
    showError(
      emailInput,
      "Будь ласка, введіть коректну електрону адресу у форматі name@mail.com"
    );
    isValid = false;
  } else {
    showError(emailInput, "");
  }
  return isValid;
}
const form = document.getElementById("form");
const nameInput = document.getElementById("formName");
const emailInput = document.getElementById("formEmail");
const phoneInput = document.getElementById("formPhone");
const cashInput = form.querySelector("#formCashPayment");
const bankInput = form.querySelector("#formBankPayment");
const messageInput = document.getElementById("formMessage");
const cityInput = document.getElementsByName("city")[0];
const branchInput = document.getElementsByName("branch")[0];
const quantityInput = document.getElementById("r1");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateInputs()) {
    return;
  }
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const messageValue = messageInput.value;
  const cityValue = cityInput.options[cityInput.selectedIndex].text;
  const branchValue = branchInput.options[branchInput.selectedIndex].text;
  const quantityValue = quantityInput.value;
  const paymentMethod = cashInput.checked
    ? "Готівковий розрахунок"
    : "Безготівковий розрахунок";

  const output = document.getElementById("output");
  output.innerHTML = `
    <p><strong>Інформація по замовленню:</strong></p>
    <p><strong>ПІБ:</strong> ${nameValue}</p>
    <p><strong>Email:</strong> ${emailValue}</p>
    <p><strong>Мобільний телефон:</strong> ${phoneValue}</p>
    <p><strong>Вибраний спосіб розрахунку:</strong> ${paymentMethod}</p>
    <p><strong>Коментар:</strong> ${messageValue}</p>
    <p><strong>Місто:</strong> ${cityValue}</p>
    <p><strong>Відділення Нової пошти:</strong> ${branchValue}</p>
    <p><strong>Кількість продукції:</strong> ${quantityValue}</p>
    <button id="closeButton">Закрити</button>
  `;
  const form = document.getElementById("form");
  form.style.display = "none";
  const closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", () => {
    output.style.display = "none";
    const product = document.querySelector(".product");
    const cover = document.querySelector(".cover");
    product.innerHTML = ul;
    cover.style.display = "none";
  });
});
