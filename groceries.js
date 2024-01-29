	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
	  name: "Broccoli",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 1.99
	},
	{
	  name: "Bread",
	  vegetarian: true,
	  glutenFree: false,
	  organic: false,
	  price: 2.35
	},
	{
	  name: "Salmon",
	  vegetarian: false,
	  glutenFree: true,
	  organic: true,
	  price: 10.00
	},
	{
	  name: "Tomatoes",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 3.50
	},
	{
	  name: "Chicken",
	  vegetarian: false,
	  glutenFree: true,
	  organic: false,
	  price: 8.50
	},
	{
	  name: "Quinoa",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 5.99
	},
	{
	  name: "Milk",
	  vegetarian: false,
	  glutenFree: true,
	  organic: false,
	  price: 2.99
	},
	{
	  name: "Apples",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 1.50
	},
	{
	  name: "Eggs",
	  vegetarian: false,
	  glutenFree: true,
	  organic: false,
	  price: 4.50
	},
	{
	  name: "Spinach",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 2.75
	},
	// Additional products to meet the requirement
	{
	  name: "Pasta",
	  vegetarian: true,
	  glutenFree: false,
	  organic: false,
	  price: 3.25
	},
	{
	  name: "Bananas",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 1.75
	},
	{
	  name: "Beef",
	  vegetarian: false,
	  glutenFree: true,
	  organic: false,
	  price: 12.99
	},
	{
	  name: "Potatoes",
	  vegetarian: true,
	  glutenFree: true,
	  organic: false,
	  price: 2.25
	},
	{
	  name: "Orange Juice",
	  vegetarian: true,
	  glutenFree: true,
	  organic: true,
	  price: 4.99
	},
  ];
  
products.sort((a, b) => a.price - b.price);  
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}


