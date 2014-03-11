/// <reference path="../Models/TaskItemModel.js" />

ultimateToDoApp.controller('mainController', function MainCtrl($scope) {
    $scope.urgentImportant = GetTasks();
    $scope.urgentNotImportant = [];
    $scope.notUrgentImportant = GetTasks();
    $scope.notUrgentNotImportant = [];

});



function GetTasks()
{
    var tasks = [];

    var task = new TaskItemModel();
    task.Index = 1;
    task.Name = "Some cool task";

    tasks.push(task);

    task = new TaskItemModel();
    task.Index = 2;
    task.Name = "Dentist appointment";

    tasks.push(task);

    task = new TaskItemModel();
    task.Index = 3;
    task.Name = "Read new book and make review";

    tasks.push(task);

    return tasks;
}