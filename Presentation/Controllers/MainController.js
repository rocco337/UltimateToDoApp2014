﻿var UltimateToDoApp;
(function (UltimateToDoApp) {
    'use strict';

    var mainController = (function () {
        function mainController($scope, tasksService, boardService) {
            this.$scope = $scope;
            this.tasksService = tasksService;
            this.boardService = boardService;
            $scope.initBoard = function (boardId) {
                tasksService.GetTasks(boardId, 1, function (data, status, headers, config) {
                    $scope.urgentImportant = data;
                });

                tasksService.GetTasks(boardId, 2, function (data, status, headers, config) {
                    $scope.notUrgentImportant = data;
                });

                tasksService.GetTasks(boardId, 3, function (data, status, headers, config) {
                    $scope.urgentNotImportant = data;
                });

                tasksService.GetTasks(boardId, 4, function (data, status, headers, config) {
                    $scope.notUrgentNotImportant = angular.fromJson(data);
                });
            };

            boardService.GetBoards(function (data, status, headers, config) {
                $scope.boards = data.List;
                $scope.activeBoard = data.List[0];
                $scope.initBoard($scope.activeBoard.Id);
            });
        }
        mainController.$inject = [
            '$scope',
            'tasksService',
            'boardService'
        ];
        return mainController;
    })();
    UltimateToDoApp.mainController = mainController;
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=MainController.js.map
