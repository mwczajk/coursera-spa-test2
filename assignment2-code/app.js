(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.empty = undefined;

  toBuyList.items = ShoppingListCheckOffService.getNotBoughtItems();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
    if (toBuyList.items.length==0) {
      toBuyList.empty="yes";
    }
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
			   {name: "cupboards", quantity: 2}];
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
