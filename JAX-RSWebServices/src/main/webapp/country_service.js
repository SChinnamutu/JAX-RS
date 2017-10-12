App.factory('CountryService',['$http', function($http) {
	var countryResponse = {};
	countryResponse.loadCountryData = function() {
        return $http({
          method: 'get',
          url: 'http://localhost:8082/JAXRSJsonCRUDExample/rest/countries'
        });
    };
	countryResponse.createCountry = function(country) {
        return $http({
          method: 'post',
          data : country,
          url: 'http://localhost:8082/JAXRSJsonCRUDExample/rest/countries/addCountry'
        });
    };
	return countryResponse;
	
}]);

