'use strict';

angular.module('yoUrbanChampApp')
  .controller('ParseCtrl', ['$scope','TodosService', function ($scope, TodosService) {

  		var todos = new TodosService.collection;

  		todos.loadRecentTodos().then(function(todos){
  			$scope.todos = todos.models;
  		});

  		$scope.mySort = function(todo){
  			return todo.getTitle();
  		}
  }]);
