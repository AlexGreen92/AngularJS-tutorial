var samuraiObj = angular
.module("myModule",[])
.controller("controller1",function($scope){
	var countries = [ 
						{name:'USA', cities:[{name:'Los Angeles'},{name:'Chicago'}]},
						{name:'India', cities:[{name:'Hyderabad'},{name:'Chennai'}]},
						
					];
		$scope.countries = countries;
});