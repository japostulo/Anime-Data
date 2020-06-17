var title = document.getElementById("animeTitle");
var videoTitle = document.getElementById("videoTitle");
var frameVideo = document.getElementById("youtubeVideo");
var info = document.getElementById("info");
var openings = document.getElementById("opening");

async function loadHome(){
  login();
  //Fazendo a requisição dos dados do anime especifico
  var animeDados = await anime.data(localStorage.mal_id);

  //adicionando titulo ao vídeo anime referenciado
  title.innerHTML= '<h2>' + animeDados.title + '</h2>';
  videoTitle.innerHTML= '<h2>' + animeDados.title+' - Trailer' + '</h2>';

  //redenrizando o html para a criação das openings e endings
  let html = '';
  animeDados.opening_themes.forEach((op, i) => {
    html += `<tr><td onclick='trigger(this)' id='${animeDados.title} opening ${i +1}' style='cursor:pointer'> Op. ${i +1} ${op}} </td></tr>`
  });
  document.getElementById("openings").innerHTML=html;
  html='';
  animeDados.ending_themes.forEach((op, i) => {
    html += "<tr><td onclick='trigger(this)' style='cursor:pointer'>" + op + '</td></tr>';
  });
  document.getElementById("endings").innerHTML=html;

  //adicionando informações a info
  document.getElementById('synopsis').innerHTML=animeDados.synopsis;
  document.getElementById('episodes').innerHTML=animeDados.episodes +' episodios, '+animeDados.duration;

  //Adicionando vídeo Trailer
  setTimeout(() => {searchYoutube(animeDados.title + ' Official Trailer');}, 500);
}

function loadOpening(obj){
  document.getElementById("btnEnding").style.borderBottom='none';
  document.getElementById("ending").classList.add("d-none");
  document.getElementById("opening").classList.remove("d-none");
  document.getElementById("btnOpening").style.borderBottom='3px solid #007bff';
}
function loadEnding(){
  document.getElementById("btnOpening").style.borderBottom='none';
  document.getElementById("ending").classList.remove("d-none");
  document.getElementById("opening").classList.add("d-none");
  document.getElementById("btnEnding").style.borderBottom='3px solid #007bff';
}
function loadVideo(id,data){
  iframe = "<iframe id='YoutubeVideo' class='w-100' style='height:26rem' src='https://www.youtube.com/embed/" + id  + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  document.getElementById("colVideo").innerHTML = iframe;
  document.getElementById("videoTitle").innerHTML = "<h3>" + data.items[0].snippet.title + "</h3>";
}
function trigger(obj){
  searchYoutube(obj.id);
}
