module UltimateToDoApp {
    export interface IUltimateToDoAppScope extends ng.IScope {
        urgentImportant: TaskItemModel[];
        urgentNotImportant: TaskItemModel[];
        notUrgentImportant: TaskItemModel[];
        notUrgentNotImportant: TaskItemModel[];
        boards: BoardModel[];
        activeBoard: BoardModel;
        newBoard: BoardModel;
        initBoard: (boardId)=>any
    }
} 