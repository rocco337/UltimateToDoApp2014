module UltimateToDoApp
{
    'use strict';
    
    export function taskListEditor(tasksService): ng.IDirective
    {
       return {
            restrict: 'AE',
            templateUrl: 'Views/TaskListEditor.html',
            scope: {
                tasks: '=',
                category: '='
            },
           controller: ['$scope', function ($scope) {
                $scope.AddTask = function (task : TaskItemModel) {                   
                    task.Category = $scope.category;
                    task.Created = new Date();

                    if (!$scope.tasks)
                        $scope.tasks = [];

                    $scope.tasks.push(task);

                    tasksService.InsertNewTask(task, function (data, status, headers, config) {
                        //do something
                    });

                    $scope.task = new TaskItemModel();
                    task = new TaskItemModel();
                };

                $scope.DeleteTask = function (index) {
                    var task = $scope.tasks.splice(index, 1)[0];
                    tasksService.DeleteTask(task, function (data, status, headers, config) {
                        //do something
                    });
                }
        }],

        }
    }
}
