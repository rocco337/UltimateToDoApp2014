var UltimateToDoApp;
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

                if (data.List && data.List.length != 0) {
                    //set first board as active
                    $scope.activeBoard = data.List[0].Id;
                    $scope.initBoard($scope.activeBoard);
                } else {
                    //create new board if user doesnt have any
                    boardService.InitEmptyBoard(function (data, status, headers, config) {
                        $scope.activeBoard = data.Board.Id;
                        $scope.initBoard(data.Board.Id);
                    });
                }
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
