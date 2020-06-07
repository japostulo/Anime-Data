async function search(id, funcao){
  var anime = document.getElementById("inputAnime").value;

  if(funcao == 'animeSearch'){

    try{
      toggleSearchBar("");
      data = await connectionApi(animeSearch(anime));
      return data.data.results;
    }

    catch(error){
      console.log(error)
    }
  }

  else if(funcao == 'animeTop'){
    try{
    data = await connectionApi(animeTop());
    return data.data.top;
    }

    catch(error){
      console.log(error)
    }

  }

  else if(funcao == 'animeWeek'){
    try{
    let week = dayOfTheWeek();
    week = week.toLowerCase();
    data = await connectionApi(animeWeek(dayOfTheWeek()));
    return data.data[week];
    }

    catch(error){

    }
  }

  else if(funcao == 'animeGender'){
    try{
      let config = {
        crossdomain: true,
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        }

      };

    data = await connectionApi(animeGender(), config);
    console.log("Teste", data);
    return data.data;
    }

    catch(error){
      console.log(error)
    }
  }
  else if(funcao == 'animeData'){
    try{
    data = await connectionApi(animeData(id));
    return data.data;
    }

    catch(error){
      console.log(error)
    }
  }
  else if(funcao == 'youtube'){

    try{

      searchYoutube();
    }

    catch(error){
      console.log(error)
    }
  }
  else{
    console.error("Function isn't defined")
  }
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

function searchYoutube() {
  console.log( $('#query').val());
  var q = $('#query').val();
  //var q = 'Jo Jo op 1';
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    //console.log(response.result.items[0].id.videoId);

  });
}
