using Microsoft.EntityFrameworkCore;

namespace KozmetickiSalon_back.Models
{
    public class SalonContext : DbContext
    {
        public DbSet<Salon> Saloni{get;set;}
        public DbSet<Termin> Termini{get;set;}
        public DbSet<Smena> Smene{get;set;}
        public DbSet<Zaposleni> Zaposleni{get;set;}
        public SalonContext(DbContextOptions options) :base(options)
        {
            
        }
    }
}