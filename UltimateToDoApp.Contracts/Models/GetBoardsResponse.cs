using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UltimateToDoApp.Contracts
{
    public class GetBoardsResponse : HttpBaseResponse
    {
        public List<BoardModel> List { get; set; }
    }
}
