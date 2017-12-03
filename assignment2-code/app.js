(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getNotBoughtItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getBoughtItems();


}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var initialItems = [{name: "cookies", quantity: 10},
               {name: "tapes", quantity: 5},
			   {name: "cupboards", quantity: 2},
         {name: "drinks", quantity: 7},
         {name: "books", quantity:15},
         {name: "trains", quantity: 3}];
  var boughtItems = [];

  service.buyItem = function (index) {
    boughtItems.push(initialItems[index]);
    initialItems.splice(index,1);
  };

  service.getNotBoughtItems = function () {
    return initialItems;
  };

  service.getBoughtItems = function () {
	  return boughtItems;
  };
}

}) ();
