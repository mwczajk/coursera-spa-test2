(function () {
'use strict';

angular.module('Data')
.component('itemsList', {
  templateUrl: 'src/menuapp/templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
