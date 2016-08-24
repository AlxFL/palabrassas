palabrassasApp.controller ('splash', function ($scope, $timeout, $location){
	
$timeout(function() {
      $location.path('/guia');
      }, 3000);
	
});

palabrassasApp.controller ('guia' , function ($scope, $http){
	
	var msg = 0;
	
	$http.get('js/guia.json')
	.then(function(res){
		$scope.slides = res.data;
	})
	
	var mascara = document.getElementsByClassName("mascara");
	mascara[0].style.display = "none";
	
	$scope.rotar = function (sentido){
		$scope.mostrar(msg += sentido);
	}
	
	$scope.mostrar = function (n){
		
		var i;
		var x = document.getElementsByClassName("slide");
		
		if (n > x.length) {
			msg = 1;
		}
		if (n < 1) {
			msg = x.length;
		}
		for (i = 0; i < x.length; i++) {
			//x[i].style.display = "none";
			x[i].style.opacity = "0";
			x[i].style.transition = "opacity 0.6s linear";
		}
		//x[msg-1].style.display = "block";
		x[msg-1].style.opacity = "1";
		var indicador = "indicador-" + [msg-1];
		var y = document.getElementsByClassName(indicador);
		y[msg-1].style.color = "#FFF";
		
	}
	
});

palabrassasApp.controller ('lecciones' , function ($scope, $firebaseArray){
	
	var ref = new Firebase ('https://palabrassas.firebaseio.com/');
	$scope.lecciones = $firebaseArray (ref);
	console.log($scope.lecciones);
	
	$scope.abrirNav = function() {
		document.getElementById("mySidenav").style.width = "250px";	
		document.getElementById("static").style.marginLeft = "250px";
		
	}
	$scope.cerrarNav = function(){
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("static").style.marginLeft= "0";	
	}

});

palabrassasApp.controller ('vocabulario' , function ($scope){
	
	
	
})