var UltimateToDoApp;
(function (UltimateToDoApp) {
    "use strict";

    var apiUrl = "http://localhost:3394/api/";
    var getTasks = "Tasks/Get";
    var create = "Tasks/Create";
    var update = "Tasks/Update";
    var deleteTask = "Tasks/Delete";
    var boardId = "";

    var tasksService = (function () {
        function tasksService($http) {
            this.$http = $http;
        }
        tasksService.prototype.GetTasks = function (boardId, category, callback) {
            this.$http({ method: 'GET', url: apiUrl + getTasks + "?boardId=" + boardId + "&id=" + category }).success(function (data, status, headers, config) {
                if (!data)
                    data = [];

                callback(data, status, headers, config);
            }).error(function (data, status, headers, config) {
                console.log(data + "-" + status + "-" + headers + "-" + config);
            });
        };

        tasksService.prototype.InsertNewTask = function (task, callback) {
            if (task.Id != null) {
                var url = update + "?id=" + task.Id;
                this.PutJsonOnApi(url, task, callback);
            } else {
                this.PostJsonOnApi(create, task, callback);
            }
        };

        tasksService.prototype.DeleteTask = function (task, callback) {
            this.PostJsonOnApi(deleteTask, task, callback);
        };

        tasksService.prototype.PostJsonOnApi = function (methodUrl, data, callback) {
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

        tasksService.prototype.PutJsonOnApi = function (methodUrl, data, callback) {
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
        tasksService.$inject = [
            '$http'
        ];
        return tasksService;
    })();
    UltimateToDoApp.tasksService = tasksService;
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=TasksService.js.map
