module UltimateToDoApp {
    'use strict';

    export class mainController
    {
        public static $inject = [
            '$scope',
            'tasksService',
        ];

        constructor(
            private $scope: IUltimateToDoAppScope,
            private tasksService: ITasksService,
            private boardSerivce : IBoardService
            ) {

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

    }
}