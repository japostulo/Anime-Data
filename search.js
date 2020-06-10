let inputAnime = document.getElementById("inputAnime").value;

anime = {
  'search': async () => {
    try{
      toggleSearchBar("");
      console.log(inputAnime);
      let data = await connectionApi(animeSearch(inputAnime));
      console.log(data.data.results);
      return data.data.results;
    }
    catch(error){
      console.log(error)
    }
  },
  'top': async () => {
    try{
      let data = await connectionApi(animeTop());
      return data.data.top;
    }
    catch(error){
      console.log(error)
    }
  },
  'week': async () => {
    try{
      let week = dayOfTheWeek();
      week = week.toLowerCase();
      let data = await connectionApi(animeWeek(dayOfTheWeek()));
      return data.data[week];
    }
    catch(error){
      console.log(error);
    }
  },
  'data': async (id) => {
    try{
      let data = await connectionApi(animeData(id));
      console.log(data.data);
      return data.data;
    }
    catch(error){
      console.log(error)
    }
  },
  'gender': async () => {
    try{
    let config = {
      mode : 'no-cors'
    };
    let data = await connectionApi(animeGender(), config);
    return data.data;
    }
    catch(error){
      console.log(error)
    }
  },
}

function animeSearch(anime){
  return `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=10`;
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

async function connectionApi(animeQuery, config ={}){
    return axios.get(animeQuery, config);
}

function dayOfTheWeek(){
  var dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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

async function searchYoutube(valor) {
  var q = valor;
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });
  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    var id = response.result.items[0].id.videoId;
    loadVideo(id, response.result);
  });
}
