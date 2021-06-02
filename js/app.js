// --- Events ---
// une liste d'évènements est mise à disposition par JS et le navigateur
// par exemple, l'évènement "click"
// Quand l'évènement arrive/survient, JS exécute toutes les fonctions attachées à cet évènement
// => l'exécution de la fonction attachée est désynchronisée

// On place notre code dans un module
const app = {
    // Propriété "counter"
    currentQuoteIndex: 0,
    // je récupère mon élément contenant la citation
    quoteElement: document.getElementById('quote'),
    // je récupère mon élément contenant l'auteur
    authorElement: document.getElementById('author'),
    // Méthode appelée au chargement du DOM
    init: function() {
        // attache la méthode app.handleClickOnDisplayAddFormButton à l'évènement "click" sur le bouton "ajouter une citation"
        document.getElementById('btnDisplayAddForm').addEventListener('click', app.handleClickOnDisplayAddFormButton);

        // TODO affiche la première citation de fail
        // j'écrase le contenue texte de mon élément par la 1ère citation contenue dans le module quotes
        app.quoteElement.textContent = quotes[0].quote;
        // je fais pareil pour l'auteur
        app.authorElement.textContent = quotes[0].author;

        // TODO attache la méthode app.handleClickOnNextButton à l'évènement "click" sur le bouton "affiche la citation suivante"
        document.getElementById('nav-next').addEventListener('click', app.handleClickOnNextButton);
        // TODO attache la méthode app.handleClickOnPreviousButton à l'évènement "click" sur le bouton "affiche la citation précédente"
        document.getElementById('nav-prev').addEventListener('click', app.handleClickOnPreviousButton);
        // TODO attache la méthode app.handleClickOnLastButton à l'évènement "click" sur le bouton "affiche la dernière citation"
        document.getElementById('nav-last').addEventListener('click', app.handleClickOnLastButton);
    },
    // Méthode gérant le click pour afficher le form d'ajout
    handleClickOnDisplayAddFormButton: function(evt) {
        console.log('click to display form');

        document.getElementById('divAddQuote').classList.remove('d-none');
    },
    // Méthode permettant de modifier le DOM pour afficher la quote "courante"
    displayCurrentQuote: function() {
        // TODO se baser sur app.currentQuoteIndex pour afficher la quote "courante"
        app.quoteElement.textContent = quotes[app.currentQuoteIndex].quote;
        app.authorElement.textContent = quotes[app.currentQuoteIndex].author;
    },
    // Je crée une méthode dédiée à la gestion du click sur le bouton "Next"
    handleClickOnNextButton: function() {
      console.log('click on next');

      if(app.currentQuoteIndex < quotes.length - 1) {
        app.currentQuoteIndex++;
        app.displayCurrentQuote();
      }

    },
    // Je crée une méthode dédiée à la gestion du click sur le bouton "Previous"
    handleClickOnPreviousButton: function() {
        console.log('click on previous');
  
        if(app.currentQuoteIndex > 0) {
          app.currentQuoteIndex--;
          app.displayCurrentQuote();
        }
    },
    // Je crée une méthode dédiée à la gestion du click sur le bouton "Last"
    handleClickOnLastButton: function() {
      console.log('click on last');

      if(app.currentQuoteIndex != quotes.length - 1) {
        app.currentQuoteIndex = quotes.length - 1;
        app.displayCurrentQuote();
      }
    }
  };
  
  // Appel "synchronisé" de la méthode init
  // app.init();
  
  // Permet d'exécuter notre code une fois le DOM chargé
  // => lorsque l'event DOMContentLoaded survient => la méthode app.init est appelée
  // donc app.init n'est pas exécuter lorsque JS lit cette ligne de code
  document.addEventListener('DOMContentLoaded', app.init); // ici, ne jamais mettre les (), sinon, la fonction/méthode sera aussitôt exécutée
  
  // Attention à la syntaxe, on ne doit pas mettre les () après la fonction, sinon elle est appelée aussitôt
  // Explications :
  // envoie de l'eau, au lancement du détecteur
  // document.addEventListener('fuméeDetectée', envoyerDeLeau());
  // Lorsque de la fumée sera détectée, envoie de l'eau
  // document.addEventListener('fuméeDetectée', envoyerDeLeau);