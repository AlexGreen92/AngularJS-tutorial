var samuraiObj = angular.module("myModule",[])
						.controller("controller1",function($scope){
	var employee = {
			firstName:"alex", 
			secondName:'green',
			gender:'male'
	}
$scope.employee = employee;})
