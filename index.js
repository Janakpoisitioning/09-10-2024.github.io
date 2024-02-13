

// get elements by their ID
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function () {
    // get the search input value
    const searchTerm = searchInput.value;
    // do something with the search term (e.g. redirect to a search results page)
    console.log(`Searching for "${searchTerm}"...`);

    var text1 = document.getElementById("textField");
    text1.style.display = "block";
    const rawData = `{
        "90019302002":"5779CD3EE6A7673F2ED4419E426ECC4BD2BE94A9F5041CF192FF4EB8E1B6E71A",

        "90019302005":"0C93C9AE01722831509A3AABE7F7557581C1B548C5141071188942E45FD44D4D",
        
        "90019302007":"EB61F6FF6B2E7D0B6243DE27A86A311EAE74B52562ED9261FC4513025D6B1D55",
        
        "90019302012":"8F6A2318675E15ABA2B234DA6CDA0187F2580DF9753F5E1A5479E303242DA0FA",
        
        "90019302013":"2FD94BDAEE9B9D5EDB46A228FD3319080C293F86457F212BB1B75F3B45A78FCD",
        
        "90019302014":"0B54D6EAADB3FB19A6CE3AFF7846BD7F541BCFBD6C6E70459A4C4B7D430977A3",
                
        "90019305094":"1EAC0E18FFF796B91F4FF70329F57D992FCF4A69FE391BA50D4EFEB61F6989E9"
    }`;
    let jsonData = JSON.parse(rawData);
    console.log(searchInput.innerHTML);
    console.log(jsonData);
    let result = jsonData[parseInt(searchTerm)];
    console.log(result);
    let final_result = "The activation code is " + result;
    text1.innerHTML = final_result;
});

function displayText() {

}

