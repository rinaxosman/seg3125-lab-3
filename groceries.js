var products = [
	{
		name: "  Broccoli",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.99,
		image: "styles/broccoli.png"
	},
	{
		name: "  Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35,
		image: "styles/bread.png"
	},
	{
		name: "  Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 10.00,
		image: "styles/salmon.png"
	},
	{
		name: "  Tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50,
		image: "styles/tomatoes.png"
	},
	{
		name: "  Chicken Drumsticks",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 8.50,
		image: "styles/chicken_drumsticks.png"
	},
	{
		name: "  Quinoa",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99,
		image: "styles/quinoa.png"
	},
	{
		name: "  Milk",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 2.99,
		image: "styles/milk.png"
	},
	{
		name: "  Apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.50,
		image: "styles/apples.png"
	},
	{
		name: "  Eggs",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 4.50,
		image: "styles/eggs.png"
	},
	{
		name: "  Spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.75,
		image: "styles/spinach.png"
	},
	{
		name: " Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.25,
		image: "styles/pasta.png"
	},
	{
		name: " Bananas",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 1.75,
		image: "styles/bananas.png"
	},
	{
		name: " Beef",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.99,
		image: "styles/beef.png"
	},
	{
		name: "  Potatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.25,
		image: "styles/potatoes.png"
	},
	{
		name: "  Orange Juice",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99,
		image: "styles/orange_juice.png"
	},
	{
		name: "  Chicken Breasts",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 8.99,
		image: "styles/chicken_breasts.png"
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


