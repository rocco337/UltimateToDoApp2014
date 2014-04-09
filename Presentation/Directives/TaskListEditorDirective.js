﻿var UltimateToDoApp;
(function (UltimateToDoApp) {
    'use strict';

    function taskListEditor(tasksService) {
        return {
            restrict: 'AE',
            templateUrl: 'Views/TaskListEditor.html',
            scope: {
                tasks: '=',
                category: '='
            },
            controller: [
                '$scope', function ($scope) {
                    $scope.AddTask = function (task) {
                        task.Index = $scope.tasks.length + 1;
                        task.Category = $scope.category;
                        task.Created = new Date();

                        $scope.tasks.push(task);

                        tasksService.InsertNewTask(task, function (data, status, headers, config) {
                            //do something
                        });

                        $scope.task = new UltimateToDoApp.TaskItemModel();
                        task = new UltimateToDoApp.TaskItemModel();
                    };

                    $scope.DeleteTask = function (index) {
                        var task = $scope.tasks.splice(index, 1)[0];
                        tasksService.DeleteTask(task, function (data, status, headers, config) {
                            //do something
                        });
                    };
                }]
        };
    }
    UltimateToDoApp.taskListEditor = taskListEditor;
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=TaskListEditorDirective.js.map
