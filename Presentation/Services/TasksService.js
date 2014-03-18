ultimateToDoApp.factory('TasksService', function ($http) {

    var apiUrl = "http://localhost:3394/api/";
    var getTasks = "Tasks/GetTasks";
    var insertUpdate = "Tasks/CreateUpdateTask";
    var deleteTask = "Tasks/DeleteTask";

    return {
        GetTasks: function (category, callback) {
            $http({ method: 'GET', url: apiUrl + getTasks }).
               success(function (data, status, headers, config) {
                   callback(data, status, headers, config);
               }).
               error(function (data, status, headers, config) {
                   console.log(data + "-" + status + "-" + headers + "-" + config);
               });
        },

        InsertNewTask: function (task, callback) {
            var data = JSON.stringify(task);
       
            this.PostJsonOnApi(insertUpdate, data, callback);
        },

        DeleteTask: function (task, callback) {           
            var data = JSON.stringify(task);
            this.PostJsonOnApi(deleteTask, data, callback);
        },

        PostJsonOnApi: function (methodUrl,data, callback) {
                $http({
                    method: 'POST',
                    url: apiUrl + methodUrl,
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).
               success(function (data, status, headers, config) {
                   callback(data, status, headers, config);
               }).
               error(function (data, status, headers, config) {
                   console.log(data + "-" + status + "-" + headers + "-" + config);
               });
            }
    }
});




