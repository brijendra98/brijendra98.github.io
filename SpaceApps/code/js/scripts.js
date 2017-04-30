// Global Scripts
"use strict";
// I've also tried this with "use strict"; removed


var includeFiles = angular.module('includeFiles', [])
  .controller('HeaderCtrl', HeaderCtrl)
  .controller('FooterCtrl', FooterCtrl)
  .controller('SearchCtrl', SearchCtrl);

function HeaderCtrl($scope) {
    $scope.header = {name: "includes/header.html", url: "includes/header.html"};
}

function FooterCtrl($scope, $http) {
    $scope.header = {name: "includes/footer.html", url: "includes/footer.html"};
}

function SearchCtrl($scope, $http) {
	$scope.input = 'test';

	$scope.test = function() {
		console.log(`Input is ${$scope.input}`);
	}
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var AllData=httpGet(`http://ec2-54-69-73-17.us-west-2.compute.amazonaws.com:8000/notes`);

    var input = document.getElementById("defineTerm");

    // Show label but insert value into the input:
    new Awesomplete(input, {
    	list: AllData
    });
