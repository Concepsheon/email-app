var factorsModule = angular.module('factorsModule', [])

.factory('emails', function($http){
    
    var o = {};
    
    o.emails = [];
    
    o.sentEmails = [];
    
    o.getEmails = function(){
        return $http.get('/emails').then(function(res){
            angular.copy(res.data, o.emails);
        },function(res){
            return console.log(res.statusText);
        });
    };
    
    o.getSentEmails = function(){
        return $http.get('/sent').then(function(res){
            return angular.copy(res.data, o.sentEmails);
        });
    };
    
    o.get = function(path, id){
        return $http.get(path + id).then(function(res){
            return res.data;
        });
    };
    
    o.send = function(email){
        return $http.post('/sent', email).then(function(res){
            return o.sentEmails.push(res.data);
        });
    };
    
    
    return o;
})