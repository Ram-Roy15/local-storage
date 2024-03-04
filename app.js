// add item field
const addItems = () => {
  const products = getInputValue("products-field");
  const quantity = getInputValue("quantity-field");
  products.value = " ";
  quantity.value = " ";
  //   console.log(products, quantity);
  showInUi(products, quantity);
  saveProductsStorage(products, quantity);
};

// showInUi
const showInUi = (products, quantity) => {
  const showField = getId("products-container");
  const li = document.createElement("li");
  li.innerText = `${products}: ${quantity}`;
  showField.appendChild(li);
};

// get from local storage
const getstoredItems = () => {
  const storedItems = localStorage.getItem("items");
  let items = {};
  if (storedItems) {
    items = JSON.parse(storedItems);
  }
  return items;
};

// save product local storage
const saveProductsStorage = (products, quantity) => {
  const items = getstoredItems();
  items[products] = quantity;
  //   console.log(items);
  const itemsSringified = JSON.stringify(items);
  //   console.log(itemsSringified);
  localStorage.setItem("items", itemsSringified);
};

const showlocalStorageItems = () => {
  const savedItems = getstoredItems();
  console.log(savedItems);
  for (const item in savedItems) {
    const quantity = savedItems[item];
    console.log(item, quantity);
    showInUi(item, quantity);
  }
};
showlocalStorageItems();
