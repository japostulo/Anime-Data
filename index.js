async function loadHome(){
  //search("","animeTop");
  var x = await search("","animeWeek");
  createCarousel(x.friday,"carouselContainer","Animes da semana");

  var y = await search("","animeTop");
  createCarousel(y,"carouselContainer","Animes mais assistidos");

  
}
