var UltimateToDoApp;
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
                        task.Category = $scope.category;
                        task.Created = new Date();
                        task.BoardId = $scope.$parent.activeBoard;
                        task.Index = $scope.tasks.length > 0 ? $scope.tasks.length - 1 : 0;

                        if (!$scope.tasks)
                            $scope.tasks = [];

                        $scope.tasks.push(task);

                        tasksService.InsertNewTask(task, function (data, status, headers, config) {
                            //do something
                        });

                        $scope.task = new UltimateToDoApp.TaskItemModel();
                        //task = new TaskItemModel();
                    };

                    $scope.UpdateTask = function (task) {
                        tasksService.InsertNewTask(task, function (data, status, headers, config) {
                            //do something
                        });
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
