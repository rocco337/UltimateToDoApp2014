using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UltimateToDoApp.Contracts
{
    public interface ITasksRepository
    {
        CreateUpdateTaskResponse CreateUpdateTask(TaskItemModel model);
        HttpBaseResponse DeleteTask(TaskItemModel model);
        TaskItemModel[] GetTasks(int? categoryId);
    }
}
