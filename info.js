function loadHome(){
  // ID PARA CARREGAR INFORMAÇÕES
  // titulo do anime = animeTitle
  // container de vídeo (iframe) = youtubeVideo
  // titulo do video = videoTitle
  // container de informacões (menu da direita 'info') = info
  // container de openings e endins (menu da direita 'opening/ending') = opening;

  // funcionamento dos containers de infos e opening:
  // apenas carregar TODAS informações no loadHome e nos devidos containers que as funções abaixo deixará o set visible dos containers para alterar o conteúdo.
}
function loadInfo(obj){
  // obj.style.backgroundColor='red';
  document.getElementById("btnInfo").style.backgroundColor='#dc3545';
  document.getElementById("info").classList.remove("d-none");
  document.getElementById("opening").classList.add("d-none");
  document.getElementById("btnOpening").style.backgroundColor='#ffc107';
}
function loadOpening(obj){
  // obj.style.backgroundColor='red';
  document.getElementById("btnInfo").style.backgroundColor='#ffc107';
  document.getElementById("info").classList.add("d-none");
  document.getElementById("opening").classList.remove("d-none");
  document.getElementById("btnOpening").style.backgroundColor='#dc3545';
}
