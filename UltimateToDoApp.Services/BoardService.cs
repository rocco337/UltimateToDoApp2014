using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.Contracts.Interfaces;
using UltimateToDoApp.Contracts.Models;
using UltimateToDoApp.DataAccess;


namespace UltimateToDoApp.Services
{
    public class BoardService : IBoardService
    {
        List<BoardModel> Boards;

        public BoardService()
        {
            if(Boards==null)
                Boards= Repository.Boards().ToList();
        }
        public GetBoardsResponse GetBoards()
        {
            return new GetBoardsResponse() { 
             Success=true,
             List = Boards
            };
        }


        public CreateBoardResponse Create(BoardModel model)
        {
            if(string.IsNullOrEmpty(model.Id))
            {
                model.Id = Guid.NewGuid().ToString();
                Boards.Add(model);
            }
            else
            {
                var modelToUpdate = Boards.Where(m => m.Id == model.Id).FirstOrDefault();

                if (modelToUpdate == null)
                    throw new NullReferenceException("board id not found");

                Boards.Remove(modelToUpdate);
                Boards.Add(model);
            }

            return new CreateBoardResponse()
            {
                Success = true,
                Board = model
            };
        }
    }
}
