using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UltimateToDoApp.EntityFramework.Entities
{
    [Table("Task")]
    public class TaskEntity
    {
        public string Id { get; set; }              
        public string Index { get; set; }
        public string Name { get; set; }
        public int Category { get; set; }
        public DateTime Created { get; set; }
        public int UserId { get; set; }
        public string BoardId { get; set; }
        public BoardEntity Board { get; set; }
    }
}