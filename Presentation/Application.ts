/// <reference path="scripts/typings/angularjs/angular.d.ts" />

module UltimateToDoApp { 

    var app = angular.module('app', [])
        .service('tasksService', tasksService)
        .service('boardService', boardService)
        .controller('mainController', mainController)
        .directive('ngEnter', ngEnter)
        .directive('taskListEditor', taskListEditor)    
        .directive('boardDropdown', boardDropdown);

            
} 

