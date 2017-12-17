(function() {
  'use strict';

  angular.module('Data')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['items'];
  function MenuItemsController(items) {
    var item = this;
    item.menuItems = items.data.menu_items;
    item.name = items.data.category.name;
  };

})();
