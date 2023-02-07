fetch("https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-dnma-par-uai-appareils&q=0010024W&rows=10&facet=debutsemaine&facet=uai&refine.uai=0010024W").then((data)=>{
        return data.json();
    }).then((objectData)=>{

    let groupBy = document.getElementById("groupBy").value;
    //console.log(groupBy);
    //console.log(objectData)
   let result = {};
    if (groupBy === "year") {
    for (let i = 0; i <1; i++) {
    let Object1=objectData.records[i].fields;
    for(const key of Object.keys(Object1)){
        //let date =Date.parse(Object.values(Object1.debutsemaine));
        let date = new Date(Object1.debutsemaine);
        let year = date.getFullYear();
        //console.log(typeof(date))
        console.log(year)
        //if (result[year] === undefined) {
        //  result[year] = [];
        }
        //result[year].push(data[i]);
      }}
      else if (groupBy === "month") {
      for (const key of Object.keys(Object1)) {
        let date = new Date(Object1.debutsemaine);
        let year = date.getFullYear();
        let month = date.getMonth();
        if (result[year] === undefined) {
          result[year] = {};
        }
        if (result[year][month] === undefined) {
          result[year][month] = [];
        }
        result[year][month].push(data[i]);
      }
    }


});
