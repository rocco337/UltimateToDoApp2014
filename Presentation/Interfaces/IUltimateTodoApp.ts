module UltimateToDoApp {
    export interface ITasksService
    {
        GetTasks(boardId:string,category: number, callback: (data, status, headers, config) => any);

        InsertNewTask(task: TaskItemModel, callback: (data, status, headers, config) => any);

        DeleteTask(task: TaskItemModel, callback: (data, status, headers, config) => any);
    }
}