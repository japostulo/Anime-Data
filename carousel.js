
//CRIANDO UM CAROUSEL PASSANDO UM ARRAY (NORMALMENTE PASSANDO UM ARRAY TRABALHADO).
function createCarousel(array,idAppend,titleParameter){
  //FUNÇÃO DE INICIALIZAÇÃO DO TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

var idNotDefined = "naoSei";

//CRIANDO O TITULO DO CAROUSEL
var rowTitle = document.createElement("div");
rowTitle.setAttribute("class","row");
var colTitle = document.createElement("div");
colTitle.setAttribute("class","col");
var titleCarousel = document.createElement("h3");
titleCarousel.setAttribute("class","p-0 mb-0");
titleCarousel.innerHTML=titleParameter;


//CRIANDO O CAROUSEL
var slider = document.createElement("div");
slider.setAttribute("class","owl-carousel owl-theme");
slider.setAttribute("id",idNotDefined);
// slider.setAttribute("onmouseover","properties(this.id)");
// slider.setAttribute("onmouseout","removeProperties(this.id)");
// var btnNext = document.createElement("span");
// btnNext.setAttribute("class","bg-dark");
// btnNext.setAttribute("onclick","a()");
// btnNext.innerHTML=">>>>"
//
// var btnPrev = document.createElement("span");
// btnPrev.setAttribute("class","bg-dark");
// btnPrev.innerHTML="<<<<"

//CRIANDO OS CARDS
array.forEach((item,i) => {
var card = document.createElement("div");
card.setAttribute("class","item card d-inline-flex md-auto rounded shadow position-relative");
card.setAttribute("style","width:15rem;height:23rem;z-index:1;");
card.setAttribute("id",item.mal_id);

var imageCard = document.createElement("img");
imageCard.setAttribute("class","card-img-top");
imageCard.setAttribute("src",item.image_url);
imageCard.setAttribute("style","height:18rem");

var cardBody = document.createElement("div");
cardBody.setAttribute("class","card-body d-flex align-items-center justify-content-center p-0");
cardBody.setAttribute("style","");

var titulo = item.title;
for(var cont=0;cont<titulo.length - 1;cont++){
  if(titulo.includes(' ')){
    titulo = titulo.replace(' ', '-');
  }
  if(titulo.charAt(cont)==":"){
    titulo = titulo.substring(0,cont)+titulo.substring(cont+1,titulo.length);
  }
}

var title = document.createElement("p");
title.setAttribute("class","card-title mt-2 text-center m-0");
title.setAttribute("data-toggle","tooltip");
title.setAttribute("data-placement","bottom");
title.setAttribute("data-original-title","Copiar Titulo");
title.setAttribute("onclick","tooltipCopy(this)");
title.setAttribute("id","t"+titulo);
title.setAttribute("data-clipboard-text",item.title);
title.innerHTML=item.title;
new ClipboardJS('#t'+titulo);
//FIM CRIANDO CARD

if(item.score !=null){
  var badge = document.createElement("span");
  badge.setAttribute("class","badge badge-primary position-absolute p-1 rounded");
  badge.innerHTML="Score: "+item.score;
  card.append(badge);
}
//dando append titulo > col > rol.
rowTitle.append(colTitle);
colTitle.append(titleCarousel);

slider.append(card);
card.append(imageCard);
card.append(cardBody);
cardBody.append(title);

});
document.getElementById(idAppend).append(rowTitle);
document.getElementById(idAppend).append(slider);

 var owl = $('.owl-carousel');
 console.log(owl);
 owl.owlCarousel({
    loop:true,
    nav:true,
    items:7,
    nav:false,
    navElement:"span",
    itemElement:"span",
    responsive: {
      0: {
        items:1
      },
      600: {
        items:2
      },
      800:{
        items:3
      },
      1000: {
        items:4
      },
      1100:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:6
      }
    }
  });
}

function tooltipCopy(a){
  $('#'+a.id).attr("title", "Copiado!").tooltip('_fixTitle').tooltip('show').attr("title", "Copiar titulo").tooltip('_fixTitle');
}
async function carousel(search,idAppend,title){
  var url = "https://api.jikan.moe/v3/search/anime?q="+search;
  var data = await fetch(url, {method: 'GET'})
  .then(response => response.json())
  .catch(error => error);

createCarousel(search.top,idAppend,title);
}
