using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UltimateToDoApp.Contracts.Models
{
    public class CreateBoardResponse : HttpBaseResponse
    {
        public BoardModel Board { get; set; }
    }
}
