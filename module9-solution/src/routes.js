(function () {
    'use strict';

    angular.module('Data')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

        // Category List
        // .state('mainList', {
        //     url: '/main-list',
        //     templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
        //     controller: 'MainShoppingListController as mainList',
        //     resolve: {
        //         items: ['ShoppingListService', function (ShoppingListService) {
        //             return ShoppingListService.getItems();
        //         }]
        //     }
        // })

        // Item detail
        // .state('mainList.itemDetail', {
        //     // url: '/item-detail/{itemId}',
        //     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
        //     controller: 'ItemDetailController as itemDetail',
        //     params: {
        //         itemId: null
        //     }
        // });

    }

})();
