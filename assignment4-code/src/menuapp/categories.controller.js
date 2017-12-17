(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  this.items = items.data;
};

})();
