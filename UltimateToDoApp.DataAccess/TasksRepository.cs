using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using System.IdentityModel.Tokens;

namespace UltimateToDoApp.DataAccess
{
    public class TasksRepository : ITasksRepository
    {
        private List<TaskItemModel> tasks = new List<TaskItemModel>();

        public TasksRepository()
        {
            tasks.Add(new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 1, Created = DateTime.Now, UserId = 1, Name = "Guitar teacher" });
            tasks.Add(new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 1, Created = DateTime.Now, UserId = 1, Name = "Dentist appointment" });
            tasks.Add(new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 2, Created = DateTime.Now, UserId = 1, Name = "Read some cool book" });
            tasks.Add(new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 2, Created = DateTime.Now, UserId = 1, Name = "Download new Boss album" });
            tasks.Add(new TaskItemModel() { Token = "testguid", Category = 3, Created = DateTime.Now, UserId = 1, Name = "New dummy task" });
        }

        public CreateUpdateTaskResponse CreateUpdateTask(TaskItemModel model)
        {
            if (string.IsNullOrEmpty(model.Token))
            {
                model.Token = Guid.NewGuid().ToString();
                tasks.Add(model);
            }
            else
            {
                var task = tasks.Where(t => t.Token.Equals(model.Token)).FirstOrDefault();

                if (task == null)
                    throw new NullReferenceException("Task not found");

                task = model;
            }

            return new CreateUpdateTaskResponse() { Success = true, Task = model };
        }

        public HttpBaseResponse DeleteTask(TaskItemModel model)
        {
           var task= tasks.Where(t => t.Token.Equals(model.Token)).FirstOrDefault();
           
            if (task == null)
               throw new NullReferenceException("Task not found");

            tasks.Remove(task);

            return new HttpBaseResponse() { Success = true };
        }

        public TaskItemModel[] GetTasks(int? categoryId)
        {
           var result = tasks.Select(m=>m);

            if (categoryId.HasValue)
                result = result.Where(m => m.Category == categoryId.Value);

            return result.ToArray();
        }
    }
}
