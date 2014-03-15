using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UltimateToDoApp.WebApi.Models
{
    public class TaskItemModel
    {
        public string Token { get; set; }
        public string Name { get; set; }
        public int Category { get; set; }
        public DateTime Created { get; set; }
        public int UserId { get; set; }
    }
}