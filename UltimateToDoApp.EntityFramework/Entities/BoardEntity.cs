using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UltimateToDoApp.EntityFramework.Entities
{
    [Table("Board")]
    public class BoardEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }
        
    }
}
