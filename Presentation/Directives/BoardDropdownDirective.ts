module UltimateToDoApp
{
    'use strict';

    export function boardDropdown(boardService: IBoardService): ng.IDirective {
         return {
            restrict: "AE",
            templateUrl: "Views/NewBoard.html",
            scope: {
                boards: "=",
                activeBoard:"="
            },            
            controller: ["$scope", function ($scope) {
                $scope.deleteBoard = function () {
                    //todo
                },
                $scope.addBoard = function (model: BoardModel) {                   
                    $scope.showPopup = false;
                    boardService.CreateBoard(model, function (data, status, headers, config) {   
                        $scope.boards.push(model);                   
                        $scope.activeBoard = model;                        
                        $scope.$parent.initBoard(model.Id);
                    });

                },
                $scope.boardChanged = function (board) {
                    $scope.$parent.initBoard(board.Id);
                },
                $scope.showAddBoard = function ()
                {
                    $scope.showPopup = true;
                    $("body").addClass("add-modal");                    
                }
            }]
        };
    }
}