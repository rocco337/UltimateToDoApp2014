using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.Contracts.Interfaces;

namespace UltimateToDoApp.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]    
    public class TasksController : BaseApiController
    {
        ITaskService service;

        public TasksController(ITaskService svc)
        {
            this.service = svc;
        }

        [HttpPost]      
        public CreateUpdateTaskResponse CreateUpdateTask(TaskItemModel model)
        {
           return service.Create(model);
        }

        [HttpPost]
        public HttpBaseResponse DeleteTask(TaskItemModel model)
        {
            return service.Delete(model);
        }

        [HttpGet]
        public TaskItemModel[] GetTasks(string boardId, int? id)
        {
            return service.GetList(boardId,id);

        }
    }
}
