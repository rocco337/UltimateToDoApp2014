using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UltimateToDoApp.Contracts
{
    public class CreateUpdateTaskResponse:HttpBaseResponse
    {
        public TaskItemModel Task { get; set; }
    }
}
