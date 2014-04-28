using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.Contracts.Interfaces;
using UltimateToDoApp.Contracts.Models;

namespace UltimateToDoApp.WebApi.Controllers
{
    public class BoardController : ApiController
    {
        private IBoardService service;

        public BoardController(IBoardService svc) : base()
        {
            this.service = svc;
        }

        [HttpGet]
        public BoardModel[] Get()
        {
            return service.GetBoards();
        }

        [HttpPost]
        public HttpResponseMessage Create(BoardModel model)
        {
            var result = service.Create(model);
            
            if(!result.Success)            
              return Request.CreateResponse(HttpStatusCode.InternalServerError,result.Message);
            
            return Request.CreateResponse(HttpStatusCode.Created, result.Board);
        }

        [HttpPut]
        public HttpResponseMessage Update(string id,BoardModel model)
        {
            model.Id = id;
            var result = service.Create(model);

            if (!result.Success)
                return Request.CreateResponse(HttpStatusCode.InternalServerError, result.Message);

            return Request.CreateResponse(HttpStatusCode.Created, result.Board);
        }
    }
}
