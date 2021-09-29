import { Salon } from "./salon.js"


const main=document.createElement("div");
main.className="bod";
document.body.appendChild(main);


const kontejner1 = document.createElement("div");
kontejner1.className="main";
main.appendChild(kontejner1);

let label=document.createElement("h2");
label.innerHTML="Unos i brisanje salona";
kontejner1.appendChild(label);

label=document.createElement("label");
label.innerHTML="Uneti naziv salona: ";
kontejner1.appendChild(label);

let input = document.createElement("input");
input.className="imesalona";
kontejner1.appendChild(input);

label = document.createElement("br");
kontejner1.appendChild(label);

label=document.createElement("label");
label.innerHTML="Uneti broj termina salona: ";
kontejner1.appendChild(label);

input = document.createElement("input");
input.className="brojtermina";
input.type="number";
kontejner1.appendChild(input);

label = document.createElement("br");
kontejner1.appendChild(label);

label=document.createElement("label");
label.innerHTML="Uneti kapacitet termina u salonu: ";
kontejner1.appendChild(label);
input = document.createElement("input");
input.className="kapacitetTermina";
input.type="number";
kontejner1.appendChild(input);
label = document.createElement("br");
kontejner1.appendChild(label);

label=document.createElement("label");
label.innerHTML="Uneti broj smena salona: ";
kontejner1.appendChild(label);

input = document.createElement("input");
input.className="brojSmena";
input.type="number";
kontejner1.appendChild(input);

label = document.createElement("br");
kontejner1.appendChild(label);

const dodaj=document.createElement("button");
dodaj.innerHTML="Dodaj salon";
kontejner1.appendChild(dodaj);

dodaj.onclick=(ev)=>{
    let ime =kontejner1.querySelector(".imesalona").value;
    let brt=kontejner1.querySelector(".brojtermina").value;
    let kap=kontejner1.querySelector(".kapacitetTermina").value;
    let brsm=kontejner1.querySelector(".brojSmena").value;


fetch("https://localhost:5001/Salon/UpisiSalon",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        naziv:ime,
        ukupnotermina:brt,     
        uSmeni:brsm,
        kapacitetTermina:kap,
    })
});

}
label = document.createElement("br");
kontejner1.appendChild(label);

label = document.createElement("label");
label.innerHTML="Uneti ID salona koji se iscrtava";
//label.innerHTML="Uneti ID salona koji se iscrtava";

kontejner1.appendChild(label);

label=document.createElement("br");
kontejner1.appendChild(label);

input = document.createElement("input");
input.className="idsalona";
input.type="number";
kontejner1.appendChild(input);

label = document.createElement("br");
kontejner1.appendChild(label);

const dodaj2=document.createElement("button");
dodaj2.innerHTML="Nacrtaj termine i smene";
kontejner1.appendChild(dodaj2);

dodaj2.onclick=(ev)=>{

    let brt=kontejner1.querySelector(".brojtermina").value; 
    let kap=kontejner1.querySelector(".kapacitetTermina").value;
    console.log(brt);
    let brsm=kontejner1.querySelector(".brojSmena").value;
    let id=kontejner1.querySelector(".idsalona").value; 

for(let i=0;i<brt;i++)

fetch("https://localhost:5001/Salon/UpisiTermin/"+id,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        brojTermina:i+1,
        tipusluge:"",
        maxmusterija:kap,
        vremetermina:i+1,
       
    })
});
for(let j=0;j<brsm;j++)
fetch("https://localhost:5001/Salon/UpisiSmenu/"+id,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        brojSmene:0,
        broj:j+1,
    })
});
//location.reload();
}


const kontejner2=document.createElement("div");
kontejner2.className="main";
main.appendChild(kontejner2);
label=document.createElement("h2");
label.innerHTML="Brisanje salona";
kontejner2.appendChild(label);
label=document.createElement("label");
label.innerHTML="Uneti ID salona: ";
kontejner2.appendChild(label);
input = document.createElement("input");
input.className="id1";
input.type="number";
kontejner2.appendChild(input);
label = document.createElement("br");
kontejner2.appendChild(label);
const izbrisi=document.createElement("button");
izbrisi.innerHTML="Izbriši salon";
kontejner2.appendChild(izbrisi);
izbrisi.onclick=(ev)=>{
    let id=document.querySelector(".id1").value;
    fetch("https://localhost:5001/Salon/IzbrisiSalon?id="+id,{method:"DELETE"}).then(p=>{if(p.ok){location.reload();}});
}
label = document.createElement("br");
kontejner2.appendChild(label);
label=document.createElement("h2");
label.innerHTML="Crtanje salona";
kontejner2.appendChild(label);
const crtaj=document.createElement("button");
crtaj.innerHTML="Crtaj salone";
kontejner2.appendChild(crtaj);
crtaj.onclick=(ev)=>
{
fetch("https://localhost:5001/Salon/PreuzmiSalone").then(p=>{
    p.json().then(data=>{
        data.forEach(salon => {
           const salon1=new Salon(salon.id,salon.naziv,salon.ukupnoTermina,salon.uSmeni,salon.kapacitetTermina);
            
            salon1.crtajSalon(document.body);
            salon1.termini.forEach(termin=>{
                var t=termin;
                    t.azurirajTermin(termin.musterije,termin.tipusluge);
                
            });

            salon1.smene.forEach(smena=>{
                var s=salon1.smene[smena.broj-1];
                    s.azurirajSmenu(smena.zaposleni,smena.brojSmene);
            });

        });
    });
});
}

const kontejner3 = document.createElement("div");
kontejner3.className="main";
main.appendChild(kontejner3);
label=document.createElement("h2");
label.innerHTML="Ažuriranje salona";
kontejner3.appendChild(label);
label=document.createElement("label");
label.innerHTML="Uneti ID salona: ";
kontejner3.appendChild(label);
input = document.createElement("input");
input.className="id2";
input.type="number";
kontejner3.appendChild(input);
label = document.createElement("br");
kontejner3.appendChild(label);
label=document.createElement("label");
label.innerHTML="Uneti naziv salona: ";
kontejner3.appendChild(label);
input = document.createElement("input");
input.className="imeSalona2";
kontejner3.appendChild(input);
label = document.createElement("br");
kontejner3.appendChild(label);
label=document.createElement("label");
label.innerHTML="Uneti broj termina salona: ";
kontejner3.appendChild(label);
input = document.createElement("input");
input.className="brojTermina2";
input.type="number";
kontejner3.appendChild(input);
label = document.createElement("br");
kontejner3.appendChild(label);
label=document.createElement("label");
label.innerHTML="Uneti kapacitet termina salona: ";
kontejner3.appendChild(label);
input = document.createElement("input");
input.className="kapacitetTermina2";
input.type="number";
kontejner3.appendChild(input);
label = document.createElement("br");
kontejner3.appendChild(label);
label=document.createElement("label");
label.innerHTML="Uneti broj smena salona: ";
kontejner3.appendChild(label);
input = document.createElement("input");
input.className="brojSmena2";
input.type="number";
kontejner3.appendChild(input);
label = document.createElement("br");
kontejner3.appendChild(label);
const azuriraj=document.createElement("button");
azuriraj.innerHTML="Ažuriraj salon";
kontejner3.appendChild(azuriraj);
azuriraj.onclick=(ev)=>
{
    let id,ime,brs,kap,brsm;
        id=kontejner3.querySelector(".id2").value;
        ime=kontejner3.querySelector(".imeSalona2").value;
        brs=kontejner3.querySelector(".brojTermina2").value;
        kap=kontejner3.querySelector(".kapacitetTermina2").value;
        brsm=kontejner3.querySelector(".brojSmena2").value;
    fetch("https://localhost:5001/Salon/IzmeniSalon",{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id:id,
            naziv:ime,
            ukupnoTermina:brs,
            uSmeni:brsm,
            kapacitetTermina:kap,

        })
    });
}

label = document.createElement("br");
kontejner3.appendChild(label);

const dodaj3=document.createElement("button");
dodaj3.innerHTML="Nacrtaj termine i smene";
kontejner3.appendChild(dodaj3);

dodaj3.onclick=(ev)=>{

    let brt=kontejner3.querySelector(".brojTermina2").value; 
    let kap=kontejner3.querySelector(".kapacitetTermina2").value;
    console.log(brt);
    let brsm=kontejner3.querySelector(".brojSmena2").value;
    let id=kontejner3.querySelector(".id2").value; 
    //let poc=kontejner3.querySelector(".pocetak").value;
    //let kraj=kontejner3.querySelector(".kraj").value;

for(let i=0;i<brt;i++)

fetch("https://localhost:5001/Salon/UpisiTermin/"+id,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        brojTermina:i+1,
        tipusluge:"",
        maxmusterija:kap,
        vremetermina:i+1,
       
    })
});
for(let j=0;j<brsm;j++)
fetch("https://localhost:5001/Salon/UpisiSmenu/"+id,{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        brojSmene:0,
        broj:j+1,
    })
});
location.reload();
}
    
    //window.location.reload();
//}

//glavni.appendChild(kontejner2);
/*fetch("https://localhost:5001/Salon/PreuzmiSalone").then(p => {
    p.json().then(data => {
        data.forEach(salon => {
            const s = new Salon(salon.id, salon.naziv,salon.brojtermina,salon.pocetakrada,salon.krajrada);
            s.crtajSalon(document.body);
            })
        });
 });*/