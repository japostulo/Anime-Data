async function loadHome(){
  //search("","animeTop");

  var y = await search("","animeTop");

  createCarousel(y,"carouselContainer","Animes mais assistidos");

  var x = await search("","animeWeek");
  console.log(x);
  createCarousel(x.friday,"carouselContainer","Animes da semana");
}
