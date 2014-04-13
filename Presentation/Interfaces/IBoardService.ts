module UltimateToDoApp
{
    export interface IBoardService {
        GetBoards(callback: (data, status, headers, config) => any);
        CreateBoard(board: BoardModel, callback: (data, status, headers, config) => any);
        InitEmptyBoard(callback: (data, status, headers, config) => any);
    }
} 