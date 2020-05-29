async function loadHome(){
  //search("","animeTop");

  var y = await search("","animeTop");

  createCarousel(y,"carouselContainer","Animes mais assistidos");
}
