(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      empty: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.empty = false;
  narrow.found = undefined;

  narrow.narrowMe = function() {
    narrow.found = [];
    if (narrow.searchTerm == undefined || narrow.searchTerm.length == 0) {
      narrow.empty = true;
    } else {
      MenuSearchService.getMatchedMenuItems(narrow.searchTerm).then(function(result){
        if (result.length == 0) {
          narrow.empty = true;
        } else {
          narrow.empty = false;
          narrow.found = result;
        }
      });
    };
  };


  narrow.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  var foundItems = [];

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (result) {
      foundItems = [];
      for (var j = 0; j < result.data.menu_items.length; j++){
				    if (result.data.menu_items[j].description.toLowerCase().indexOf(searchTerm) !== -1) {
				    	foundItems.push( {name : result.data.menu_items[j].name, short_name : result.data.menu_items[j].short_name, description : result.data.menu_items[j].description})
				    }
			    }
      return foundItems;
    });
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
    return foundItems;
  };


}

})();
