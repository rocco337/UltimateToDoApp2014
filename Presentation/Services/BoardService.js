var UltimateToDoApp;
(function (UltimateToDoApp) {
    'use strict';

    var apiUrl = "http://localhost:3394/api/";
    var getBoards = "board/Get";
    var create = "board/Create";
    var update = "board/update";

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

        boardService.prototype.CreateBoard = function (board, callback) {
            if (board.Id != null) {
                var url = update + "?id=" + board.Id;
                this.PutJsonOnApi(url, board, callback);
            } else {
                this.PostJsonOnApi(create, board, callback);
            }
        };

        boardService.prototype.InitEmptyBoard = function (callback) {
            var board = new UltimateToDoApp.BoardModel();
            board.Name = "Todo";

            this.PostJsonOnApi(create, board, callback);
        };

        boardService.prototype.PostJsonOnApi = function (methodUrl, data, callback) {
            this.$http({
                method: 'POST',
                url: apiUrl + methodUrl,
                data: data
            }).success(function (data, status, headers, config) {
                callback(data, status, headers, config);
            }).error(function (data, status, headers, config) {
                console.log(data + "-" + status + "-" + headers + "-" + config);
            });
        };

        boardService.prototype.PutJsonOnApi = function (methodUrl, data, callback) {
            this.$http({
                method: 'PUT',
                url: apiUrl + methodUrl,
                data: data
            }).success(function (data, status, headers, config) {
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
