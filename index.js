
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const next = document.getElementById("next");
let realData = "";
let quotesData = "";

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random()*100);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null ? author.innerText = `Anonymous` : author.innerText = `By ${quotesData.author}`;
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
    } catch (error) {

    }
};

next.addEventListener('click', getNewQuotes);
getQuotes();
