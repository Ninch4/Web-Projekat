using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using KozmetickiSalon_back.Models;
namespace KozmetickiSalon_back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SalonController : ControllerBase
    {
        public SalonContext Context { get; set; }

        public SalonController(SalonContext context)
        {
            Context=context;
        }

        [Route("PreuzmiSalone")]
        [HttpGet]
        public async Task<List<Salon>> PreuzmiSalone()
        {
            return await Context.Saloni.Include(p=> p.Termini).Include(p=>p.Smene).ToListAsync();
        }

        [Route("PreuzmiTermine/{idsalona}")]
        [HttpGet]
        public async Task<List<Termin>> PreuzmiTermine(int idsalona)
        {
            return await Context.Termini.Where(termin => termin.Salon.ID==idsalona).ToListAsync();
        }

        [Route("PreuzmiSmene/{idsalona}")]
        [HttpGet]
        public async Task<List<Smena>> PreuzmiSmene(int idsalona)
        {
            return await Context.Smene.Where(smena=> smena.Salon.ID==idsalona).ToListAsync();
        }

        [Route("PreuzmiZaposlene/{idsalona}")]
        [HttpGet]
        public async Task<List<Zaposleni>> PreuzmiZaposlene(int idsalona)
        {
            return await Context.Zaposleni.Where(zaposleni=> zaposleni.Salon.ID==idsalona).ToListAsync();
        }

        [Route("UpisiSalon")]
        [HttpPost]
        public async Task UpisiSalon([FromBody] Salon salon)
        {
            Context.Saloni.Add(salon);
            await Context.SaveChangesAsync();
        }

        [Route("UpisiTermin/{idsalona}")]
        [HttpPost]
        public async Task UpisiTermin(int idsalona,[FromBody] Termin termin)
        {
            var salon=await Context.Saloni.FindAsync(idsalona);
            termin.Salon=salon;
            Context.Termini.Add(termin);
            await Context.SaveChangesAsync();
        }

        [Route("UpisiSmenu/{idsalona}")]
        [HttpPost]
        public async Task UpisiSmenu(int idsalona,[FromBody] Smena smena)
        {
            var salon=await Context.Saloni.FindAsync(idsalona);
            smena.Salon=salon;
            Context.Smene.Add(smena);
            await Context.SaveChangesAsync();
        }

        [Route("UpisiZaposlenog/{idsalona}")]
        [HttpPost]
        public async Task<IActionResult> UpisiZaposlenog(int idsalona,[FromBody] Zaposleni zaposleni)
        {
            
            var salon=await Context.Saloni.FindAsync(idsalona);
            zaposleni.Salon=salon;
            if(Context.Zaposleni.Any(p=>p.Ime==zaposleni.Ime && p.Prezime==zaposleni.Prezime))
            {
                return StatusCode(406);
            }
            if(zaposleni.Ime==null || zaposleni.Prezime==null)
            return StatusCode(406);

            else
            {
            Context.Zaposleni.Add(zaposleni);
            await Context.SaveChangesAsync();
            return Ok();
            }
            
        }

        [Route("IzmeniSalon")]
        [HttpPut]
        public async Task IzmeniSalon([FromBody] Salon salon)
        {
            Context.Update<Salon>(salon);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniTermin")]
        [HttpPut]
        public async Task IzmeniTermin([FromBody] Termin termin)
        {
            
            Context.Update<Termin>(termin);
            await Context.SaveChangesAsync();
            
        }

        [Route("IzmeniSmenu")]
        [HttpPut]
        public async Task IzmeniSmenu([FromBody] Smena smena)
        {
            Context.Update<Smena>(smena);
            await Context.SaveChangesAsync();
        }

        [Route("IzmeniZaposlenog")]
        [HttpPut]
        public async Task IzmeniZaposlenog([FromBody] Zaposleni zaposleni)
        {
            Context.Update<Zaposleni>(zaposleni);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiSalon")]
        [HttpDelete]
        public async Task IzbrisiSalon(int id)
        {
        
           var niztermina=Context.Termini.Where(s=>s.Salon.ID==id);
            await niztermina.ForEachAsync(s=>{
                Context.Remove(s);
            });
            var nizSmena=Context.Smene.Where(s=>s.Salon.ID==id);
            await nizSmena.ForEachAsync(s=>{
                Context.Remove(s);
            });
            var nizzaposlenih=Context.Zaposleni.Where(l=>l.Salon.ID==id);
            await nizzaposlenih.ForEachAsync(l=>{
                Context.Remove(l);
            });
           var salon = await Context.Saloni.FindAsync(id);
            Context.Remove(salon);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiTermin/{idtermina}")]
        [HttpDelete]
        public async Task IzbrisiTermin(int idtermina)
        {
           var termin = await Context.Termini.FindAsync(idtermina);
            Context.Remove(termin);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiSmenu")]
        [HttpDelete]
        public async Task IzbrisiSmenu(int id)
        {
           var smena = await Context.Smene.FindAsync(id);
            Context.Remove(smena);
            await Context.SaveChangesAsync();
        }

        [Route("IzbrisiZaposlenog")]
        [HttpDelete]
        public async Task IzbrisiZaposlenog(int id)
        {
           var zaposleni = await Context.Zaposleni.FindAsync(id);
            Context.Remove(zaposleni);
            await Context.SaveChangesAsync();
        }
    }
}
