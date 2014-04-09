var UltimateToDoApp;
(function (UltimateToDoApp) {
    'use strict';

    var apiUrl = "http://localhost:3394/api/";
    var getBoards = "board/GetBoards";

    var boardService = (function () {
        function boardService($http) {
            this.$http = $http;
        }
        boardService.prototype.GetBoards = function (callback) {
            this.$http({ method: 'GET', url: apiUrl + getBoards }).success(function (data, status, headers, config) {
                callback(data, status, headers, config);
            }).error(function (data, status, headers, config) {
                console.log(data + "-" + status + "-" + headers + "-" + config);
            });
        };
        boardService.inject = ["$http"];
        return boardService;
    })();
    UltimateToDoApp.boardService = boardService;
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=BoardService.js.map
