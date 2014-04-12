using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using UltimateToDoApp.Contracts.Interfaces;
using UltimateToDoApp.Contracts.Models;
using UltimateToDoApp.DataAccess;
using UltimateToDoApp.EntityFramework.Entities;


namespace UltimateToDoApp.Services
{
    public class BoardService : ServiceBase,IBoardService
    {
        public GetBoardsResponse GetBoards()
        {
            return new GetBoardsResponse() { 
             Success=true,
             List = db.Boards.ToModelList()
            };
        }
        
        public CreateBoardResponse Create(BoardModel model)
        {
            if(string.IsNullOrEmpty(model.Id))
            {
                model.Id = Guid.NewGuid().ToString();
                db.Boards.Add(model.ToEntity());
                db.SaveChanges();
            }
            else
            {
                var modelToUpdate = db.Boards.Where(m => m.Id == model.Id).FirstOrDefault();

                if (modelToUpdate == null)
                    throw new NullReferenceException("board id not found");

                modelToUpdate = model.ToEntity();
                db.SaveChanges();
            }

            return new CreateBoardResponse()
            {
                Success = true,
                Board = model
            };
        }
    }
}
