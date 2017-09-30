var samuraiObj = angular.module("myModule",[])
.controller("controller1",function($scope){
	var employees = [ 
						{name:'Ben',dateOfBirth : new Date('November 23,1980'), gender : 'Male', salary : 57.777},
						{name:'Sara',dateOfBirth : new Date('May 5,1970'), gender : 'Female', salary : 67.777},
						{name:'Mark',dateOfBirth : new Date('August 15,1975'), gender : 'Male', salary : 77.777},
						{name:'Pam',dateOfBirth : new Date('October 27, 1979'), gender : 'Female', salary : 47.777},
						{name:'Todd',dateOfBirth : new Date('December 30, 1983'), gender : 'Male', salary : 78.777},
					];
		$scope.employees = employees;
		$scope.rowLimit = 5; //ng-model='rowLimit'
		$scope.sortColumn='name';
})

