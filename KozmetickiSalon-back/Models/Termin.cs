using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace KozmetickiSalon_back.Models
{
    [Table("Termin")]
    public class Termin
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("BrojTermina")]
        public int BrojTermina { get; set; }

        [Column("TipUsluge")]
        [MaxLength(255)]
        public string TipUsluge { get; set; }

        [Column("Trenutno")]
        public int Trenutno { get; set; }

        [Column("MaxMusterija")]
        public int MaxMusterija { get; set; }

        [Column("VremeTermina")]
        public int VremeTermina {get; set; }

        [Column("Musterije")]
        public string Musterije { get; set; }

        [JsonIgnore]
        public Salon Salon { get; set; }
    }
}