var UltimateTodoApp;
(function (UltimateTodoApp) {
    'use strict';

    function boardDropdown(boardService) {
        return {
            restrict: "AE",
            templateUrl: "views/boardDropdown",
            scope: {
                boards: "="
            },
            controller: [
                "$scope", function ($scope) {
                    $scope.deleteBoard = function () {
                        //todo
                    };
                }]
        };
    }
    UltimateTodoApp.boardDropdown = boardDropdown;
})(UltimateTodoApp || (UltimateTodoApp = {}));
//# sourceMappingURL=BoardDropdownDirective.js.map
