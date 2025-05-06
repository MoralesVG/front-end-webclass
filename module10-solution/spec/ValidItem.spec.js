describe('ValidItemChecker', function () {

    var $httpBackend;
    var $controller;
    var $rootScope;
    var SignupController;

    beforeEach(function () {
        module('public');

        inject(function (_$controller_, _$httpBackend_, _$rootScope_, _$http_) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;

            SignupController = $controller('SignupController', {
                $http: _$http_,
                SignupService: {} // mock service if needed
            });
        });
    });


    it('should validate if the menu item exists and is valid', function () {

        var eggRoll = {
            "description": "cabbage and carrots in eggroll wrappers",
            "name": "Vegetable Egg Roll (1)",
            "price_large": 2.25,
            "short_name": "B3"
        };

        $httpBackend.whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/B/menu_items/2.json').respond({ data: eggRoll });

        SignupController.validateSelectedItem("B3").then(function (response) {
            expect(response.data).toEqual(eggRoll);
        });
        $httpBackend.flush();
    });

    it('should invalidate if the menu item does not exist', function () {

        $httpBackend.whenGET('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/C/menu_items/19.json').respond({ data: null });

        SignupController.validateSelectedItem("C20").then(function (response) {
            expect(response.data).toBeNull();
        });
        $httpBackend.flush();


    });

});