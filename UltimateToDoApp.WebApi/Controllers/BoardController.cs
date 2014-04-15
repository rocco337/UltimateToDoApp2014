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

        public BoardController(IBoardService svc)
        {
            this.service = svc;
        }

        public GetBoardsResponse GetBoards()
        {
            return service.GetBoards();
        }

        public CreateBoardResponse Create(BoardModel model)
        {
            return service.Create(model);
        }
    }
}
