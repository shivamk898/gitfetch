const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const client_id = "0f4cddac091e8ae94a9e";
const client_secret = "75732fb448a2752e62dbf439b01689cbf41cb730";

const fetchUsers = async (user) => {
	const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
	const data = await api_call.json();
	return {data}
};

const showData = () => {
	fetchUsers(inputValue.value).then((res)=>{
		console.log(res);

		nameContainer.innerHTML =`Name: <span class="main__profile-value">${res.data.name}</span>`;
		unContainer.innerHTML =`Username: <span class="main__profile-value">${res.data.login}</span>`;	
		reposContainer.innerHTML =`Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;	
		urlContainer.innerHTML =`URL: <span class="main__profile-value">${res.data.html_url}</span>`;		
	})
};

searchButton.addEventListener('click', ()=>{
	console.log('hello');
	showData();
});