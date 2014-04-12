module UltimateToDoApp { 

    var app = angular.module('app', [])
        .service('tasksService', tasksService)
        .service('boardService', boardService)
        .controller('mainController', mainController)
        .directive('taskListEditor', taskListEditor)
        .directive('boardDropdown', boardDropdown);

            
} 

