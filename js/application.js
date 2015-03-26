(function (angular) {
    var ttAppModule = angular.module('ttApp',[
        //no dependencies
    ]);

    ttAppModule.controller('MyFirstController', [
        '$scope',
        'GreetedPeopleService',
        function($scope, greetedPeopleService){

            $scope.greeting = "Hello, World!";
            $scope.peopleWeAlreadyGreeted = [];

            $scope.makeFullGreeting = function(){
                window.alert($scope.greeting + " -" + $scope.name);
            };

            $scope.sayHello = function () {
                greetedPeopleService.addGreetedPerson(
                    greetedPeopleService.createGreetedPerson($scope.name)
                );
                $scope.peopleWeAlreadyGreeted = greetedPeopleService.getGreetedPeople();
            };

            $scope.remove = function(person){
                greetedPeopleService.removeGreetedPerson(person);
            };

            $scope.fetchOnlineData = function(){
                greetedPeopleService.fetchOnline().success(function(data) {
                    $scope.peopleWeAlreadyGreeted = data;
                });
            }
        }]);
})(angular);