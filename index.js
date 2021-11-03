// Get results image
const catResult = document.getElementById('cat-result');
const dogResult = document.getElementById('dog-result');

// Buttons
const catButton = document.getElementById('cat-btn');
const dogButton = document.getElementById('dog-btn');


// API
apiCat = 'https://aws.random.cat/meow';
apiDog = 'https://dog.ceo/api/breeds/image/random';


// Fetch cats
async function getCat() {
  const response = await fetch(apiCat);
  const data = await response.json();
  catResult.src = data.file;
};

// Fetch Dogs
async function getDog() {
  const response = await fetch(apiDog);
  const data = await response.json();
  dogResult.src = data.message;
};

// Get images and Event Listener
getCat();
getDog();

catButton.addEventListener('click', getCat);
dogButton.addEventListener('click', getDog);
