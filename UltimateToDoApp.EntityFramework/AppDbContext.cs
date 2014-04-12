using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UltimateToDoApp.EntityFramework.Entities;

namespace UltimateToDoApp.EntityFramework
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
            : base("AppDbContext")
        {
            this.Database.Initialize(true);
            this.Configuration.ProxyCreationEnabled = false;
            
        }

        public DbSet<TaskEntity> Tasks { get; set; }
        public DbSet<BoardEntity> Boards { get; set; }              
    }
}
