//hold the api code for my newsapi
const API_KEY = "a5a2a7ed599d4fb5b35a846b0e594488";
const ENDPOINT = `https://newsapi.org/v2/everything`;

function getNews(query){
    return fetch(`${ENDPOINT}?apiKey=${API_KEY}&q=${query}`)
    .then((res) => {
        //console.log(res.json());
        return res.json();
    })
};

export default {getNews};