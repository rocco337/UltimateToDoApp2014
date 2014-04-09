module UltimateToDoApp
{
    'use strict';

    var apiUrl = "http://localhost:3394/api/";
    var getBoards = "board/GetBoards";

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
    }
} 