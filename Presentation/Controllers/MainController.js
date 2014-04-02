ultimateToDoApp.controller('mainController', function MainCtrl($scope, TasksService) {
    TasksService.GetTasks(1, function (data, status, headers, config) {
        $scope.urgentImportant = angular.fromJson(data);
    });

    TasksService.GetTasks(2, function (data, status, headers, config) {
        $scope.urgentNotImportant = angular.fromJson(data);
    });

    TasksService.GetTasks(3, function (data, status, headers, config) {
        $scope.notUrgentImportant = angular.fromJson(data);
    });

    TasksService.GetTasks(4, function (data, status, headers, config) {
        $scope.notUrgentNotImportant = angular.fromJson(data);
    });
});
//# sourceMappingURL=MainController.js.map
