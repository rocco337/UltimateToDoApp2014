using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.Contracts;
using System.IdentityModel.Tokens;
using System.Linq;

namespace UltimateToDoApp.DataAccess
{
    public static class Repository
    {
        private static string boardGuid=Guid.NewGuid().ToString();
        private static List<TaskItemModel> tasks = new List<TaskItemModel>() { 
            new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 1, Created = DateTime.Now, UserId = 1, Name = "Guitar teacher",BoardId = boardGuid },
            new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 1, Created = DateTime.Now, UserId = 1, Name = "Dentist appointment",BoardId = boardGuid },
            new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 2, Created = DateTime.Now, UserId = 1, Name = "Read some cool book",BoardId = boardGuid },
            new TaskItemModel() { Token = Guid.NewGuid().ToString(), Category = 2, Created = DateTime.Now, UserId = 1, Name = "Download new Boss album",BoardId = boardGuid },
            new TaskItemModel() { Token = "testguid", Category = 3, Created = DateTime.Now, UserId = 1, Name = "New dummy task" }

        };

        private static List<BoardModel> boards = new List<BoardModel>()
        {
            new BoardModel(){ Id=boardGuid, Name="Learning roadmap"},
            new BoardModel(){ Id=Guid.NewGuid().ToString(), Name="Todo tasks"},
            new BoardModel(){ Id=Guid.NewGuid().ToString(), Name="Training log"}
        };
               
        public static IQueryable<TaskItemModel> Tasks()
        {
            return tasks.AsQueryable();
        }

        public static IQueryable<BoardModel> Boards()
        {
            return boards.AsQueryable();
        }

    }
}
