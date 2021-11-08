// AJAX and APIs Exercise

// 1a
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`)

// 1b
p1.innerText = jokeJS1.setup;

// 1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

// 2a 
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)

    // 2b
    .then(friendsJS2 => {

        // 2c
        console.log(`Question 2 was successful`);
        p3.innerText = friendsJS2.data.character;
        p4.innerText = friendsJS2.data.quote;
    })

    // 2d
    .catch(err => {
        console.log(`Question 2 was not successful`);
        console.log(err);
    });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

// 3b
async function quoteFunc() {
    try {
        // 3a
        console.log(`Question 3 was successful`);
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);

        // 3c
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;

        // 3d
    } catch (err) {
        console.log(`Question 3 was not successful`);
        console.log(err);
    }
}
quoteFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc() {
    try {
        console.log(`Question 4 was successful`);
        const finalEp = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=Mandalorian&embed=episodes`)
        p7.innerText = finalEp.data._embedded.episodes[15].name
        // 4b
    } catch (err) {
        console.log(`Question 4 was not successful`);
        console.log(err);
    }
}
tvMazeFunc();


// Bonus

// 5 
const img = document.createElement(`img`);
const body = document.querySelector(`body`);

async function poke() {
    try {
        console.log(`Bonus Question 5 was successful`);
        const pokePic = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        img.src = pokePic.data.sprites.front_shiny
        body.append(img);
    } catch (err) {
        console.log(`Bonus Question 5 was not successful`);
        console.log(err);
    }
}
poke();