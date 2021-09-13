using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KozmetickiSalon_back.Models
{
    [Table("Salon")]
    public class Salon
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("UkupnoTermina")]
        [DataType("number")]
        public int UkupnoTermina { get; set; }

        [Column("Usmeni")]
        [DataType("number")]
        public int USmeni { get; set; }

        [Column("KapacitetTermina")]
        [DataType("number")]
        public int KapacitetTermina {get;set;}

        public virtual List<Termin> Termini { get; set; }
        public virtual List<Smena> Smene { get;set; }
        public virtual List<Zaposleni> Zaposleni{get;set;}
        
    }
}