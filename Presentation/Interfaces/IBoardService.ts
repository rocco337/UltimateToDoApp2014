module UltimateToDoApp
{
    export interface IBoardService {
        GetBoards(callback: (data, status, headers, config) => any);
    }
} 