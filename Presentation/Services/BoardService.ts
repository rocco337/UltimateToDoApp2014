module UltimateToDoApp
{
    'use strict';

    var apiUrl = "http://localhost:3394/api/";
    var getBoards = "board/Get";
    var create = "board/Create";
    var update = "board/update";

    export class boardService implements IBoardService
    {
        public static inject = ["$http"];

        constructor(private $http: ng.IHttpService) { }

        GetBoards(callback)
        {
            this.$http({ method: 'GET', url: apiUrl + getBoards}).
                success(function (data, status, headers, config) {
                    callback(data, status, headers, config);
                }).
                error(function (data, status, headers, config) {
                    console.log(data + "-" + status + "-" + headers + "-" + config);
                });
        }

        CreateBoard(board: BoardModel,callback)
        {
            if (board.Id != null) {
                var url = update + "?id=" + board.Id;
                this.PutJsonOnApi(url, board, callback);
            }
            else
            {
                this.PostJsonOnApi(create, board, callback);
            }
            
        }

        InitEmptyBoard(callback: (data, status, headers, config) => any) {
            var board = new BoardModel();
            board.Name = "Todo";

            this.PostJsonOnApi(create, board, callback);
        }

        PostJsonOnApi(methodUrl: string, data: BoardModel, callback) {         
            this.$http({
                method: 'POST',
                url: apiUrl + methodUrl,
                data: data,
            }).
                success(function (data, status, headers, config) {
                    callback(data, status, headers, config);
                }).
                error(function (data, status, headers, config) {
                    console.log(data + "-" + status + "-" + headers + "-" + config);
                });
        }

        PutJsonOnApi(methodUrl: string, data: BoardModel, callback) {
            this.$http({
                method: 'PUT',
                url: apiUrl + methodUrl,
                data: data,
            }).
                success(function (data, status, headers, config) {
                    callback(data, status, headers, config);
                }).
                error(function (data, status, headers, config) {
                    console.log(data + "-" + status + "-" + headers + "-" + config);
                });
        }
    }
} 