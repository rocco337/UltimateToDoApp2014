using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.Contracts.Models;
using UltimateToDoApp.Services;

namespace UltimateToDoApp.WebApi.Controllers
{
    public class BoardController : ApiController
    {
        BoardService service = new BoardService();

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
