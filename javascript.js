angular.module('portalApp')
.controller('insuranceCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.daytext=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15',
                    '16','17','18','19','20','21','22','23','24','25','26',
                    '27','28','29','30','31'];
	$scope.monthtext=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
    $scope.yeartext=['2018','2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029'];
	$scope.items = [
		{
			title:'Student Coverage Card',
			tags: []

		},
		{
			title:'Benefits',
			tags: []
        },
		{
			title:'Appointment',
			tags: [],
			details: 'Donec id quam eu odio feugiat sagittis. Duis a tempus neque. Praesent elementum quis ante quis commodo. Sed tincidunt aliquet dolor sit amet laoreet. '
		},
		{
			title:'Health History',
			tags: []
		}
	];
	
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('ohipMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template\
		console.log("**********", item);
		if(item.title=='Appointment'){
        	$scope.portalHelpers.showView('appointmentView.html', 1);
        } else if(item.title == 'Student Coverage Card') {
        	$scope.portalHelpers.showView('sccView.html', 1);
        } else if(item.title == 'Benefits') {
        	location.href = 'https://www.uwo.ca/international/iesc/current/health_care_in_canada/uhip/index.html';
        } else if(item.title == 'Health History') {
        	$scope.portalHelpers.showView('HealthHistoryView.html', 1);
        }   
        else{
        		$scope.detailsItem = item;		
				$scope.portalHelpers.showView('ohipDetails.html', 2);
        }
        
	}
}]);