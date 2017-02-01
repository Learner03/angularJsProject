var app= angular.module("contactList", []);

app.controller("myCtrl", function($scope){
	$scope.msg= "";
	$scope.search= "";
	$scope.name= "No contact selected";
	$scope.phone= "Select a contact to see its details";
	$scope.show= false;
	$scope.sign= '+';
	$scope.addNew= {name:"", phone:""};
	$scope.names= [
		{name: "Aditi", phone: "12345"}, 
		{name: "Dipti", phone: "12346"}, 
	    {name: "Akansha", phone: "12347"}, 
	    {name: "Kavita", phone: "12348"}, 
	    {name: "Diksha", phone: "12349"}, 
	    {name: "Ayushie", phone: "12300"}, 
	    {name: "Deepali", phone: "12399"}
	];
	$scope.details= function($name, $phone){
		$scope.name= $name;
		$scope.phone= $phone;
	}
	$scope.form= function(){
		$scope.show= !$scope.show;
		if($scope.sign== '+'){
			$scope.sign= '-';
		}
		else{
			$scope.sign= '+';
		}
	}
	$scope.submit= function(){
		var count=0;
		for(var i=0; i<$scope.names.length; i++){
			if(angular.equals($scope.names[i], $scope.addNew)){
			$scope.msg= "Contact already exists";
			$scope.addNew= {name:"", phone:""};
			count++;
			break;
			}
		}
		if(count==0){
			$scope.names.push(angular.copy($scope.addNew));
		}
	}
	$scope.delete= function(x){
		$scope.names.splice($scope.names.indexOf(x),1);
		$scope.name= "No contact selected";
		$scope.phone= "Select a contact to see its details";
	}
});