(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$http', 'SignupService'];
    function SignupController($http, SignupService) {
        var $ctrl = this;
        $ctrl.completed = false;

        $ctrl.submit = function () {
            var user = {
                firstname: $ctrl.firstname,
                lastname: $ctrl.lastname,
                email: $ctrl.email,
                phone: $ctrl.phone,
                selectedCategory: $ctrl.selectedCategory,
                selectedItem: $ctrl.selectedItem
            };

            SignupService.saveUser(user);
            $ctrl.completed = true;
        };

        $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json')
            .then(function (response) {
                $ctrl.fullMenuData = response.data;
                $ctrl.categories = Object.keys(response.data);
            });

        $ctrl.loadItemsForCategory = function () {
            if ($ctrl.selectedCategory && $ctrl.fullMenuData[$ctrl.selectedCategory]) {
                $ctrl.menuItems = $ctrl.fullMenuData[$ctrl.selectedCategory].menu_items;
                $ctrl.selectedItem = null;
            } else {
                $ctrl.menuItems = [];
            }
        };
    }
})();
