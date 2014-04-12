using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace UltimateToDoApp.Contracts
{
    public class TaskItemModel
    {
        public string Index { get; set; }
        public string Token { get; set; }
        public string Name { get; set; }
        public int Category { get; set; }
        public DateTime Created { get; set; }
        public int UserId { get; set; }
        public string BoardId { get; set; }
    }
}