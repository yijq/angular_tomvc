(function (window) {
	'use strict'

	// Your starting point. Enjoy the ride!
	var app = angular.module("myApp",[]);

	app.controller("appController",["$scope",function($scope){
		$scope.todos = [
			{id:1,name:"吃饭",completed:false},
			{id:2,name:"吃饭",completed:false},
			{id:3,name:"睡觉",completed:false},
			{id:4,name:"吃饭",completed:false},
			{id:5,name:"吃饭",completed:true},
		]

		$scope.newtodo = ""
		$scope.add = function () {
			if($scope.newtodo.trim === "") {
				return
			}

			$scope.todos.push({
				id:Math.random(),
				name:$scope.newtodo,
				completed:false,
			})

			$scope.newtodo = ""
		}

		$scope.remove = function(todoid){
			for(let i = $scope.todos.length-1; i >= 0; i--){
 				if($scope.todos[i].id==todoid){
 					$scope.todos.splice(i,1);
 				}
			}
		}

		$scope.isEditingId = -1
		$scope.edit = function(todoid){
			$scope.isEditingId = todoid
		}
		$scope.save = function(){
			$scope.isEditingId = -1;
		}

		$scope.selectAll = false;

		$scope.toggleAll = function () {
			for (let i = 0; i < $scope.todos.length-1; i++) {
				$scope.todos[i].completed = $scope.selectAll;
			}
		}

		$scope.getActive = function () {
			var count = 0
		      // 遍历$scope.todos, 找到所有completed属性值为false的数据
		    for (let i = 0; i < $scope.todos.length; i++) {
		        var item = $scope.todos[i]
		        if(!item.completed){
		          count++
		        }
		     }
		     return count
		}

		$scope.clearAll = function () {
			for (let i = $scope.todos.length-1;i>=0;i--) {
				if($scope.todos[i].completed){
					$scope.todos.splice(i,1);
				}
			}
		};
	}])

})(window)
