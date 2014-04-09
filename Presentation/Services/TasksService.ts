module UltimateToDoApp
{
    "use strict";

    var apiUrl = "http://localhost:3394/api/";
    var getTasks = "Tasks/GetTasks";
    var insertUpdate = "Tasks/CreateUpdateTask";
    var deleteTask = "Tasks/DeleteTask";
    var boardId = "";

    export class tasksService implements ITasksService
    {       
        public static $inject = [
            '$http'            
        ];

        constructor(private $http: ng.IHttpService) { }

        GetTasks (category:number, callback)  {
            this.$http({ method: 'GET', url: apiUrl + getTasks + "/" + category }).
                success(function (data, status, headers, config) {
                    callback(data, status, headers, config);
                }).
                error(function (data, status, headers, config) {
                    console.log(data + "-" + status + "-" + headers + "-" + config);
                });
        }

        InsertNewTask (task:TaskItemModel, callback)  {
            this.PostJsonOnApi(insertUpdate, task, callback);
        }

        DeleteTask(task: TaskItemModel, callback) {            
            this.PostJsonOnApi(deleteTask, task, callback);
        }

        PostJsonOnApi(methodUrl: string, data: TaskItemModel, callback) {
            data.BoardId = "empty-board";
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
    }
  
}





 