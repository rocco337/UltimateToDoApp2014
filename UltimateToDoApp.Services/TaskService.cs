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
    public class TaskService : ServiceBase,ITaskService
    {
        public CreateUpdateTaskResponse Create(TaskItemModel model)
        {
            if (string.IsNullOrEmpty(model.Id))
            {
                model.Id = Guid.NewGuid().ToString();
                db.Tasks.Add(model.ToEntity());
            }
            else
            {
                var task = db.Tasks.Where(t => t.Id.Equals(model.Id)).FirstOrDefault();

                if (task == null)
                    throw new NullReferenceException("Task not found");

                task.BoardId = model.BoardId;
                task.Category = model.Category;
                task.Index = model.Index;
                task.Name = model.Name;               
            }
            
            db.SaveChanges();

            return new CreateUpdateTaskResponse() { Success = true, Task = model };
        }

        public HttpBaseResponse Delete(TaskItemModel model)
        {
            var task = db.Tasks.Where(t => t.Id.Equals(model.Id)).FirstOrDefault();

            if (task == null)
                throw new NullReferenceException("Task not found");

            db.Tasks.Remove(task);
            db.SaveChanges();

            return new HttpBaseResponse() { Success = true };
        }

        public TaskItemModel[] GetList(string boardId,int? categoryId)
        {
            var result = db.Tasks.Where(m => m.BoardId == boardId);

            if (categoryId.HasValue)
                result = result.Where(m => m.Category == categoryId.Value);

            return result.ToModelList().ToArray();
        }
    }
}
