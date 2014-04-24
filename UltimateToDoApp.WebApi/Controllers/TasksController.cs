using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
        public HttpResponseMessage CreateUpdateTask(TaskItemModel model)
        {
           var result= service.Create(model);

           if (!result.Success)
               return Request.CreateResponse(HttpStatusCode.InternalServerError, result.Message);

           return Request.CreateResponse(HttpStatusCode.Created, result.Task);
        }

        [HttpPut]
        public HttpResponseMessage CreateUpdateTask(string id,TaskItemModel model)
        {
            model.Id = id;
            var result = service.Create(model);

            if (!result.Success)
                return Request.CreateResponse(HttpStatusCode.InternalServerError, result.Message);

            return Request.CreateResponse(HttpStatusCode.Created, result.Task);
        }

        [HttpDelete]
        public HttpResponseMessage DeleteTask(TaskItemModel model)
        {
            var result = service.Delete(model);

            if(!result.Success)
                return Request.CreateResponse(HttpStatusCode.InternalServerError, result.Message);

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpGet]
        public TaskItemModel[] GetTasks(string boardId, int? categoryId)
        {
            return service.GetList(boardId, categoryId);
        }
    }
}
