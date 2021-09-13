import { Salon } from "./salon.js";
export class Termin
{
    constructor(id,brojTermina,tipusluge,maxmusterija,vremetermina) 
    {
        this.id = id;
        this.brojTermina = brojTermina;
        this.tipusluge = tipusluge;
        this.trenutno=0;
        this.maxmusterija=maxmusterija;
        this.vremetermina=0;
        this.musterije = "";
        this.miniKont1 = null;
        this.bojatermina= this.vratiBoju();
    }

    dodajMusteriju(imeprezime)
    {
        this.musterije+=" "+imeprezime;
    }
    vratiBoju()
    {
        if(this.tipusluge==null)
        return "#bd998c";
        else
        return this.tipusluge.value;
    }
    /*crtajTermin(host)
    {
        this.miniKont1=document.createElement("div");
        this.miniKont1.className="termin";
        this.miniKont1.innerHTML="Termin u z "+ this.vremetermina +":00 je slobodan";
        fetch("https://localhost:5001/Salon/PreuzmiSalone").then(res=>{
            if(res.status==200)
            {
            res.json().then(data=>{
                //let index=0;
                //let niz=[];
                data.forEach(salon => {                  
                    const salon1=salon.id;
                    //niz[index]=salon1;
                    //index++;
                    //console.log(niz);
                    //const salon1=new Salon(salon.id,salon.naziv,salon.ukupnoTermina,salon.pocetakrada,salon.krajrada,salon.uSmeni);
                    console.log(salon1);    
                        fetch("https://localhost:5001/Salon/PreuzmiTermine/"+salon1).then(p=>{
                
                        p.json().then(data1=>{

                        data1.forEach(termin=>{              
                            let termin1=new Termin(termin.id,termin.brojTermina,termin.tipusluge,termin.maxmusterij,termin.vremetermina);
                            console.log(termin.tipusluge)
                            if(termin1)
                            this.miniKont1.style.backgroundColor="red";
                            else
                            this.miniKont1.style.backgroundColor="green";
                            console.log(termin1);
                            //this.miniKont1.style.backgroundColor=termin.tipusluge;
                            host.appendChild(this.miniKont1);
                        })
                    });
                });
                              
                
            });
        
        });
    }
    });
}*/
crtajTermin(host)
{
    this.miniKont1=document.createElement("div");
    this.miniKont1.className="termin";
    this.miniKont1.innerHTML="Termin  broj"+ this.brojTermina +" je slobodan";
    this.miniKont1.style.backgroundColor=this.vratiBoju();
    host.appendChild(this.miniKont1);
}


    azurirajTermin(imeprezime,tipusluge){
        if(imeprezime=="")
        {
            this.musterije="";
            this.trenutno=0;
            this.bojatermina=null;
            this.miniKont1.innerHTML="Termin broj"+ this.brojTermina +" je slobodan";
            this.miniKont1.style.backgroundColor="#bd998c";
            //this.miniKont1.style.backgroundColor="green";
        }
        else 
        {
            console.log(this.trenutno);
            console.log(this.maxmusterija);
            var temp=this.trenutno;
            if (this.trenutno+1>this.maxmusterija)
            alert("Kapacitet je popunjen!");
        else
            {
                this.musterije+=" "+imeprezime;
                this.tipusluge=tipusluge;
                this.trenutno++;
                //this.bojatermina=tipusluge;
                this.miniKont1.innerHTML="Termin " + this.brojTermina+" \nMusterije:\n"+this.musterije+"Ukupno u terminu:\n"+this.trenutno;
                //this.miniKont1.innerHTML="Termin " + this.brojTermina+" \nMusterije:\n"+this.musterije+"Ukupno u terminu:\n"+this.trenutno+"\n"+"Maximalno musterija:"+this.maxmusterija;
                this.miniKont1.style.backgroundColor=tipusluge;
                console.log(tipusluge);
                console.log(this.trenutno);
                console.log(this.maxmusterija);
                console.log(temp);
            }
        if(this.trenutno==this.maxmusterija)
            this.miniKont1.style.backgroundColor="#660000";
        }
    }
}