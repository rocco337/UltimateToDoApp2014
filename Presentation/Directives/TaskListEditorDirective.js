ultimateToDoApp.directive('taskListEditor', function (TasksService) {
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

                    TasksService.InsertNewTask(task, function (data, status, headers, config) {
                        //do something
                    });

                    $scope.task = new TaskItemModel();
                    task = new TaskItemModel();
                };

                $scope.DeleteTask = function (index) {
                    var task = $scope.tasks.splice(index, 1)[0];
                    TasksService.DeleteTask(task, function (data, status, headers, config) {
                        //do something
                    });
                };
            }]
    };
});
//# sourceMappingURL=TaskListEditorDirective.js.map
