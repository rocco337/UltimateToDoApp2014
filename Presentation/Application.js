var UltimateToDoApp;
(function (UltimateToDoApp) {
    var app = angular.module('app', []).service('tasksService', UltimateToDoApp.tasksService).controller('mainController', UltimateToDoApp.mainController).directive('taskListEditor', UltimateToDoApp.taskListEditor);
})(UltimateToDoApp || (UltimateToDoApp = {}));
//# sourceMappingURL=Application.js.map
