(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
        $scope.style = ""

        $scope.checkLunch = function () {
            var userInput = $scope.lunchMenu.split(",").filter(function (dish) {
                return dish.trim() !== "";
            });

            if (userInput == 0) {
                $scope.message = "Please enter data first";
                $scope.style = "empty";
            }
            else if (userInput.length > 3) {
                $scope.message = "Too much!";
                $scope.style = "filled";
            } else {
                $scope.message = "Just right!";
                $scope.style = "filled";
            }
        };
    };

})();