var data = require("./products.json")

// Write your solutions below
console.log(data["items"]);
console.log(data["title"]);
var items = data.items;
var product = data.title;
/*
1.) The kind of results you're are dealing are shopping#products. Go through the items and find all results that have kind of shopping#product. How many are there? Where else is this count information stored in the search results?
*/
var shopProd = [];
for (var i = 0; i < (data["items"].length); i++){
	if (data["items"][i]["kind"] === 'shopping#product') {
		shopProd.push(i + " is a shopping product.");
	}
}
console.log("---");
console.log(shopProd.length + " items.");
console.log("Check against 'Current Item Count': " + data["currentItemCount"]);
if ((data["currentItemCount"]) === (shopProd.length)) {
	console.log("Check is verfied!")
	if (false) {
		console.log("Check FAILED.");
	}
}
console.log("---")
/*
2.) Find all items with a backorder availability in inventories.
*/
console.log("---");
//var title = items.title
var backOrder = [];
for (var i = 0; i < (data["items"].length); i++) {
	for (var b = 0; b < data["items"][i]["product"]["inventories"].length; b++) {
		if ((data["items"][i]["product"]["inventories"][b]["availability"]) === "backorder") {
		backOrder.push("Item " + [i] + " " + product + " is on backorder");
		}
	}
}
console.log(backOrder);
console.log(backOrder.length + " items on backorder");
console.log("---");
/*
3.) Find all items with more than one image link.
*/
var multImages = [];
for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i]["product"]["images"].length > 1) {
		multImages.push("Item " + i + [" "] + product + " has multiple images.");
	}
}
console.log("---")
console.log(multImages);
console.log(multImages.length + " items with multiple images.");
console.log("---")
/*
4.) Find all canon products in the items (careful with case sensitivity).
*/
var canonItems = [];
for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i]["product"]["brand"] === ("Canon" || "canon")) {
		canonItems.push("Item " + i + [" "] + product + " is a Canon product.");
	}
}
console.log("---");
console.log(canonItems);
console.log(canonItems.length + " Canon products.")
console.log("---");
/*
5.) Find all items that have product author name of "eBay" and are brand "Canon".
*/
var ebayCanon = []
for (var i = 0; i < data["items"].length; i++) {
	if ((data["items"][i]["product"]["author"]["name"].includes("eBay")) && (data["items"][i]["product"]["brand"].includes("Canon" || "canon") === true)) {
		ebayCanon.push("Item " + i + [" "] + product + " is a Canon item on eBay.")
	}
}
console.log("---");
console.log(ebayCanon);
console.log(ebayCanon.length + " ebay listed Canon products.");
console.log("---");
/*
6.) Print all the products with their brand, price, and a image link
*/
var allItems = [];
for (var i = 0; i < data["items"].length; i++) {
	console.log(data['items'][i]['product']['brand']);
 	console.log(data['items'][i]['product']['inventories'][0]['price']);
 	console.log(data['items'][i]['product']['images'][0]['link']);
}
