CountryController.controller('CountryController', function($scope, CountryService) {
    $scope.countries = [];
   
    
    //Now load the data from server
    loadCountryData();
    
    $scope.loadCountryData = function() {
    	CountryService.loadCountryData().then(
				function successCallback(response) {
		            $scope.countries = response.data;
		        }, function errorCallback(response) {
		            console.log(response.statusText);
		        }
    	    );
    };
    
    $scope.createCountry = function(){
    	CountryService.createCountry($scope.countryForm).then(
				function successCallback(response) {
					$scope.countries = response.data;
		        }, function errorCallback(response) {
		            console.log(response.statusText);
		        }
        	);
    };

    CountryController.$inject = ['$scope','CountryService'];
    App.controller('CountryController', CountryController);
});

//CountryController.controller('CountryController', ['$scope', 'CountryService', function($scope, CountryService) {