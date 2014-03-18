ultimateToDoApp.factory('TasksService', function ($http) {

    var apiUrl = "http://localhost:3394/api/";
    var getTasks = "Tasks/GetTasks";
    var insertUpdate = "Tasks/CreateUpdateTask";

    return {
        GetTasks: function (category, callback) {          
            $http({ method: 'GET', url: apiUrl+getTasks }).
               success(function (data, status, headers, config) {
                   callback(data, status, headers, config);
               }).
               error(function (data, status, headers, config) {
                   console.log(data + "-" + status + "-" + headers + "-" + config);
               });          
        },

        InsertNewTask: function (task, callback) {
            var data = JSON.stringify(task);
            console.log("post - " + data);

            $http({
                method: 'POST',              
                url: apiUrl + insertUpdate,
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
        },

        DeleteTask: function (task) {
            //save on server
        }
    }
});

//function GetTasksMock() {
//    var tasks = [];

//    var task = new TaskItemModel();
//    task.Index = 1;
//    task.Name = "Some cool task";
//    task.Category = 1;

//    tasks.push(task);

//    task = new TaskItemModel();
//    task.Index = 2;
//    task.Name = "Dentist appointment";
//    task.Category = 2;

//    tasks.push(task);

//    task = new TaskItemModel();
//    task.Index = 3;
//    task.Category = 3;
//    task.Name = "Read new book and make review";

//    tasks.push(task);

//    return tasks;
//}


