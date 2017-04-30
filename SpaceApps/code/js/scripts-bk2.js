// Global Scripts

// I've also tried this with "use strict"; removed

// var AllData = ;

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
	};
	
    $scope.resultList = [
  {
    "_id": "59050de803ea2a2761eeda2c",
    "key": "Earth Science",
    "val": "Any of various sciences, as geography, geology, or meteorology, that deal with the earth, its composition, or any of its changing aspects.",
    "likes": 0,
    "dislikes": 0,
    "cont": "Dictionary.com",
    "cat": "Studies",
    "status": 1
  },
  {
    "_id": "59050e1e03ea2a2761eeda2d",
    "key": "Volcano",
    "val": "A volcano is a rupture in the crust of a planetary-mass object, such as Earth, that allows hot lava, volcanic ash, and gases to escape from a magma chamber below the surface.",
    "likes": 0,
    "dislikes": 0,
    "cont": "Wikipedia",
    "cat": "Natural Features",
    "status": 1
  },
  {
    "_id": "59050e3b03ea2a2761eeda2e",
    "key": "River",
    "val": "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
    "likes": 0,
    "dislikes": 0,
    "cont": "Wikipedia",
    "cat": "Natural Features",
    "status": 1
  },
  {
    "_id": "59050e8903ea2a2761eeda2f",
    "key": "Stratosphere",
    "val": "The layer of the earth's atmosphere above the troposphere, extending to about 32 miles (50 km) above the earth's surface (the lower boundary of the mesosphere).",
    "likes": 0,
    "dislikes": 0,
    "cont": "Basim",
    "cat": "Atmosphere",
    "status": 1
  },
  {
    "_id": "59050ecf03ea2a2761eeda30",
    "key": "Magma",
    "val": "Hot fluid or semifluid material below or within the earth's crust from which lava and other igneous rock is formed by cooling.",
    "likes": 0,
    "dislikes": 0,
    "cont": "James",
    "cat": "Earth's Core",
    "status": 1
  },
  {
    "_id": "59050f3303ea2a2761eeda31",
    "key": "Iceberg",
    "val": "A large floating mass of ice detached from a glacier or ice sheet and carried out to sea.",
    "likes": 0,
    "dislikes": 0,
    "cont": "Brijendra",
    "cat": "Oceans",
    "status": 1
  },
  {
    "_id": "59050f7e03ea2a2761eeda32",
    "key": "Sky",
    "val": "The region of the atmosphere and outer space seen from the earth.",
    "likes": 0,
    "dislikes": 0,
    "cont": "Skywatch",
    "cat": "Sky",
    "status": 1
  },
  {
    "_id": "590525dc5f8c6e2802797df3",
    "key": "Lake Ontario",
    "val": "One of the five Great Lakes of North America. It is surrounded on the north, west, and southwest by the Canadian province of Ontario, and on the south and east by the American state of New York, whose water boundaries meet in the middle of the lake. Ontario, Canada's most populous province, was named for the lake.",
    "likes": 0,
    "dislikes": 0,
    "cont": "Julie",
    "cat": "Water Bodies",
    "status": 1
  }
];
}

/*    function httpGet(theUrl)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        console.log(xmlHttp.responseText);
        return xmlHttp.responseText;
    }

    $http.get(`http://ec2-54-69-73-17.us-west-2.compute.amazonaws.com:8000/notes/${input}`)
   .then(function(response) {
      console.log('hi');
    })
}*/
