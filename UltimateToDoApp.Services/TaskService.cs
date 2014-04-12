using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.Contracts.Interfaces;
using UltimateToDoApp.DataAccess;

namespace UltimateToDoApp.Services
{
    public class TaskService : ITaskService
    {
        List<TaskItemModel> Tasks;

        public TaskService()
        {
            if(Tasks==null)
                Tasks=Repository.Tasks().ToList();

        }
        public CreateUpdateTaskResponse Create(TaskItemModel model)
        {
            if (string.IsNullOrEmpty(model.Token))
            {
                model.Token = Guid.NewGuid().ToString();
                Tasks.Add(model);
            }
            else
            {
                var task = Tasks.Where(t => t.Token.Equals(model.Token)).FirstOrDefault();

                if (task == null)
                    throw new NullReferenceException("Task not found");

                task = model;
            }

            return new CreateUpdateTaskResponse() { Success = true, Task = model };
        }

        public HttpBaseResponse Delete(TaskItemModel model)
        {
            var task = Tasks.Where(t => t.Token.Equals(model.Token)).FirstOrDefault();

            if (task == null)
                throw new NullReferenceException("Task not found");

            Tasks.Remove(task);

            return new HttpBaseResponse() { Success = true };
        }

        public TaskItemModel[] GetList(string boardId,int? categoryId)
        {
            var result = Tasks.Where(m => m.BoardId == boardId);

            if (categoryId.HasValue)
                result = result.Where(m => m.Category == categoryId.Value);

            return result.ToArray();
        }

    }
}
