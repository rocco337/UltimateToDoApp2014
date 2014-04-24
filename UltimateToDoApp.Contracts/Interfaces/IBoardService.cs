using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts.Models;

namespace UltimateToDoApp.Contracts.Interfaces
{
    public interface IBoardService
    {
        BoardModel[] GetBoards();
        CreateBoardResponse Create(BoardModel model);
    }
}
