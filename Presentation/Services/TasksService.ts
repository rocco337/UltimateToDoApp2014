module UltimateToDoApp
{
    "use strict";

    var apiUrl = "http://localhost:3394/api/";
    var getTasks = "Tasks/Get";
    var create = "Tasks/Create";
    var update = "Tasks/Update";
    var deleteTask = "Tasks/Delete";
    var boardId = "";

    export class tasksService implements ITasksService
    {       
        public static $inject = [
            '$http'            
        ];

        constructor(private $http: ng.IHttpService) { }

        GetTasks(boardId:string,category:number, callback)  {
            this.$http({ method: 'GET', url: apiUrl + getTasks + "?boardId=" + boardId+"&id=" + category }).
                success(function (data, status, headers, config) {
                    if (!data)
                        data = [];

                    callback(data, status, headers, config);
                }).
                error(function (data, status, headers, config) {
                    console.log(data + "-" + status + "-" + headers + "-" + config);
                });
        }

        InsertNewTask(task: TaskItemModel, callback) {            
            if (task.Id != null) {
                var url = update + "?id=" + task.Id;
                this.PutJsonOnApi(url, task, callback);
            } else {
                this.PostJsonOnApi(create, task, callback);
            }            
        }

        DeleteTask(task: TaskItemModel, callback) {            
            this.PostJsonOnApi(deleteTask, task, callback);
        }

        PostJsonOnApi(methodUrl: string, data: TaskItemModel, callback) {           
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

        PutJsonOnApi(methodUrl: string, data: TaskItemModel, callback) {
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





 