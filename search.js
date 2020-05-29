async function search(id, funcao){
  var anime = document.getElementById("inputAnime").value;

  if(funcao == 'animeSearch'){
    try{
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
    data = await connectionApi(animeWeek(dayOfTheWeek()));
    return data.data;
    }

    catch(error){
      console.log(error)
    }
  }

  else if(funcao == 'animeGender'){
    try{
    data = await connectionApi(animeTop());
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

function connectionApi(animeQuery){
    return axios.get(animeQuery);
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
