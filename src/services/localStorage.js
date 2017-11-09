
export function getFavoriteShows(){
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  return new Promise((resolve, reject)=>{
    resolve(favorites)
  })
}

export function addOrRemoveFavoriteShow(data){
  let favorites = JSON.parse(localStorage.getItem('favorites')) || []


  return new Promise((resolve, reject)=>{
    const found = favorites.find(i=> i.id === data.id)
    if(!found){
      favorites.push(data)
    }else{
      favorites = favorites.filter(i=>i.id !== data.id)
      
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
    
    resolve(favorites)
  })

}

