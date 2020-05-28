function search(id, funcao){
  var anime = document.getElementById("inputAnime").value;

  if(funcao == 'animeSearch'){
    connectionApi(animeSearch(anime));
  }
  else if(funcao == 'animeTop'){
    connectionApi(animeTop());
  }
  else if(funcao == 'animeWeek'){
    connectionApi(animeWeek(dayOfTheWeek()));
  }
  else if(funcao == 'animeGender'){
    connectionApi(animeTop());
  }
  else if(funcao == 'animeData'){
    connectionApi(animeData(id));
  }
  else{
    console.error("Function isn't defined")
  }
}

function animeSearch(anime){
  return `https://api.jikan.moe/v3/search/anime?q=${anime}`;
}

function animeTop(){
    return `http://api.jikan.moe/v3/top/anime/1/tv`
}

function animeWeek(week){
   return `https://api.jikan.moe/v3/schedule/${week}`;
}

function animeGender(){
  return `https://api.jikan.moe/v3/genre/anime/1/`
}

function animeData(mal_id){
  return `https://api.jikan.moe/v3/anime/${mal_id}`;
}

function setData(data){
  animeData = data;
}

function getData(){
  return animeData;
}

async function connectionApi(animeQuery){
    var data = await axios.get(animeQuery)
   .then(resp => resp)
   .catch(error => error)
   .finally(term => term);
   setData(data.data);
}

function dayOfTheWeek(){
  var dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Friday', 'Sunday'];
  var day = [1,2,3,4,5,6,0];
  var date = new Date();
  date = date.getDay();
  day.filter((item, index) => {
    if(date == item){
      dayOfTheWeek = dayOfTheWeek[index];
    }
  });
  return dayOfTheWeek;
}
