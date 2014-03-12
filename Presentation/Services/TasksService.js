ultimateToDoApp.factory('TasksService', function ($http) {
    return {
        GetTasks: function (category) {
            return GetTasksMock();
        },

        InsertNewTask: function (task) {
            
            //save on server
        },

        DeleteTask: function (task) {
            //save on server
        }
    }
});

function GetTasksMock() {
    var tasks = [];

    var task = new TaskItemModel();
    task.Index = 1;
    task.Name = "Some cool task";
    task.Category = 1;

    tasks.push(task);

    task = new TaskItemModel();
    task.Index = 2;
    task.Name = "Dentist appointment";
    task.Category = 2;

    tasks.push(task);

    task = new TaskItemModel();
    task.Index = 3;
    task.Category = 3;
    task.Name = "Read new book and make review";

    tasks.push(task);

    return tasks;
}