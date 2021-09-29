import { Termin } from "./termin.js";
import { Smena } from "./smena.js";
import { Zaposleni } from "./zaposleni.js";

export class Salon{
    constructor(id,naziv,ukupnoTermina,uSmeni,kapacitetTermina)
    {   
        this.id=id;
        this.naziv=naziv;
        this.ukupnoTermina=ukupnoTermina;
        this.kapacitetTermina=kapacitetTermina;
        this.uSmeni=uSmeni;
        //this.cena=cena;
        this.kontejner =null;
        this.kontejner2=null;
        this.termini=[];
        this.zaposleni=[]
        this.smene=[];
        //this.racun=[];
    }

    
    dodajSmenu(radnik)
    {
        this.smene.push(radnik);
    }
    dodajTermin(termin)
    {
        this.termini.push(termin);
    }
    dodajZaposlenog(radnik)
    {
        this.zaposleni.push(radnik);
    }
    /*dodajRacun(rac){
        this.racun.push(rac);
    }*/

    crtajSalon(host){

        if(!host)
        {
            throw new Error("Host ne postoji!");
        }

        const idsalon=document.createElement("h1");
        idsalon.innerHTML="Naziv salona je:"+" "+this.naziv+", a ID  salona je: "+" " +this.id;
        host.appendChild(idsalon);

        this.kontejner2=document.createElement("div");
        this.kontejner2.className="kontejner";
        host.appendChild(this.kontejner2);
        this.crtajFormuSmena(this.kontejner2);
        this.crtajSmene(this.kontejner2);
        this.crtajZaposlene();

        this.kontejner=document.createElement("div");
        this.kontejner.className="kontejner";
        host.appendChild(this.kontejner);
        this.crtajFormuTermin(this.kontejner);
        this.crtajTermine(this.kontejner);


        
    }

    crtajFormuSmena(host)
    {
        const kont2 = document.createElement("div");
        kont2.className="formasmena";
        host.appendChild(kont2);

        let divU=document.createElement("div");
        let elLabela1=document.createElement("h3");
        elLabela1.innerHTML="Raspored zaposlenih";
        divU.appendChild(elLabela1);
        kont2.appendChild(divU);

        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Ime zaposlenog:";
        kont2.appendChild(elLabela1);

        let unos = document.createElement("input");
        unos.className="ime";
        kont2.appendChild(unos);

        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Prezime zaposlenog:";
        kont2.appendChild(elLabela1);

        unos = document.createElement("input");
        unos.className="prezime";
        kont2.appendChild(unos);

        elLabela1=document.createElement("br");
        kont2.appendChild(elLabela1);

        const dugme=document.createElement("button");
        dugme.innerHTML="Zaposlite radnika";
        kont2.appendChild(dugme);
        
        dugme.onclick=(ev)=>{
    
            let ime=this.kontejner2.querySelector(".ime").value;
            let prezime=this.kontejner2.querySelector(".prezime").value;
            console.log(ime);
            console.log(prezime);
            //if(ime.value ==null || prezime.value ==null)
            //alert("Greška!");
            fetch("https://localhost:5001/Salon/UpisiZaposlenog/"+this.id,{
            method:"POST",
             headers:{
                "Content-Type":"application/json"
                },
                body: JSON.stringify({
                ime:ime,
                prezime:prezime
            })
            }).then(p=>{
                if(p.ok)
                {
                    alert("Dodali ste novog zaposlenog")
                    location.reload();
                }
                //else 
                //alert("Greška!")
            });
        }

        elLabela1=document.createElement("br");
        kont2.appendChild(elLabela1);
        elLabela1=document.createElement("br");
        kont2.appendChild(elLabela1);

        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Izabrati zaposlenog za smenu:";
        kont2.appendChild(elLabela1);
        divU = document.createElement("div");
        divU.className="radnikk";
        kont2.appendChild(divU);
        elLabela1=document.createElement("br");
        kont2.appendChild(elLabela1);
        let opcija=null;
        
        divU=document.createElement("div");
        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Broj smene:";
        divU.appendChild(elLabela1);
        unos = document.createElement("select");
        divU.appendChild(unos);
        for(let i=0;i<2;i++)
        {
            opcija=document.createElement("option");
            opcija.innerHTML=i+1;
            opcija.value=i+1;
            unos.appendChild(opcija);
        }
        kont2.appendChild(divU);

        elLabela1=document.createElement("br");
        kont2.appendChild(elLabela1);
        divU=document.createElement("div");
        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Mesto po rasporedu:";
        divU.appendChild(elLabela1);
        let opcijasmena=null;
        let unos2 = document.createElement("select");
        divU.appendChild(unos2);
        for(let i=0;i<this.uSmeni;i++)
        {   
            opcijasmena = document.createElement("option");
            opcijasmena.innerHTML=i+1;
            opcijasmena.value=i+1;
            unos2.appendChild(opcijasmena);
        }
        kont2.appendChild(divU);

        elLabela1=document.createElement("br");
        kont2.appendChild(elLabela1);

        const dugme2=document.createElement("button");
        dugme2.innerHTML="Rasporediti";
        kont2.appendChild(dugme2);
        dugme2.onclick=(ev)=>{
            let radnik=this.kontejner2.querySelector(".izabrani:checked").value;
            
            let brSmene=parseInt(unos.value);
            let mesto=parseInt(unos2.value);
            console.log(mesto);
            let upit=this.smene.find(s=> s.radnik==radnik)
            if(upit)
            alert ("Radniku je vec dodeljena smena");

            let novesmene=this.smene.filter(smena=>smena.broj==mesto);
            novesmene.forEach(smena => {
                
            fetch("https://localhost:5001/Salon/IzmeniSmenu",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:smena.id,
                    brojSmene:brSmene,
                    broj:mesto,
                    radnik:radnik,
                })
            });
        });
        this.smene[mesto-1].azurirajSmenu(radnik,brSmene);
    
    }
}
    crtajSmene(host)
    {
        const kontSmene=document.createElement("div");
        kontSmene.className="kontSmene";
        host.appendChild(kontSmene);
        fetch("https://localhost:5001/Salon/PreuzmiSmene/"+this.id).then(p=>{
                p.json().then(data=>{
                    data.forEach(smena=>{
                        let smena1=new Smena(smena.id,smena.brojSmene,smena.broj);
                        this.dodajSmenu(smena1);
                        smena1.crtajSmenu(kontSmene);
                        if(smena.radnik!=null)
                        smena1.azurirajSmenu(smena.radnik,smena.brojSmene);
                    });
                });
            });
    }
    crtajZaposlene()
    {
        let div=this.kontejner2.querySelector(".radnikk");
        fetch("https://localhost:5001/Salon/PreuzmiZaposlene/"+this.id).then(p=>{
                p.json().then(data=>{
                    data.forEach(radnik=>{
                        let zaposleni1=new Zaposleni(radnik.id,radnik.ime,radnik.prezime);
                        this.dodajZaposlenog(zaposleni1);
                        let label=document.createElement("label");
                        label.innerHTML=radnik.ime+" "+radnik.prezime;
                        div.appendChild(label);
                        let opcija=document.createElement("input");
                        opcija.type="radio";
                        opcija.name="radio";
                        opcija.className="izabrani";
                        opcija.value=label.innerHTML;
                        div.appendChild(opcija);
                    });
                });
            });
    }

    crtajFormuTermin(host){

        const kont1 =document.createElement("div");
        kont1.className="formatermin";
        host.appendChild(kont1);

        var elLabela = document.createElement("h3");
        elLabela.innerHTML="Unos musterija";
        kont1.appendChild(elLabela);

        var elLabela1=document.createElement("label");
        elLabela1.innerHTML="Ime musterije:";
        kont1.appendChild(elLabela1);

        let unos = document.createElement("input");
        unos.className="ime";
        kont1.appendChild(unos);

        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Prezime musterije:";
        kont1.appendChild(elLabela1);

        unos = document.createElement("input");
        unos.className="prezime";
        kont1.appendChild(unos);

        elLabela1=document.createElement("br");
        kont1.appendChild(elLabela1);

        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Izbor usluge:";
        kont1.appendChild(elLabela1);

        let tipoviusluga=["Manikir","Pedikir","Sminka","Depilacija","Masaza"];
        let boje=["#A3E0FA","#FDFC97","#A6EFAD","#FFB6B6","#BCB8F6"];
        let opcijar=null;

        let labelau=null;
        let divU=null;
        let divic=document.createElement("div");
        divic.className="divic";
        tipoviusluga.forEach((tipusluge,ind)=>{
            divU = document.createElement("div");
            divU.className="tip";
            opcijar=document.createElement("input");
            opcijar.type="radio";
            opcijar.name="usluga";
            opcijar.className="opcijar";
            opcijar.value=boje[ind];
            labelau =document.createElement("label");
            labelau.innerHTML=tipusluge;
            labelau.className="labelau";
    
            divU.appendChild(opcijar);
            divU.appendChild(labelau);
            divU.classList.add(tipusluge);
            divic.appendChild(divU);
            kont1.appendChild(divU);
        })


        //elLabela = document.createElement("h3");
        //elLabela.innerHTML = "Rezervacija termina";
        //kont1.appendChild(elLabela);
        //let opcijavreme=null;
        
       /* for(let k=poc1;k<=kr1; k++)
        {
            

            opcijavreme.value=fetch("https://localhost:5001/Salon/PreuzmiSalone").then(p=>{
                p.json().then(data=>{
                    data.forEach(salon => {
                    const salon1=new Salon(salon.id,salon.naziv,salon.ukupnoTermina,salon.pocetakrada,salon.krajrada,salon.uSmeni);
                    
                   let opcijavreme = document.createElement("option");
            opcijavreme.className="terminvreme";
            opcijavreme.innerHTML = i;
            opcijavreme.value = i;
            selH.appendChild(opcijavreme);
                 
    
                    
                    });
        
        
                    });
        
        });
            
        }

        console.log(this.pocetakrada);

            
*/
     /*   for(let k=poc1;k<=kr1; k++)
        {

            opcijavreme = document.createElement("option");
            opcijavreme.className="terminvreme";
            opcijavreme.innerHTML = k;
            opcijavreme.value = k;
            selH.appendChild(opcijavreme);
        }

        kont1.appendChild(divvreme);*/

        /*let selM = document.createElement("select");
        labelavreme = document.createElement("label");
        labelavreme.innerHTML = " min: "
        divvreme.appendChild(labelavreme);
        divvreme.appendChild(selM);

        for(let i = 0; i < 60; i=i+15)
        {
            let opcijavreme = document.createElement("option");

            if(i == 0)
                opcijavreme.innerHTML = "00";
            else
                opcijavreme.innerHTML = i ;           
                opcijavreme.value = i;
            selM.appendChild(opcijavreme);
        }
    */
       /* let selM = document.createElement("select");
        labelavreme = document.createElement("label");
        labelavreme.innerHTML = " min: "
        divvreme.appendChild(labelavreme);
        divvreme.appendChild(selM);

            let opcijavreme1 = document.createElement("option");
                opcijavreme1.innerHTML = "00";
            selM.appendChild(opcijavreme1);

        kont1.appendChild(divvreme);
        
        elLabela1=document.createElement("br");
        kont1.appendChild(elLabela1);*/

        divU=document.createElement("div");
        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Broj termina:";
        divU.appendChild(elLabela1);
        let unostermina = document.createElement("select");
        divU.appendChild(unostermina);
        let opcijatermin=null;
        for(let i=0;i<this.ukupnoTermina;i++)
        {
            opcijatermin = document.createElement("option");
            opcijatermin.innerHTML=i+1;
            opcijatermin.value=i+1;
            unostermina.appendChild(opcijatermin);
        }
        kont1.appendChild(divU);

        elLabela1=document.createElement("br");
        kont1.appendChild(elLabela1);

        const dugme=document.createElement("button");
        dugme.innerHTML="Upisi musteriju";
        kont1.appendChild(dugme);
        dugme.onclick=(ev)=>{
            let ime=this.kontejner.querySelector(".ime").value;
            let prezime=this.kontejner.querySelector(".prezime").value;
            console.log(ime);
            console.log(prezime);
            console.log(unostermina.value);
            let tipusluge=this.kontejner.querySelector('input[name="usluga"]:checked').value;
           // let labusluga=this.kontejner.querySelector(".labelau");
            //console.log(labusluga);
            if(tipusluge==null ||ime==null || prezime==null)
            alert("Molimo Vas popunite sva polja za musteriju!");
            let imeprezime=ime+" "+prezime;
            let brtermina=parseInt(unostermina.value);
            //let vreme=parseInt(selH.value);
            //console.log(vreme);
            //let vreme=parseInt()
            console.log(tipusluge);
            if(this.termini[brtermina-1].tipusluge!=tipusluge && this.termini[brtermina-1].trenutno>0 )
            alert("Ovaj termin pripada drugom tipu usluge! Izaberite drugi termin.");

           
                else {
                    //let ip=imeprezime.value;
                    //let nova=this.termini.find(s=>s.musterije.includes("ip"));
                   let moguctermin=this.termini.find(s=>s.tipusluge==tipusluge && s.trenutno+1<=s.maxmusterija && s.brojTermina!=brtermina) ;



                if(moguctermin )
                alert("Postoji nepopunjen termin, njegov je broj "+moguctermin.brojTermina+".");
                else
                {
                fetch("https://localhost:5001/Salon/IzmeniTermin",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:this.termini[brtermina-1].id,
                    brojTermina:brtermina,
                    tipusluge:tipusluge,
                    trenutno:this.termini[brtermina-1].trenutno,
                    musterije:this.termini[brtermina-1].musterije+imeprezime,
                    maxmusterija:this.kapacitetTermina,
                })
            }).then(p=>{
                this.termini[brtermina-1].azurirajTermin(imeprezime,tipusluge);
            });
            }
        }
    }
        elLabela1=document.createElement("br");
        kont1.appendChild(elLabela1);

        //divU=document.createElement("div");
        //divU.className="oslobodi";
        elLabela1=document.createElement("label");
        elLabela1.innerHTML="Uneti broj termina:"
        kont1.appendChild(elLabela1);

        elLabela1=document.createElement("input");
        kont1.appendChild(elLabela1);
        elLabela1.className="oslobodi";
        elLabela1.name="oslobodi"
        elLabela1.type="number";
        kont1.appendChild(elLabela1);

        elLabela1=document.createElement("br");
        kont1.appendChild(elLabela1);

        const dugme2=document.createElement("button");
        dugme2.innerHTML="Oslobodite termin";
        kont1.appendChild(dugme2);

        dugme2.onclick=(ev)=>{

            let broj=this.kontejner.querySelector('input[name="oslobodi"]').value;
            console.log(broj);
            if(!this.termini[broj-1])
            alert("Termin ne postoji!");
            else if(this.termini[broj-1].trenutno==0)
            alert("Termin je već slobodan!");
            else
            {
                let novitermini=this.termini.filter(termin => termin.brojTermina==broj);
                novitermini.forEach(termin=>{
                    fetch("https://localhost:5001/Salon/IzmeniTermin/",{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:termin.id,
                    brojTermina:termin.brojTermina,
                    tipusluge:"",
                    musterije:"",
                    maxmusterija:this.kapacitetTermina,
                    trenutno:0,
                })
                     });
                })
                                   
            this.termini[broj-1].azurirajTermin("","");
            }   
        }
        elLabela1=document.createElement("br");
        kont1.appendChild(elLabela1);
        //kont1.appendChild(divU);
        let legenda=document.createElement("div");
        legenda.className="legenda";
        tipoviusluga.forEach((kvadrat,index)=>{
            let polje=document.createElement("div");
            polje.className="polje";
            let kvadratic=document.createElement("div");
            kvadratic.className="kvadratic";
            kvadratic.style.backgroundColor=boje[index];
            let labela=document.createElement("label");
            labela.innerHTML=kvadrat;

            polje.appendChild(kvadratic);
            polje.appendChild(labela);
            legenda.appendChild(polje);
            kont1.appendChild(legenda);
        })

    }

    crtajTermine(host){
        const kontTermini=document.createElement("div");
        kontTermini.className="kontTermini";
        host.appendChild(kontTermini);
        
        fetch("https://localhost:5001/Salon/PreuzmiTermine/"+this.id).then(p=>{
                p.json().then(data=>{
                    data.forEach(termin=>{
                    
                        let termin1=new Termin(termin.id,termin.brojTermina,termin.tipusluge,termin.maxmusterija,termin.vremetermina);
                        this.dodajTermin(termin1);
                        termin1.crtajTermin(kontTermini);
                        if(termin.musterije!=null)
                        termin1.azurirajTermin(termin.musterije,termin.tipusluge,termin.vremetermina);
                    })
                })
            });
    }
    crtajZaposlene()
    {
        let div=this.kontejner2.querySelector(".radnikk");
        fetch("https://localhost:5001/Salon/PreuzmiZaposlene/"+this.id).then(p=>{
                p.json().then(data=>{
                    data.forEach(radnik=>{
                        let zaposleni1=new Zaposleni(radnik.id,radnik.ime,radnik.prezime);
                        this.dodajZaposlenog(zaposleni1);
                        let label=document.createElement("label");
                        label.innerHTML=radnik.ime+" "+radnik.prezime;
                        div.appendChild(label);
                        let opcija=document.createElement("input");
                        opcija.type="radio";
                        opcija.name="radio";
                        opcija.className="izabrani";
                        opcija.value=label.innerHTML;
                        div.appendChild(opcija);
                    });
                });
            });
    }
}
