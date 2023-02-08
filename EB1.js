
//EB1 JS
//recuperer les donnees d'un API de l'id =0010024W
fetch("https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-dnma-par-uai-appareils&q=&facet=debutsemaine&facet=0010024W").then((data)=>{
        return data.json();
    }).then((objectData)=>{
     //console.log(objectData['records']) ; 
     let tab = [];
     const word="visites";    
     for (let i = 0; i <=1; i++) { 
               let Object1=objectData.records[i].fields;
               console.log(Object1);
               var s=0;
        for(var key of Object.keys(Object1)){//parcour  chaque  key de chaque objet pour tester si il conteinet un mot visites
              let position =key.indexOf(word);
              if(position===-1){//càd le key contient le mot "visites"
              console.log(position);}}
              let v = parseInt(Object1[key]);//je vais convertir chaque value string en entier 
              s=s+v;}//faire la somme des visites
              //console.log(typeof(v));:: pour verifier le type
            console.log(s)
              
            
         /* console.log(s); 
         
         let info = new Object();
         info.nbr_visite = s;
         info.date = Object1.debutsemaine;
        console.log(info);


        // Tri les données selon le nombre de visites
        info.sort((a, b) => b.s - a.s);

          // Prendre les 3 premières semaines avec le plus grand nombre de visites*/
       

       
                
                 
            
    });
                                          
                             //console.log(objectData.records[i].fields[10])