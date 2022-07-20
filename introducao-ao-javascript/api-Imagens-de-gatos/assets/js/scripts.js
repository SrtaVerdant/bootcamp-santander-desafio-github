const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const btn = document.getElementById('change-cat');

const getCats = async () => {
	const data = await fetch(BASE_URL)
		.then((res) => res.json())
		.catch((e) => console.log(e));

	return data[0].url;

};

const loadImg = async () => {
	const img = document.getElementById('cat');
	img.src = await getCats();
};

btn.addEventListener('click', loadImg);

loadImg();