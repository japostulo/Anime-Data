
//CRIANDO UM CAROUSEL PASSANDO UM ARRAY (NORMALMENTE PASSANDO UM ARRAY TRABALHADO).
var qtdCarousel = 0;
function createCarousel(array,idAppend,titleParameter){
  //FUNÇÃO DE INICIALIZAÇÃO DO TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

qtdCarousel+=1;
//CRIANDO O TITULO DO CAROUSEL
var rowTitle = document.createElement("div");
rowTitle.setAttribute("class","row");
var colTitle = document.createElement("div");
colTitle.setAttribute("class","col");
var titleCarousel = document.createElement("h3");
titleCarousel.setAttribute("class","p-0 mb-0");
titleCarousel.setAttribute("style","color:#001829;");
titleCarousel.innerHTML=titleParameter;

//CRIANDO O CAROUSEL
var slider = document.createElement("div");
slider.setAttribute("class","carousel"+qtdCarousel+" owl-carousel owl-theme text-center");

//CRIAÇÃO DOS BOTÕES DO CAROUSEL
var divNext = document.createElement("div");
divNext.setAttribute("class","btnCarousel position-absolute d-flex align-items-center h-100");
divNext.setAttribute("style","right:0;top:0;");
divNext.setAttribute("id",'Next'+qtdCarousel);
divNext.setAttribute("onclick","next()");

iconNext = document.createElement("span");
iconNext.setAttribute("class","fa fa-3x fa-arrow-circle-right p-2");
iconNext.setAttribute("style","opacity: 0.8;");
divNext.append(iconNext);

var divPrev = document.createElement("div");
divPrev.setAttribute("class","btnCarousel position-absolute d-flex align-items-center h-100");
divPrev.setAttribute("style","left:0;top:0");
divPrev.setAttribute("id",'Prev'+qtdCarousel);

iconPrev = document.createElement("span");
iconPrev.setAttribute("class","fa fa-3x fa-arrow-circle-left p-2");
iconPrev.setAttribute("style","opacity: 0.8;");
divPrev.append(iconPrev);
//FIM DA CRIAÇÃO DOS BOTÕES

//CRIANDO OS CARDS
array.forEach((item,i) => {
var card = document.createElement("div");
card.setAttribute("class","item card d-inline-flex md-auto rounded shadow-lg border");
card.setAttribute("style","width:13rem;height:18rem;z-index:1;");
card.setAttribute("id",item.mal_id);

var imageCard = document.createElement("img");
imageCard.setAttribute("class","card-img-top");
imageCard.setAttribute("src",item.image_url);
imageCard.setAttribute("style","height:15rem");

  if(titleParameter=="Animes mais assistidos"){
    var rank = document.createElement("span");
    rank.setAttribute("class","position-absolute");
    // rank.setAttribute("style","right:10px;top:-5px;border-radius:0 0px 20px 20px"); style de cartão
    rank.setAttribute("style","right:0px;top:0px; width: 0;height: 0;border-top: 30px solid #007bff;border-right: 30px solid #007bff;border-bottom:30px solid transparent;border-left: 30px solid transparent;");
    card.append(rank);

    var numberRANK = document.createElement("span");
    numberRANK.setAttribute("class","position-absolute text-white h1");
    numberRANK.setAttribute("style","right:5px;top:-10px;font-family: 'Tangerine', serif;");
    numberRANK.innerHTML=(i+1);
    card.append(numberRANK);
  }

var cardBody = document.createElement("div");
cardBody.setAttribute("class","card-body d-flex align-items-center justify-content-center p-0");
cardBody.setAttribute("style","");

var title = document.createElement("p");
title.setAttribute("class","card-title mt-2 text-center m-0");
title.setAttribute("data-toggle","tooltip");
title.setAttribute("data-placement","top");
title.setAttribute("data-original-title","Copiar Titulo");
title.setAttribute("onclick","tooltipCopy(this)");
title.setAttribute("id","t"+item.mal_id);
title.setAttribute("data-clipboard-text",item.title);
title.innerHTML=item.title;
new ClipboardJS('#t'+item.mal_id);
//FIM CRIANDO CARD

if(item.score !=null){
  if(titleParameter!="Animes mais assistidos"){
    var badge = document.createElement("span");
    badge.setAttribute("class","badge badge-primary position-absolute p-1 rounded");
    badge.innerHTML="Score: "+item.score;
    card.append(badge);
  }
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
 var owl = $('.carousel'+qtdCarousel);
 console.log(owl);
 owl.owlCarousel({
    loop:true,
    items:7,
    nav:false,
    dots:false,
    dotsEach:false,
    dotsData:false,
    animateIn:true,
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
        items:5
      }
    }
  });

  slider.append(divPrev);
  slider.append(divNext);
  $('#Next'+qtdCarousel).click(function() {
      owl.trigger('next.owl.carousel');
  });
  $('#Prev'+qtdCarousel).click(function() {
    console.log(owl.trigger('prev.owl.carousel'));
      owl.trigger('prev.owl.carousel');
  });
}

function tooltipCopy(a){
  console.log(a.id);
  // $('.card-title').attr("title", "Copiado!").tooltip('_fixTitle').tooltip('show').attr("title", "Copiar titulo").tooltip('_fixTitle');
  $('.card-title').attr("title", "Copiado!").tooltip('_fixTitle');
  $('#'+a.id).tooltip('show');
  $('.card-title').attr("title", "Copiar titulo").tooltip('_fixTitle');
}
function a(){

}

function createCardSearch(array, idAppend, titleS){
  document.getElementById(idAppend).innerHTML="";

//CRIANDO O TÍTULO DO CONTAINER
  var rowTitle = document.createElement("div");
  rowTitle.setAttribute("class","row");
  var colTitle = document.createElement("div");
  colTitle.setAttribute("class","col");
  var titleSearch = document.createElement("h3");
  titleSearch.setAttribute("class","p-0 mb-0");
  titleSearch.innerHTML=titleS;
  colTitle.append(titleSearch);
  rowTitle.append(colTitle);
  document.getElementById(idAppend).append(rowTitle);

//PEQUISA LIMITADA À 10 ITENS, CRIANDO DUAS LINHAS COM 5 CARD/5 COLS
  var line1 = document.createElement("div");
  line1.setAttribute("class","row mt-2 d-flex justify-content-center");
  document.getElementById(idAppend).append(line1);

  var line2 = document.createElement("div");
  line2.setAttribute("class","row mt-4 d-flex justify-content-center");
  document.getElementById(idAppend).append(line2);


  array.forEach((item,i) => {
  var card = document.createElement("div");
  card.setAttribute("class","item card d-inline-flex m-2 rounded shadow-lg border");
  card.setAttribute("style","width:13rem;height:18rem;z-index:1;");
  card.setAttribute("id",item.mal_id);

  var imageCard = document.createElement("img");
  imageCard.setAttribute("class","card-img-top");
  imageCard.setAttribute("src",item.image_url);
  imageCard.setAttribute("style","height:15rem");

  var cardBody = document.createElement("div");
  cardBody.setAttribute("class","card-body d-flex align-items-center justify-content-center p-0");
  cardBody.setAttribute("style","");

  var title = document.createElement("p");
  title.setAttribute("class","card-title mt-2 text-center m-0");
  title.setAttribute("data-toggle","tooltip");
  title.setAttribute("data-placement","bottom");
  title.setAttribute("data-original-title","Copiar Titulo");
  title.setAttribute("onclick","tooltipCopy(this)");
  title.setAttribute("id","t"+item.mal_id);
  title.setAttribute("data-clipboard-text",item.title);
  title.innerHTML=item.title;
  new ClipboardJS('#t'+item.mal_id);
  //FIM CRIANDO CARD

  if(item.score !=null){
    var badge = document.createElement("span");
    badge.setAttribute("class","badge badge-primary position-absolute p-1 rounded");
    badge.innerHTML="Score: "+item.score;
    card.append(badge);
  }

  card.append(imageCard);
  card.append(cardBody);
  cardBody.append(title);

  if(i<5){
    line1.append(card);
  }else{
    if(i>=5){
      line2.append(card);
    }
  }
  });

}
function next(){

}
