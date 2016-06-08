/*jslint browser: true*/
/*global console, MyApp, angular, Framework7*/

// Init angular
document.addEventListener('deviceready', function(){alert('i am ready');}, true);
var $$ = Dom7;
$$(document).on('deviceready', function(){alert('i am ready');});
var MyApp = {};

MyApp.config = {
};

MyApp.angular = angular.module('MyApp', []);

MyApp.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};