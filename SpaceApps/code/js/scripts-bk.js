// Global Scripts

"use strict";
// I've also tried this with "use strict"; removed

var includeFiles = angular.module('includeFiles', []);

function HeaderCtrl($scope) {
    $scope.header = {name: "includes/header.html", url: "includes/header.html"};
}

function FooterCtrl($scope) {
    $scope.header = {name: "includes/footer.html", url: "includes/footer.html"};
}



