function updatePriceRangeLabel() {
    var priceRangeValue = document.getElementById("priceRange").value;
    document.getElementById("priceRangeLabel").textContent = priceRangeValue + "$";
    applyPriceFilter();
}


function filterProductsByPrice() {
    var maxPrice = parseFloat(document.getElementById("priceRange").value);
    var filteredProducts = products.filter(product => product.price <= maxPrice);
    populateListProductChoices('dietSelect', 'displayProduct', filteredProducts);
}


function openInfo(evt, tabName) {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

    s2.innerHTML = "";

    var optionArray = restrictListProducts(products, s1.value);

    var gridContainer = document.createElement("div");
    gridContainer.className = "product-grid";

    for (i = 0; i < optionArray.length; i++) {
        var productName = optionArray[i];
        var product = products.find((item) => item.name === productName);

        var gridItem = document.createElement("div");
        gridItem.className = "product-item";

        var productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = productName;
        gridItem.appendChild(productImage);

        var infoContainer = document.createElement("div");
        infoContainer.className = "info-container";

        var label = document.createElement("label");
        label.innerHTML = `<strong>${productName}</strong>`;

        var price = document.createElement("p");
        price.innerHTML = `$${product.price.toFixed(2)}`;

        infoContainer.appendChild(label);
        infoContainer.appendChild(price);

        gridItem.appendChild(infoContainer);

        var addButton = document.createElement("button");
        addButton.type = "button";
        addButton.innerHTML = "Add to Cart";
        addButton.addEventListener("click", (function (name) {
            return function () {
                addToCart(name);
            };
        })(productName));

        gridItem.appendChild(addButton);
        gridContainer.appendChild(gridItem);
    }

    s2.appendChild(gridContainer);
}

var cart = [];

function addToCart(productName) {
    var existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
        console.log(`Added 1 more ${productName} to cart. Total quantity: ${existingProduct.quantity}`);
    } else {
        cart.push({ name: productName, quantity: 1 });
        console.log(`${productName} added to cart. Quantity: 1`);
    }
    updateCartDisplay();
    updateProductBoxes();
}


function removeFromCart(productName) {
    var existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity -= 1;

        if (cart[existingProductIndex].quantity === 0) {
            cart.splice(existingProductIndex, 1);
            console.log(`${productName} removed from cart.`);
        } else {
            console.log(`Removed 1 ${productName} from cart. Total quantity: ${cart[existingProductIndex].quantity}`);
        }
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    var cartDisplay = document.getElementById('displayCart');
    var totalPriceDisplay = document.getElementById('totalPriceDisplay');
    cartDisplay.innerHTML = "";

    if (cart.length > 0) {
        var para = document.createElement("p");

        for (var i = 0; i < cart.length; i++) {
            var productContainer = document.createElement("div");

            var removeButton = document.createElement("button");
            removeButton.type = "button";
            removeButton.id = "removeButton";
            removeButton.innerHTML = "X";
            removeButton.addEventListener("click", (function (name) {
                return function () {
                    removeFromCart(name);
                };
            })(cart[i].name));

            productContainer.appendChild(removeButton);

            var cartItemText = cart[i].quantity > 1 ? `${cart[i].name} ${cart[i].quantity}x` : cart[i].name;
            productContainer.appendChild(document.createTextNode(cartItemText));

            para.appendChild(productContainer);
            para.appendChild(document.createElement("br"));
        }

        cartDisplay.appendChild(para);
        totalPriceDisplay.textContent = "$" + getTotalPrice(cart).toFixed(2);
    } else {
        cartDisplay.innerHTML = "Your cart is empty.";
        totalPriceDisplay.textContent = "";
    }
}

function getTotalPrice(cart) {
    return cart.reduce((total, item) => {
        var product = products.find((product) => product.name === item.name);
        return total + product.price * item.quantity;
    }, 0);
}

function sortProducts(sortBy) {
    var maxPrice = parseFloat(document.getElementById("priceRange").value);

    if (sortBy === "price") {
        products.sort((a, b) => a.price - b.price);
        products = products.filter(product => product.price <= maxPrice);
    } else if (sortBy === "name") {
        products.sort((a, b) => a.name.localeCompare(b.name));
    }

    populateListProductChoices('dietSelect', 'displayProduct');
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

