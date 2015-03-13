(function (angular) {
    var ttAppModule = angular.module('ttApp',[
        //no dependencies
    ]);

    ttAppModule.controller('MyFirstController', ['$scope', function($scope){

        $scope.peopleWeAlreadyGreeted = [];
        $scope.lastAssignedId = 0;
        $scope.greeting = "Hello, World!";


        $scope.makeFullGreeting = function(){
            window.alert($scope.greeting + " -" + $scope.name);
        };

        $scope.sayHello = function () {
            var newId = ($scope.lastAssignedId + 1);
            var person = {
                name: $scope.name,
                id: newId
            };
            $scope.peopleWeAlreadyGreeted.push(person);

            $scope.lastAssignedId = newId;
        }

        $scope.remove = function(person){
            var index = $scope.peopleWeAlreadyGreeted.indexOf(person);
            if(index !== -1){
                $scope.peopleWeAlreadyGreeted.splice(index, 1);
            }
        }
    }]);
})(angular);