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

      let somme=0;
      word="visites"
      let keys= Object.keys(object.fields);
      for (let i in keys.length){
       let position=i.indexOf(word);
       if (position===0){
       let v = parseInt(object.fields[i]);
       somme=somme+v;
      
       
       }

      };
  
  
      return somme;

  };
     const weekData = [];
     let info = new Object();
     info.nbr_visite =10 ;
     info.semaine = object.fields.debutsemaine;
     weekData.push({info});
     
     // Trier le tableau en fonction du nombre de visites
     weekData.sort((a, b) => b.info.semaine - a.info.semaine);

     // Extraire les 3 premières semaines ayant le plus grand nombre de visites
     const top3Weeks = weekData.slice(0, 3);
     tableData+=`
     <tr>
     <td>14416884</td>
     <td>${top3Weeks.semaine}</td>
     </td>${top3Weeks.nbr_visite}</td>
     </tr>`
});
document.getElementById("table_body").innerHTML=tableData;
} 
displayWeek();