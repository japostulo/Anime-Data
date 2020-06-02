async function loadHome(){


  let x = await search("","animeWeek");
  createCarousel(x,"carouselContainer","Animes da semana");

  let y = await search("","animeTop");
  createCarousel(y,"carouselContainer","Animes mais assistidos");

}

function home(){
  document.getElementById("searchContainer").style.display="none";
  let content = document.getElementById("content");
  content.removeAttribute("style");
}
async function homeSearch(){
  let y = await search("","animeSearch");
  createCardSearch(y,"searchContainer","Sua pesquisa");
}
