'use strict';

function sampleCtrl($http, $scope) {
	$scope.jsonurl = '../response.json'
    //greeting and welcome msg
$http.get($scope.jsonurl).then(function(response) {
	$scope.items = response.data;
	console.log($scope.items)
})
}


app.controller('sampleCtrl', ['$http', '$scope', sampleCtrl])