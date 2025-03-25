(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var to_buy = this;
        to_buy.quantity = "";

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
        var to_buy_items = [{ name: "cookies", quantity: 10, pricePerItem: 3.95 },
        { name: "popcorn", quantity: 5, pricePerItem: 1 },
        { name: "grapes", quantity: 12, pricePerItem: 3.25 },
        { name: "yogurts", quantity: 8, pricePerItem: 2.50 },
        { name: "potatoes", quantity: 15, pricePerItem: .25 }
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