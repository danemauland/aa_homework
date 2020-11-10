export const fetchSearchGiphys = function(searchTerm) {
    return $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=05FxFP1fC5KvrNagjyytcyguaXbkAAIU&limit=2`,   
        method: "GET"
    })
};