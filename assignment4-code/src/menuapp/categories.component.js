(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
