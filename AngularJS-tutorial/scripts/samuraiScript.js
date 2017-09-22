var samuraiObj = angular.module("myModule",[]).controller("controller1",function($scope){
	var countries = [
						{name:'USA',cities:[{name:'New York'},{name:'Chicago'},{name:'Denver'},{name:'Los Angeles'}]},
						{name:'UK',cities:[{name:'London'},{name:'Manchester'},{name:'Binrmingham'},{name:'Liverpool'}]},
						{name:'Canada',cities:[{name:'Toronto'},{name:'Montreal'},{name:'Vancouver'},{name:'Calgary'}]}
	];
$scope.countries = countries;})

///var employees = [{firstName:"alex",secondName:'green',gender:'male',salary:'55000'},{firstName:"ben", secondName:'hastings',gender:'male',salary:'68000'},{firstName:"sara", secondName:'paul',gender:'female',salary:'57000'},{firstName:"mark", secondName:'holland',gender:'male',salary:'53000'},{firstName:"pam", secondName:'makintosh',gender:'female',salary:'60000'}];