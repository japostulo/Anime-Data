async function loadHome(){
  //search("","animeTop");
  let x = await search("","animeWeek");
  createCarousel(x,"carouselContainer","Animes da semana");

  let y = await search("","animeTop");
  createCarousel(y,"carouselContainer","Animes mais assistidos");

}

async function homeSearch(){
  let y = await search("","animeSearch");
  createCardSearch(y,"searchContainer","Sua pesquisa");
}
