const api_data="https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-dnma-par-uai-appareils&q=&facet=debutsemaine&facet=uai&refine.uai=0010024W";

const getData =async ()=>{
      const res =await fetch(api_data);
      const data=await res.json();
      return data
}

const displayWeek =async() =>{
 const payload = await getData();
let variable=payload.records;
let dataDisplay=variable.map((object)=>{

 let s= function somme(){
      
      return s;

 };

 
 let info = new Object();
 info.nbr_visite = s;
 info.semaine = object.fields.debutsemaine;
console.log(info);

 

});
}
displayWeek();