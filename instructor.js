var data = require("./products.json")

var itemsResult = 0
var inventoriesResult = 0;
var imageResult = 0;
var canonResult = 0;
var ebayResult = 0;
var shortResults = [];
for (var i = 0; i < data.items.length; ++i) {
	var item = data.items[i];
		if (item.kind === "shopping#product") {
			itemsResult++;
		}
		// check inventories
		if (item.product.inventories[0].availability === "backorder") {
			inventoriesResult++;
		}
		if (item.product.images.length > 1) {
			imageResult++;
		}
		var isCanon = item.product.brand.toLowerCase() === "canon"
		if (isCanon) {
			canonResult++;
		}
		if (item.product.author.name.toLowerCase().indexOf("ebay") != -1 && isCanon) {
			ebayResult++;
		}

		var readableResult = "Product brand: " + item.product.brand;
		readableResult += "\nPrice: " + item.product.inventories[0].price;
		readableResult += "\nImage link: " + item.product.images[0].link;
		shortResults.push(readableResult); 
	}

console.log("shopping#product count: " + itemsResult);
console.log("Products on backorder: " + inventoriesResult);
console.log("Items with multiple images: " + imageResult);
console.log("Canon items: " + canonResult);
console.log("eBay and Canon items: " + ebayResult);
console.log("----")
console.log("All items:\n")
console.log(shortResults.join("\n-------------------------------\n"));
