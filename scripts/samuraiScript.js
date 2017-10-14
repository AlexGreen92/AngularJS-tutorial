var samuraiObj = angular.module("myModule",[])
.controller("controller1",function($scope){
	var employees = [ 
						{name:'Ben', gender : 'Male', salary : 57.777, city : 'London'},
						{name:'Sara', gender : 'Female', salary : 67.777, city : 'Chennai'},
						{name:'Mark', gender : 'Male', salary : 77.777, city : 'London'},
						{name:'Pam', gender : 'Female', salary : 47.777, city : 'Chennai'},
						{name:'Todd', gender : 'Male', salary : 78.777, city : 'London'},
					];
		$scope.employees = employees;
});