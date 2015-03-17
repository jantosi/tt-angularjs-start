(function (angular) {
    var ttAppModule = angular.module('ttApp');
    ttAppModule.service('GreetedPeopleService', function(){
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

        return {
            getGreetedPeople: getGreetedPeople,
            addGreetedPerson: addGreetedPerson,
            removeGreetedPerson: remove,
            createGreetedPerson: createPerson
        };
    });

})(angular);

