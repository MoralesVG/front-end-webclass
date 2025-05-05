(function () {
    "use strict";

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['SignupService'];
    function MyinfoController(SignupService) {
        var $ctrl = this;

        $ctrl.user = SignupService.getUser();
    }
})();