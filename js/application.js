(function (angular) {
    var ttAppModule = angular.module('ttApp',[
        //no dependencies
    ]);

    ttAppModule.controller('MyFirstController', ['$scope', function($scope){
            $scope.greeting = "Hello, World!";

            $scope.makeFullGreeting = function(){
                window.alert($scope.greeting + " -" + $scope.name);
            };
        }]);
})(angular);