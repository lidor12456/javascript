let userName = document.querySelector("h1");
let userPic = document.querySelector("img");
let rated = document.querySelector("#rated");
let genere = document.querySelector("#genre");
let director = document.querySelector("#director");
let year = document.querySelector("#year");
let input = document.querySelector("#userInput");
let submit = document.querySelector("#submit");



submit.addEventListener ('click', ()=> {

    const movieApi = (url = `http://www.omdbapi.com/?t=${input.value}&apikey=f3657fc8`) => {
	return axios.get(url);
};

const movieData = ({ data }) => {

    userName.textContent = data.Title;
    userPic.src = data.Poster;
    rated.textContent = data.Rated;
    genere.textContent = data.Genre;
    director.textContent = data.Director;
    year.textContent = data.Year;


	// return Promise.resolve(data.next);
};


movieApi()
	.then(movieData)
    .catch((err) => {
		console.log('ERROR!!', err);
	});



})



