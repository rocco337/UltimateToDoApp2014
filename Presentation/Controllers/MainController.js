var UltimateToDoApp;
(function (UltimateToDoApp) {
    'use strict';

    var mainController = (function () {
        function mainController($scope, tasksService, boardSerivce) {
            this.$scope = $scope;
            this.tasksService = tasksService;
            this.boardSerivce = boardSerivce;
            boardSerivce.GetBoards(function (data, status, headers, config) {
                $scope.boards = angular.fromJson(data);
            });

            tasksService.GetTasks(1, function (data, status, headers, config) {
                $scope.urgentImportant = angular.fromJson(data);
            });

            tasksService.GetTasks(2, function (data, status, headers, config) {
                $scope.notUrgentImportant = angular.fromJson(data);
            });

            tasksService.GetTasks(3, function (data, status, headers, config) {
                $scope.urgentNotImportant = angular.fromJson(data);
            });

            tasksService.GetTasks(4, function (data, status, headers, config) {
                $scope.notUrgentNotImportant = angular.fromJson(data);
            });
        }
        mainController.$inject = [
            '$scope',
            'tasksService'
        ];
        return mainController;
    })();
    UltimateToDoApp.mainController = mainController;
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=MainController.js.map
