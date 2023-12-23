let partMovies = movies.slice(50, 101)
let elMoveList = document.querySelector('.movies__list')


partMovies.forEach((item) => {
    console.log(item);
    let newLi = document.createElement('li')
    newLi.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg?" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.Title}</h5>
            <p class="card-text">${item.Categories}</p>
            <p class="card-text">${item.movie_year}-yil</p>
            <p class="card-text">${item.imdb_rating}⭐️</p>
            <a href="https://www.youtube.com/watch?v=${item.ytid}" class="btn btn-warning" target="_blank">Watch Movie</a>
            </div>
        </div>
    `
    elMoveList.appendChild(newLi)
})