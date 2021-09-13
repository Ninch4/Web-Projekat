using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace KozmetickiSalon_back.Models
{
    [Table("Smena")]
    public class Smena
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("BrojSmene")]
        [DataType("number")]
        public int BrojSmene { get; set; }

        [Column("Broj")]
        [DataType("number")]
        public int Broj { get; set; }

        [Column("Radnik")]
        [MaxLength(255)]
        public string Radnik { get; set; }

        [JsonIgnore]
        public Salon Salon { get; set; }
    }
}