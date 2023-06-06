//our news api
//api get method
//reset page method
//increment page method

const ENDPOINT = "https://newsapi.org/v2/everything";
const API_KEY = "a5a2a7ed599d4fb5b35a846b0e594488";

export default class NewsApi {
    constructor() {
      this.queryPage = 1;
      this.searchQuery = "";
    }
  
    getNews() {
      const url = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.queryPage}`;
      const options = {
        headers: {
          "X-Api-Key": API_KEY,
        },
      };
  
      return fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          this.incrementPage();
          return data;
        });
    }
  
    resetPage() {
      this.queryPage = 1;
    }
  
    incrementPage() {
      this.queryPage += 1;
    }
  }