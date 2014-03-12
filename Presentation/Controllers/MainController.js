/// <reference path="../Models/TaskItemModel.js" />

ultimateToDoApp.controller('mainController', function MainCtrl($scope, TasksService) {
    $scope.urgentImportant = TasksService.GetTasks(1);
    $scope.urgentNotImportant = [];
    $scope.notUrgentImportant = TasksService.GetTasks(3);
    $scope.notUrgentNotImportant = [];

});



