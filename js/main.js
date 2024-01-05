let partMovies = movies.slice(0, 100)
let elMoveList = document.querySelector('.movies__list')
let elSelCat = document.querySelector('.sel__category')


fnRender(partMovies)

function fnRender(data) {
    elMoveList.innerHTML = ''
    data.forEach((item) => {
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
}

function fnYear(value) {
    if (value == 'new') {
        fnRender(partMovies.sort((a, b) => b.movie_year - a.movie_year));
    } else {
        fnRender(partMovies.sort((a, b) => a.movie_year - b.movie_year));

    }
}

function fnRanting(value) {
    if (value == 'max') {
        fnRender(partMovies.sort((a, b) => b.imdb_rating - a.imdb_rating));
    } else {
        fnRender(partMovies.sort((a, b) => a.imdb_rating - b.imdb_rating));

    }
}

let arrCategory = []
partMovies.forEach((item) => {
   if(!arrCategory.includes(item.Categories)){
    arrCategory.push(item.Categories)
   }
})

arrCategory.forEach((item) => {
   let newOption = document.createElement('option')
   newOption.textContent = item
   elSelCat.appendChild(newOption) 
})

function fnCategory(value) {
    fnRender(partMovies.filter((item)=> item.Categories == value));
}
function fnSearch(event){
    event.preventDefault()
    let val = event.target.search.value
    fnRender(partMovies.filter((item)=> item.Title.toString().toLowerCase().includes(val.toLowerCase())));
}

function fnReset(value){
    if (value == '')
    fnRender(partMovies)
}
function fnPagenation(count){
    fnRender(partMovies.slice((count-1) *10 ,count *10));
}
let elPagenation = document.querySelector('.pagenation')
for (let i = 0; i < partMovies.length / 10; i++) {
    console.log(i);
    let newButton = document.createElement('button')
    newButton.textContent = i+1
    newButton.classList = 'btn btn-warning ms-3'
    newButton.setAttribute('onclick', `fnPagenation(${i+1})` )
    elPagenation.appendChild(newButton)
    
   }

