(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: '../module8-solution/foundItems.html',
            scope: {
                found: '<',
                onRemove: '&'
            }
        };
        return ddo;
    };

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.searchTerm = "";

        menu.logMenuItems = function () {
            var promise = MenuSearchService.getMenuItems();

            promise.then(function (response) {
                menu.categories = response.data;
            })
                .catch(function (error) {
                    console.log(error);
                })
        };

        menu.logMatchedItems = function () {
            var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(function (response) {
                menu.found = response;

            })
                .catch(function (error) {
                    console.log(error);
                })
        };

        menu.removeItem = function (category, itemIndex) {
            MenuSearchService.removeItem(category, itemIndex);
        };

    };


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        var foundItems = {};

        service.getMenuItems = function () {
            var response = $http({
                method: "GET",
                url: (ApiBasePath)
            });
            return response;
        };

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function (result) {

                var allItems = result.data;
                foundItems = {};

                // process result and only keep items that match
                if (searchTerm) {

                    for (var index in allItems) {
                        if (allItems.hasOwnProperty(index)) {
                            var category = allItems[index];
                            foundItems[index] = category;
                            var match = category.menu_items.filter(function (item) {
                                return (item.description.toLowerCase().includes(searchTerm.toLowerCase()) || item.name.toLowerCase().includes(searchTerm.toLowerCase()));
                            });

                            foundItems[index].menu_items = match;
                        }
                    }
                } else {
                    foundItems = allItems;
                }

                // return processed items
                return foundItems;
            });
        };

        service.removeItem = function (category, itemIndex) {
            category.menu_items.splice(itemIndex, 1);
        };
    }
})();
