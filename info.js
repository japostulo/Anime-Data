var anime = {'title': 'Naruto','synopsis':'Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, descobre que tem um demônio raposa selado dentro de si.','episodes':'230','duration':'23min per episode','status':'Finished','opening_themes' : ['R★O★C★K★S, by Hound Dog (eps 1-25)', 'Haruka Kanata (遥か彼方) by Asian Kung-fu Generation (eps 26-53)', 'Kanashimi wo Yasashisa ni (悲しみをやさしさに) by little by little (eps 54-77)', 'GO!!! by FLOW (eps 78-103)', 'Seishun Kyosokyoku (青春狂騒曲) by Sambomaster (eps 104-128)', 'No Boy, No Cry (ノーボーイ・ノークライ) by Stance Punks (eps 129-153)', 'Namikaze Satellite (波風サテライト) by Snowkel (eps 154-178)', 'Re:member by FLOW (eps 179-202)', 'YURA YURA (ユラユラ) by Hearts Grow (eps 203-220)'], 'ending_themes': ['Wind by Akeboshi (eps 1-25)', 'Harmonia by Rythem (eps 26-51)', 'Viva Rock ~Japanese Side~ by Orange Range (eps 52-64)', 'ALIVE by Raiko (eps 65-77)', 'Ima made Nando mo by the Mass Missile (eps 78-89)', 'Ryusei by Tia (eps 90-103)', 'Mountain A Go Go Too by Captain Straydum (eps 104-115)', 'Hajimete Kimi to Shabetta by GagagaSP (eps 116-128)', 'Nakushita Kotoba by No Regret Life (eps 129-141)', 'Speed by Analogfish (eps 142-153)']};

var title = document.getElementById("animeTitle");
var videoTitle = document.getElementById("videoTitle");
var frameVideo = document.getElementById("youtubeVideo");
var info = document.getElementById("info");
var openings = document.getElementById("opening");
function loadHome(){
  //adicionando titulo ao vídeo anime referenciado
  title.innerHTML=anime.title;
  videoTitle.innerHTML=anime.title+' - Trailer';

  //redenrizando o html para a criação das openings e endings
  let html = '';
  anime.opening_themes.forEach((op, i) => {
    console.log(op);
    //html += "<tr><td onclick='trigger(this)' style='cursor:pointer'> Opening " + i " "+  op + "</td></tr>";
    html += `<tr><td onclick='trigger(this)' style='cursor:pointer' value='${anime.title} Op ${i +1}'> Op. ${i +1} ${op}} </td></tr>`
  });
  document.getElementById("openings").innerHTML=html;

  html='';
  anime.ending_themes.forEach((op, i) => {
    html += "<tr><td onclick='trigger(this)' style='cursor:pointer'>" + op + '</td></tr>';
  });
  document.getElementById("endings").innerHTML=html;

  //adicionando informações a info
  document.getElementById('synopsis').innerHTML=anime.synopsis;
  document.getElementById('episodes').innerHTML=anime.episodes +' episodios, '+anime.duration;

  // ID PARA CARREGAR INFORMAÇÕES
  // titulo do anime = animeTitle
  // container de vídeo (iframe) = youtubeVideo
  // titulo do video = videoTitle
  // container de informacões (menu da direita 'info') = info
  // container de openings e endins (menu da direita 'opening/ending') = opening;

  // funcionamento dos containers de infos e opening:
  // apenas carregar TODAS informações no loadHome e nos devidos containers que as funções abaixo deixará o set visible dos containers para alterar o conteúdo.
  login();
}
function loadInfo(obj){
  document.getElementById("btnInfo").style.backgroundColor='white';
  document.getElementById("info").classList.remove("d-none");
  document.getElementById("opening").classList.add("d-none");
  document.getElementById("btnOpening").style.backgroundColor='#dc3545';
  document.getElementById("ending").classList.add("d-none");
  document.getElementById("btnEnding").style.backgroundColor='#dc3545';
}
function loadOpening(obj){
  // obj.style.backgroundColor='red';
  document.getElementById("btnInfo").style.backgroundColor='#dc3545';
  document.getElementById("info").classList.add("d-none");
  document.getElementById("btnEnding").style.backgroundColor='#dc3545';
  document.getElementById("ending").classList.add("d-none");
  document.getElementById("opening").classList.remove("d-none");
  document.getElementById("btnOpening").style.backgroundColor='white';
}
function loadEnding(){
  document.getElementById("btnInfo").style.backgroundColor='#dc3545';
  document.getElementById("info").classList.add("d-none");
  document.getElementById("btnEnding").style.backgroundColor='white';
  document.getElementById("ending").classList.remove("d-none");
  document.getElementById("opening").classList.add("d-none");
  document.getElementById("btnOpening").style.backgroundColor='#dc3545';
}
function loadVideo(id,data){
  iframe = "<iframe id='YoutubeVideo' class='w-100' style='height:26rem' src='https://www.youtube.com/embed/" + id  + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  document.getElementById("colVideo").innerHTML = iframe;
  document.getElementById("videoTitle").innerHTML = "<h3>" + data.items[0].snippet.title + "</h3>";
  document.getElementById("animeTitle").innerHTML = "Naruto";

}
function trigger(obj){
  console.log(obj);
  var objValue = obj.innerHTML;
  searchYoutube('Abertura Naruto '+objValue);
}
