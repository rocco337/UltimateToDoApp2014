module UltimateToDoApp {
    export interface IBoardService {
        GetBoards(callback: (data, status, headers, config) => any);
        CreateBoard(board: BoardModel, callback: (data, status, headers, config) => any);
        InitEmptyBoard(callback: (data, status, headers, config) => any);
    }

    export interface ITasksService {
        GetTasks(boardId: string, category: number, callback: (data, status, headers, config) => any);

        InsertNewTask(task: TaskItemModel, callback: (data, status, headers, config) => any);

        DeleteTask(task: TaskItemModel, callback: (data, status, headers, config) => any);
    }

    export interface IUltimateToDoAppScope extends ng.IScope {
        urgentImportant: TaskItemModel[];
        urgentNotImportant: TaskItemModel[];
        notUrgentImportant: TaskItemModel[];
        notUrgentNotImportant: TaskItemModel[];
        boards: BoardModel[];
        activeBoard: BoardModel;
        newBoard: BoardModel;
        initBoard: (boardId) => any
    }
} 