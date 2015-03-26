(function (angular) {
    var ttAppModule = angular.module('ttApp');
    ttAppModule.service('GreetedPeopleService', ['$http', function($http){
        var peopleWeAlreadyGreeted = [];
        var lastAssignedId = 0;

        function getGreetedPeople(){
            return peopleWeAlreadyGreeted;
        }

        function addGreetedPerson(person){
            peopleWeAlreadyGreeted.push(person);
        }

        function remove(person){
            var index = peopleWeAlreadyGreeted.indexOf(person);
            if(index !== -1){
                peopleWeAlreadyGreeted.splice(index, 1);
            }
        }

        function createPerson(name){
            var newId = lastAssignedId + 1;

            var person = {
                name: name,
                id: newId
            };

            lastAssignedId++;
            return person;
        }

        var address = "http://private-63a58-ttangularjsstart.apiary-mock.com";
        function fetchOnline(){
            return $http.get(address+'/people').success(function(data){
                peopleWeAlreadyGreeted = data;
            });
        }

        return {
            getGreetedPeople: getGreetedPeople,
            addGreetedPerson: addGreetedPerson,
            removeGreetedPerson: remove,
            createGreetedPerson: createPerson,
            fetchOnline: fetchOnline
        };
    }]);

})(angular);

