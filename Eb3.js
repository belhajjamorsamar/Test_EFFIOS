let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let uai = form.elements.UAI.value;
  console.log(uai);
  let year = form.elements.year.value;
  let apiUrl="https://data.education.gouv.fr/explore/dataset/fr-en-dnma-par-uai-appareils/api/?refine.debutsemaine="+year+"&refine.uai="+  uai;
  year;
  fetch(apiUrl)
  
    .then(response => response.json())
    .then(data => {
      
      // Parser les données ici pour extraire les informations nécessaires
      let records = data.records;
      let tabletVisits = [];
      let smartphoneVisits = [];
      let computerVisits = [];
      records.forEach(record => {
        let month = record.fields.mois;
        let tablet = record.fields.tablette;
        let smartphone = record.fields.smart
      });

      // Affichage du graphique ici
      
    });
});