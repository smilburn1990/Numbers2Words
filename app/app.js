'use strict';

angular
  .module('numbersToWords', [])
  .controller('transformCtrl', function($scope) {
    $scope.userClick = function(entry) {
      $('#search-bar').val(''); 
      $scope.validateNumbers(parseFloat(entry));
    }
    $scope.validateNumbers = function(num) {
      if (num % 1 !== 0 || num == null) return $scope.words = "enter a valid, whole number"; //if type is number and not a decimal
      if (num === 0) return $scope.words = 'zero'; //return for zero 
      if (num === 1000) return $scope.words = 'one thousand'; //return for one thousand 
      if (num > 1000) return $scope.words = 'number too big'; //return if number too big 
      if (num < 100) num = ('0' + num) //adds zero to start of number to keep it three digits long
      if (num < 10) num = ('0' + num) //adds another zero to start of number to keep it three digits long
      $scope.formatNumbers(num);
    }
    $scope.formatNumbers = function(newNum) {
      let small = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; //array for numbers one to nineteen
      let big = ['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety']; //array for tens from twenty to ninety
      let hun = ('' + newNum)[0] //set hundreds
      let ten = ('' + newNum)[1] //set tens
      let one = ('' + newNum)[2] //set units
      return $scope.words = ([
        Number(hun) === 0 ? '' : small[hun] + ' hundred ', //returns formed hundreds
        Number(one) === 0 ? big[ten] : big[ten] && big[ten] + '-' || '', //returns formed tens and appends hyphen if nessesary
        small[ten + one] || small[one] //returns formed units
      ].join('')) //joins the words
    };
  });
  