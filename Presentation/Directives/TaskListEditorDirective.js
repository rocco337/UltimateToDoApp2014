ultimateToDoApp.directive('taskListEditor',function (){
    return {
        restrict: 'AE',
        templateUrl: 'Views/TaskListEditor.html',
        scope: {
            tasks:'='
        },
        controller: ['$scope', function ($scope) {
            $scope.AddTask = function (task) {
                task.Index = $scope.tasks.length;
                $scope.tasks.push(angular.copy(task));
                $scope.task = new TaskItemModel();
                task = new TaskItemModel();
            };

            $scope.DeleteTask = function(task)
            {
                $scope.tasks.splice(task.Index - 1, 1);
            }
        }],

    }
});