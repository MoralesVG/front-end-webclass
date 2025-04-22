(function () {
    'use strict';

    angular.module('Data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/");

    MenuDataService.$inject = ['$http', '$q', 'ApiBasePath'];
    function MenuDataService($http, $q, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            var deferred = $q.defer();

            $http({
                method: "GET",
                url: (ApiBasePath + '/categories.json')
            }).then(function (result) {
                deferred.resolve(result.data);
            })

            return deferred.promise;
        };

        service.getItemsForCategory = function (categoryShortName) {
            var deferred = $q.defer();
            $http({
                method: "GET",
                url: (ApiBasePath + '/menu_items/' + categoryShortName + '.json')
            }).then(function (result) {
                deferred.resolve(result.data);
            })
            return deferred.promise;
        };
    }

})();