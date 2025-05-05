(function () {
    "use strict";

    angular.module('public')
        .service("SignupService", SignupService);

    function SignupService() {
        var service = this;
        var userData = null;

        service.saveUser = function (data) {
            userData = data;

            console.log(userData);
        };

        service.getUser = function () {
            return userData;
        };
    }
})();
