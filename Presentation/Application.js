/// <reference path="scripts/typings/angularjs/angular.d.ts" />
var UltimateToDoApp;
(function (UltimateToDoApp) {
    var app = angular.module('app', []).service('tasksService', UltimateToDoApp.tasksService).service('boardService', UltimateToDoApp.boardService).controller('mainController', UltimateToDoApp.mainController).directive('ngEnter', UltimateToDoApp.ngEnter).directive('taskListEditor', UltimateToDoApp.taskListEditor).directive('boardDropdown', UltimateToDoApp.boardDropdown);
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=Application.js.map
