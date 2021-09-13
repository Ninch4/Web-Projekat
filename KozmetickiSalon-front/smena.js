export class Smena{
    constructor(id,brojSmene,broj)
    {
        this.id=id;
        this.broj=broj; 
        this.brojSmene=brojSmene;
        this.zaposleni=null;
        this.boja=this.vratiBoju();
    }
    dodajZaposlenog(imeprezime)
    {
        this.zaposleni= imeprezime;
    }
    vratiBoju()
    {
        if(this.zaposleni==null)
        return "#e0a4a5";
        else if(this.brojSmene==1)
        return "#FAF7A3";
        else if(this.brojSmene==2)
        return "#A3A9FA";
    }
    crtajSmenu(host)
    {
        this.miniKont1=document.createElement("div");
        this.miniKont1.className="smena";
        this.miniKont1.innerHTML="Smena "+this.broj;
        this.miniKont1.style.backgroundColor=this.vratiBoju();
        host.appendChild(this.miniKont1);
    }
    azurirajSmenu(zaposleni,brojSmene){
        if(zaposleni==null)
        {
            brojSmene=0;
            this.miniKont1.innerHTML="";
            this.miniKont1.style.backgroundColor=this.vratiBoju();
        }
        else 
        {
        this.brojSmene=brojSmene;
        this.dodajZaposlenog(zaposleni);
        if(brojSmene==1)
        this.miniKont1.innerHTML=this.zaposleni+" - Prepodnevna smena";
        else
        this.miniKont1.innerHTML=this.zaposleni+" - Popodnevna smena";
        this.miniKont1.style.backgroundColor=this.vratiBoju();
        }
        }
}