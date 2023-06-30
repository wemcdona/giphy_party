const $gifArea = $("#giphs");
const $searchInput = $("#search");

function addGif(res) {
    let numResults = res.data.length;
    if(numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", { src: res.data[randomIdx].images.original.url, class: "w-100"});
        $newCol.append($newGif);
        $gifArea.append($newCol);
        console.log(addGif);
    }
}

$("form").on("submit", async function(evt) {
    evt.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val("");
    console.log(searchTerm);

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=PsaFTPQg1k0nYxjAEFnX7ETmJjVP44TZ&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    addGif(response.data);
    console.log(response);
});

$("#remove").on("click", function() {
    $gifArea.empty();
});
