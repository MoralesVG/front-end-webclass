(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var to_buy = this;
        to_buy.items = ShoppingListCheckOffService.getToBuy();

        to_buy.bought = function (itemIndex) {
            ShoppingListCheckOffService.bought(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var to_buy_items = [{ name: "cookies", quantity: 10 },
        { name: "popcorn", quantity: 5 },
        { name: "grapes", quantity: 12 },
        { name: "yogurts", quantity: 8 },
        { name: "potatoes", quantity: 15 }
        ];

        var bought_items = [];

        service.getToBuy = function () {
            return to_buy_items;
        };

        service.getBought = function () {
            return bought_items;
        };

        service.bought = function (itemIndex) {
            var item = to_buy_items[itemIndex];
            to_buy_items.splice(itemIndex, 1);
            bought_items.push(item);
        };

    };
})();