var app = angular.module('app', ['ngRoute', 'ctrlsModule', 'factorsModule']);

app.config(function($routeProvider){
        $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "MainCtrl",
            resolve: {
                emailPromise: function(emails) {
                    return emails.getEmails();
                },
                sentPromise: function(emails){
                    return emails.getSentEmails();
                }
            }
        })
        
        .when('/emails/:id', {
            controller: "EmailCtrl",
            templateUrl: 'email.html',
            resolve: {
                email: function($route, emails){
                    return emails.get('/emails/', $route.current.params.id);
                }
            }
        })
        
        .when('/reply/:id', {
            templateUrl: 'reply.html',
            controller:'EmailCtrl',
             resolve: {
                email: function($route, emails){
                    return emails.get('/emails/', $route.current.params.id);
                }
            }
        })
        
        .when('/sent', {
            templateUrl: 'sent.html',
            controller:'MainCtrl',
            resolve: {
                sentPromise: function(emails){
                    return emails.getSentEmails();
                }
            }
        })
        
        .when('/sent/:id', {
            controller: "EmailCtrl", 
            templateUrl: 'email-sent.html',
            resolve: {
                email: function($route, emails){
                    return emails.get('/sent/', $route.current.params.id);
                }
            }
        })
        
        .when('/junk', {
            controller:'MainCtrl',
            templateUrl: 'junk.html',
            resolve: {
                emailPromise: function(emails) {
                    return emails.getEmails();
                }
            }
        })
        
        .otherwise('/home');
    });