using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UltimateToDoApp.Contracts.Interfaces
{
    public interface ITaskService
    {
        CreateUpdateTaskResponse Create(TaskItemModel model);

        HttpBaseResponse Delete(TaskItemModel model);

        TaskItemModel[] GetList(string boardId, int? categoryId);
    }
}
