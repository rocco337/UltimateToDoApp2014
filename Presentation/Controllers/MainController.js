/// <reference path="../Models/TaskItemModel.js" />

ultimateToDoApp.controller('mainController', function MainCtrl($scope, TasksService) {
    TasksService.GetTasks(1, function (data, status, headers, config) {
        $scope.urgentImportant = angular.fromJson(data);
    });
    $scope.urgentNotImportant = [];

    TasksService.GetTasks(3, function (data, status, headers, config) {
        $scope.notUrgentImportant = angular.fromJson(data);
    });

    $scope.notUrgentNotImportant = [];

});



