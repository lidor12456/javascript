let userName = document.querySelector("h1");
// userName.textContent = "hey";
let userPic = document.querySelector("img");
// userPic.src = "";
let userRepo = document.querySelector("h2");
// userRepo.textContent = "bye";
let input = document.querySelector("#userInput");
let submit = document.querySelector("#submit");



submit.addEventListener ('click', ()=> {

    const gitApi = (url = `https://api.github.com/users/${input.value}`) => {
	console.log(url);
	return axios.get(url);
};
const gitData = ({ data }) => {

    userName.textContent = data.login;
    userPic.src = data.avatar_url
    userRepo.textContent = data.public_repos;

	console.log(data);

	// return Promise.resolve(data.next);
};


gitApi()
	.then(gitData)
    .catch((err) => {
		console.log('ERROR!!', err);
	});



})



