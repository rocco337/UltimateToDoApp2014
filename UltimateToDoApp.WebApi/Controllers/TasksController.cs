using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.DataAccess;


namespace UltimateToDoApp.WebApi.Controllers
{

    public class TasksController : BaseApiController, ITasksRepository
    {
        static readonly ITasksRepository repository = new TasksRepository();

       [System.Web.Http.HttpPost]      
        public CreateUpdateTaskResponse CreateUpdateTask(TaskItemModel model)
        {
            return repository.CreateUpdateTask(model);
        }

       [System.Web.Http.HttpPost]
        public HttpBaseResponse DeleteTask(TaskItemModel model)
        {
            return repository.DeleteTask(model);
        }

        [HttpGet]
        public TaskItemModel[] GetTasks()
        {
            return repository.GetTasks();
        }
    }
}
