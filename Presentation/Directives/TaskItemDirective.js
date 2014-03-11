ultimateToDoApp.directive('taskItem', function () {
    return {
        restrict: 'AE',
        templateUrl: 'Views/TaskItem.html',
        scope: {
            task:'='
        }
    }
    
});