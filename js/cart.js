function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart!");
}

function displayCart() {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-items");
let total = 0;

container.innerHTML = "";

cart.forEach((item, index) => {
total += item.price;

```
container.innerHTML += `
  <p>${item.name} - ₹${item.price}
  <button onclick="removeItem(${index})">Remove</button></p>
`;
```

});

document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
let cart = JSON.parse(localStorage.getItem("cart"));
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
displayCart();
}

function checkout() {
window.location.href = "checkout.html";
}

if (window.location.pathname.includes("cart.html")) {
displayCart();
}
