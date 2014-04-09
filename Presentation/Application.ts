module UltimateToDoApp { 

    var app = angular.module('app', [])
        .service('tasksService', tasksService)
        .controller('mainController', mainController)
        .directive('taskListEditor', taskListEditor);

            
} 

