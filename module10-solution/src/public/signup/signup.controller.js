(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$http', 'SignupService'];
    function SignupController($http, SignupService) {
        var $ctrl = this;
        $ctrl.completed = false;
        $ctrl.isValid = true;

        $ctrl.submit = function () {
            $ctrl.validateSelectedItem($ctrl.selectedItem.short_name)
                .then(function (item) {
                    if (item) {
                        $ctrl.selectedItem = item;

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
                    }
                });

        };

        $ctrl.validateSelectedItem = function (itemName) {
            $ctrl.parameters = $ctrl.parseInput(itemName);
            $ctrl.selectedCategory = $ctrl.parameters.category;

            console.log($ctrl.parameters);

            return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + $ctrl.selectedCategory + '/menu_items/' + $ctrl.parameters.index + '.json')
                .then(function (response) {
                    if (response.data != null) {
                        $ctrl.isValid = true;
                    } else {
                        $ctrl.isValid = false;
                    }
                    return response.data;
                });
        };

        $ctrl.parseInput = function parseMenuNumber(input) {
            console.log(input);
            if (typeof input !== 'string' || input.trim() === '') {
                console.warn('Input is invalid:', input);
                return false;
            }

            var match = input.match(/^([a-zA-Z]{1,2})(\d{1,2})$/);

            if (match) {
                return {
                    category: match[1].toUpperCase(),
                    index: parseInt(match[2], 10) - 1
                };
            } else {
                return null;
            }
        }


    }
})();
