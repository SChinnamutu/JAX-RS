'use strict';

angular.module('CountryManagement').factory('CountryService', ['$http', '$q', function($http, $q){

   /* var REST_SERVICE_URI = 'http://localhost:8082/JAXRSJsonCRUDExample/rest/countries';*/

    var factory = {
    	_refreshCountryData: _refreshCountryData,
        /*createUser: createUser,
        updateUser:updateUser,
        deleteUser:deleteUser*/
    };

    return factory;

    function _refreshCountryData() {
        var deferred = $q.defer();
        $http.get('http://localhost:8082/JAXRSJsonCRUDExample/rest/countries')
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Users');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

/*    function createUser(user) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateUser(user, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
*/
    
}]);
