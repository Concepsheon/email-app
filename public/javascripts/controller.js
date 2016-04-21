var ctrlsModule = angular.module("ctrlsModule", ['factorsModule'])

.controller('MainCtrl', function($scope, emails){
    $scope.emails = emails.emails;
    
    $scope.sentEmails = emails.sentEmails;
})

.controller('EmailCtrl', function($scope, $location, emails, email){
    $scope.email = email;
    
     $scope.send = function(){
        if($scope.body === ""){
            return;
        }
        emails.send({
            subject: $scope.subject,
            to: $scope.email.from,
            body: $scope.body
        });
        $scope.body = '';
        $scope.to = '';
        $scope.subject = '';
        
        $location.path('/home');
    };
    
});
