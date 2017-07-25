using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace testkrs.Models
{
    public class Medal 
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int MedalId { get; set; }
        public string ImageMedal { get; set; }
        public string nameUser { get; set; }
        public string typeMedal { get; set; }
        public int rangMedal { get; set; }
    }
}