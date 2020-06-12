var idCarousel = 0;

var arrayScroll=[];
//CRIANDO UM CAROUSEL PASSANDO UM ARRAY (NORMALMENTE PASSANDO UM ARRAY TRABALHADO).
function createCarousel(array,idAppend,titleParameter){
  //DEFINE SE VAI TER BADGE TRIANGULAR COM RANK OU NÃO, DEFAULT = FALSE;
  var ranker=false;
  //FUNÇÃO DE INICIALIZAÇÃO DO TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
idCarousel+=1;

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
slider.setAttribute("class","carousel"+idCarousel+" owl-carousel owl-theme text-center");

//CRIAÇÃO DOS BOTÕES DO CAROUSEL
var divNext = document.createElement("div");
divNext.setAttribute("class","btnCarousel position-absolute d-flex align-items-center mt-4");
divNext.setAttribute("style","right:0;top:0;height:16rem");
divNext.setAttribute("id",'Next'+idCarousel);

iconNext = document.createElement("span");
iconNext.setAttribute("class","fa fa-3x fa-arrow-circle-right p-1");
iconNext.setAttribute("style","opacity: 0.8;");
divNext.append(iconNext);

var divPrev = document.createElement("div");
divPrev.setAttribute("class","btnCarousel position-absolute d-flex align-items-center mt-4");
divPrev.setAttribute("style","left:0;top:0;height:16rem;");
divPrev.setAttribute("id",'Prev'+idCarousel);

iconPrev = document.createElement("span");
iconPrev.setAttribute("class","fa fa-3x fa-arrow-circle-left p-1");
iconPrev.setAttribute("style","opacity: 0.8;");
divPrev.append(iconPrev);
//FIM DA CRIAÇÃO DOS BOTÕES

if(titleParameter=="Animes mais assistidos"){
  ranker=true;
}
// Para cada card criado, dar um append na div do carousel
createCard(array,ranker).forEach((card, i) => {
  slider.append(card);
});

//dando append titulo > col > rol.
rowTitle.append(colTitle);
colTitle.append(titleCarousel);

document.getElementById(idAppend).append(rowTitle);
document.getElementById(idAppend).append(slider);
 var owl = $('.carousel'+idCarousel);
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
  $('#Next'+idCarousel).click(function() {
      owl.trigger('next.owl.carousel');
  });
  $('#Prev'+idCarousel).click(function() {
      owl.trigger('prev.owl.carousel');
  });
}

function tooltipCopy(a){
  // $('.card-title').attr("title", "Copiado!").tooltip('_fixTitle').tooltip('show').attr("title", "Copiar titulo").tooltip('_fixTitle');
  $('.card-title').attr("title", "Copiado!").tooltip('_fixTitle');
  $('#'+a.id).tooltip('show');
  $('.card-title').attr("title", "Clique para copiar o título").tooltip('_fixTitle');
}

function setSearchArea(array, idAppend, titleS){
  //limpando o conteúdo da pesquisa anterior
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

  var cardContainer = document.createElement("div");
  cardContainer.setAttribute("class","row mt-2 d-flex justify-content-center");
  cardContainer.setAttribute("id","cardAppend");
  document.getElementById(idAppend).append(cardContainer);

  // Para cada card criado, dar um append na div da pesquisa
  createCard(array.splice(0,10),false).forEach((card, i) => {
    document.getElementById("cardAppend").append(card);
  });

  arrayScroll=array;

}
localStorage.sco = 60;
function att(){
  if(document.getElementById("cardAppend")){

    if(document.documentElement.scrollTop > localStorage.sco){

      if(arrayScroll.length == 0){
        console.log("ACABOU KRL");
      }else{
        alert("Cards inseridos");
        createCard(arrayScroll.splice(0,10),false).forEach((card,i) => {document.getElementById("cardAppend").append(card)});
        localStorage.sco = document.getElementById("cardAppend").clientHeight - window.innerHeight;
      }
    }
  }
}

function createCard(array,ranker){
  console.log(array);
    var cards=[];
    let cont =0;
    array.forEach((item,i) => {
    var card = document.createElement("div");
    card.setAttribute("class","item card d-inline-flex m-2 rounded shadow-lg border");
    card.setAttribute("style","width:13rem;height:16rem;");

    var imageCard = document.createElement("img");
    imageCard.setAttribute("class","card-img-top");
    imageCard.setAttribute("src",item.image_url);
    imageCard.setAttribute("style","height:13rem");

    var linkImage = document.createElement("a");
    linkImage.setAttribute("id",item.mal_id);
    linkImage.setAttribute("target","_blank");
    linkImage.setAttribute("href","info.html");
    linkImage.setAttribute("onclick","releaseMal(this)");

    if(ranker){
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
    cardBody.setAttribute("class","card-body p-0");
    cardBody.setAttribute("style","");


    var title = document.createElement("p");
    title.setAttribute("class","card-title mt-2 text-center m-0");
    title.setAttribute("data-toggle","tooltip");
    title.setAttribute("style","text-overflow:ellipsis;overflow:hidden;white-space:nowrap");
    title.setAttribute("data-placement","bottom");
    title.setAttribute("data-original-title","Clique para copiar o título");
    title.setAttribute("onclick","tooltipCopy(this)");
    title.setAttribute("id","t"+item.mal_id);
    title.setAttribute("data-clipboard-text",item.title);
    title.innerHTML=item.title;
    new ClipboardJS('#t'+item.mal_id);

    if(item.score !=null){
      if(!ranker){
        var badge = document.createElement("span");
        badge.setAttribute("class","badge badge-primary position-absolute p-1 rounded");
        badge.innerHTML="Score: "+item.score;
        card.append(badge);
      }
    }

    linkImage.append(imageCard);
    cardBody.append(title);
    card.append(linkImage);
    card.append(cardBody);
    cards[i] = card;
  });
  return cards;
}
