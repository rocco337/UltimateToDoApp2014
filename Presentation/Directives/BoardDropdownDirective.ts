module UltimateTodoApp
{
    'use strict';

    export function boardDropdown(boardService): ng.IDirective {
        return {
            restrict: "AE",
            templateUrl: "views/boardDropdown",
            scope: {
                boards :"="
            },
            controller: ["$scope", function ($scope) {
                $scope.deleteBoard = function () {
                    //todo
                }
            }]
        };
    }
}