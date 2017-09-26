angular.module("myapp").controller('formController', ['$scope', function($scope) {

  this.master = {};

  this.friends = ['thomas', 'eitan', 'issac'];

  this.arrayText = [{
    text: 'Hello',
  }, {
    text: 'world'
  }, ]

  this.addText = function(text) {
    if (text) {
      var obj = {
        text: text
      };
      this.arrayText.push(obj);
      this.myText = '';
    }
  }

  }]);
