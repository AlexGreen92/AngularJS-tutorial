var samuraiObj = angular
.module("myModule",[])
.controller("controller1",function($scope){
	var employees = [ 
						{name:'Ben', gender : 1, salary : 57.777, city : 'London'},
						{name:'Sara', gender : 2, salary : 67.777, city : 'Chennai'},
						{name:'Mark', gender : 1, salary : 77.777, city : 'London'},
						{name:'Pam', gender : 2, salary : 47.777, city : 'Chennai'},
						{name:'Todd', gender : 3, salary : 78.777, city : 'London'},
					];
		$scope.employees = employees;
});